---
title: Backup na nuvem com Tarsnap
lead: >
  Recentemente precisei implementar uma solução de backup para alguns
  servidores de internet, após uma pesquisa rápida optei pelo Tarsnap, uma
  solução de backup em nuvem baseado na infra-estrutura de armazenamento da
  Amazon...
---

![Chewbacca fazendo backup na nuvem](/files/chewbacca-nuvem.jpg)

_Este post estava sendo escrito antes de eu abandonar meu blog, então onde
estiver escrito **recentemente, hoje, etc**, leia-se **2 anos atrás**._

Recentemente precisei implementar uma solução de backup para alguns servidores
de internet, após uma pesquisa rápida optei pelo [Tarsnap](http://tarsnap.com),
uma solução de backup em nuvem baseado na infra-estrutura de armazenamento da
[Amazon](http://www.tarsnap.com/infrastructure.html).

Eu queria algo simples de implementar e manter, não queria ter mais um servidor
nas mãos, nem queria ter que lidar com detalhes de ssh, rsync, ftp, etc.
Em resumo:

* Não queria manter um novo servidor (nem físico nem virtual)
* Não queria usar o [Bacula](http://bacula.org), ótima ferramenta mas complicado
* A solução deveria ser simples de configurar e manter, do tipo "configure uma vez, contrate um serviço e funcione para o resto da vida"
* Não estava procurando apenas uma ferramenta, mas também um serviço de armazenamento para backup

O Tarsnap é uma ferramenta e também um serviço de armazenamento, o
preço é bem razoável, $0.30 por GB de armazenamento mensal e $0.30 por cada GB
transferido. A cobrança é pré-paga, e para começar a usar o serviço é
necessário adicionar um crédito mínimo de $ 5.

Os créditos são consumidos diariamente, quando eles acabam o serviço continua
funcionando por até 7 dias, isto dá tempo de pôr créditos novamente sem
interrupção dos backups. Hoje, o backup dos meus servidores tem aproximadamente
7 GB e isto consome um pouco menos de $ 5 mensal.

Infelizmente, o tarsnap não é [software-livre](http://www.gnu.org/philosophy/free-sw.pt-br.html), o autor disponibiliza o código
fonte, mas a licença não permite redistribuir o software com modificações.
Apesar disso o autor afirma contribuir bastante com o
[libarchive](http://code.google.com/p/libarchive), uma biblioteca livre para
compressão e arquivamento usada como base para o tarsnap.

Não vou detalhar o uso da ferramenta, darei apenas dois exemplos básicos:
(1) como adicionar um servidor e (2) como criar backups.
Considerando que você já tem o tarsnap instalado em seu servidor,
[veja as instruções de instalação aqui](https://www.tarsnap.com/download.html),
gere uma chave para ele com o comando abaixo, [se tiver
dificuldades consulte este link](http://www.tarsnap.com/gettingstarted.html).

<pre class="terminal">
<code>
# tarsnap-keygen --keyfile /root/tarsnap.key --user me@example.com --machine mybox
</code>
</pre>

Substitua _me@example.com_ pelo email usado para criar a conta no Tarsnap, e
_mybox_ pelo hostname do seu servidor. **Faça uma cópia de seguança do
arquivo `/root/tarsnap.key`, sem ele não será possível acessar o backup!**

Com isso já é possível criar um novo backup, o comando abaixo cria um backup do
diretório `/home` por exemplo, [veja outros comandos
aqui](http://www.tarsnap.com/usage.html).

<pre class="terminal">
<code>
# tarsnap -c -f mybackup-home /home
</code>
</pre>

O tarsnap apenas cria, lê, apaga e restaura backups, ele não gerencia
agendamento, política de retenção, periodicidade, etc. É necessário alguma
outra ferramenta para essa tarefa, em uma rápida pesquisa encontrei o
[tarsnapper](http://github.com/miracle2k/tarsnapper), um agendador para o
tarsnap, com ele é possível de maneira simples definir uma política de retenção
usando um arquivo de configuração localizado em `/etc/tarsnapper.conf`. Veja um
exemplo:

{% highlight yaml %}
# fazer backup diario e reter:
# a cada semana (7 dias)
# a cada mes (30 dias)
# a cada semestre (180 dias)

deltas: 1d 7d 30d 180d

target: /mybox/$name-$date

jobs:
  etc:
    source: /etc

  mysql:
    source: /var/backups/mysql
    exec_before: /usr/local/bin/dump-mysql

  foswiki:
    sources:
      - /var/lib/foswiki/data
      - /var/lib/foswiki/pub
{% endhighlight %}

O tarsnapper deve ser agendado no cron, eu sugiro executar ele diariamente,
para isso crie o arquivo `/etc/cron.daily/tarsnapper` com o seguinte conteúdo:

{% highlight sh %}
#!/bin/sh
# Start in the root filesystem, make SElinux happy
cd /

tarsnapper -o configfile /etc/tarsnap.conf -c /etc/tarsnapper.conf make >> /var/log/tarsnapper.log 2>&1
{% endhighlight %}

Dê permissão de execução a este arquivo, isto vai fazer o cron vai rodar o
tarsnapper diariamente executando o tarsnap para cada job presente no arquivo
de configuração. Lembrando que todos os comandos foram testados no sistema
operacional Debian GNU/Linux e não há garantias que funcionem corretamente em
outros sistemas.

Com isso você tem um esquema de backup simples de implementar e manter.
Espero que tenha sido útil de alguma forma, em caso de dúvidas, sugestões ou
reclamações, por favor, entre em contato através do
<a href="mailto:{{ site.email }}">email</a>,
<a href="http://twitter.com/{{ site.twitter_username }}">twitter</a>
ou se preferir atrevés do meu perfil no
<a href="http://github.com/{{ site.github_username }}">github</a>.
