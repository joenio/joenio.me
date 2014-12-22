---
title: Backup na nuvem com Tarsnap
tags: tecnologia
---

![Chewbacca fazendo backup na nuvem](/files/chewbacca-nuvem.jpg)

_Este post estava sendo escrito antes de eu abandonar meu blog, então onde
estiver escrito **recentemente**, leia-se **2 anos atrás**._

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

Avaliei uma série de opções, como:
[duplicity](http://www.nongnu.org/duplicity), [rsync.net](http://rsync.net),
[Dropbox](http://www.dropbox.com), etc, mas nada era o que eu queria, então
fiquei com o Tarsnap, ele é uma ferramenta e também um serviço de
armazenamento, o preço é bem razoável, $0.30 por GB de armazenamento mensal e
$0.30 por cada GB transferido. A cobrança é pré-paga, e para começar a usar o
serviço é necessário adicionar um crédito de $ 5.

O serviço é baseado na infra-estrutura do Amazon S3 e EC2, ele vai consumindo
os créditos diariamente, caso os créditos acabem ele continua fazendo o backup
por até 7 dias, para dar tempo de pôr créditos novamente. Hoje, o backup dos
meus servidores tem aproximadamente 7 GB e isto consome um pouco menos de $ 5
mensal.

Infelizmente o tarsnap não é software-livre, o autor disponibiliza o código
fonte, mas a licença não permite redistribuir o software com modificações.
Mas o autor afirma contribuir bastante com o
[libarchive](http://code.google.com/p/libarchive), uma biblioteca livre para
compressão e arquivamento, o tarsnap usa essa biblioteca como base.

Considerando que você já tem o tarsnap instalado, [veja as instruções de
instalação aqui](https://www.tarsnap.com/download.html), gere uma chave para o
seu servidor, [estas instruções podem ser encontradas
aqui](http://www.tarsnap.com/gettingstarted.html).

<pre class="terminal">
<code>
# tarsnap-keygen --keyfile /root/tarsnap.key --user me@example.com --machine mybox
</code>
</pre>

Substitua _me@example.com_ pelo email usado para criar a conta no Tarsnap, e
_mybox_ pelo hostname do seu servidor. **Faça uma cópia de seguança deste
arquivo `/root/tarsnap.key`, sem ele não será possível mais acessar o backup!**

Para fazer um backup do diretório /home basta executar o seguinte comendo
(estas instruções estão todas em https://www.tarsnap.com/usage.html)

> # tarsnap -c -f mybackup /usr/home /other/stuff

Veja o link acima para outros exemplos de como recuperar ou apagar um backup
por exemplo.

O tarsnap apenas faz, lê, apaga backups, ele não gerencia política de retenção,
para isto é preciso algo mais, pesquisando encontrei o tarsnapper, um agendador
para o tarsnap, com ele é possível de maneira simples definir a política de
retenção usando um arquivo de texto simples, também sem pacote debian, :(

<!--
O pacote Debian do tarsnap tem um bug e não reconhece o arquivo de configuração
em /etc/tarsnap.conf apenas em /usr/local/etc/tarsnap.conf, então é preciso
fazer um link simbólico para funcionar adequadamente.
-->

O tarsnapper deve ser agendado no cron, cria o arquivo `/etc/cron.daily/tarsnapper`
com o seguinte conteúdo:

{% highlight bash %}
#!/bin/sh

## /etc/cron.daily/tarsnapper
## this file is managed by puppet

# Start in the root filesystem, make SElinux happy
cd /

tarsnapper -o configfile /etc/tarsnap.conf -c /etc/tarsnapper.conf make >> /var/log/tarsnapper.log 2>&1
{% endhighlight %}

Marcando o bit de execução deste arquivo faz o tarsnapper ser executado todos
os dias, o tarsnapper utiliza um arquivo de configuração que informa quais diretórios
devem ser copiados e qual a periodicidade de execução, tempo de retenção.
Este arquivo fica em `/etc/tarsnapper.conf` exemplo:

{% highlight yaml %}
# Global values, valid for all jobs unless overridden:

# fazer backup diario e reter:
# a cada semana (7 dias)
# a cada mes (30 dias)
# a cada semestre (180 dias)

deltas: 1d 7d 30d 180d

target: /srvdados/$name-$date

jobs:
  etc:
    source: /etc

  mysql:
    source: /var/backups/mysql
    exec_before: /usr/local/bin/escriba-dump-mysql

  foswiki:
    sources:
      - /var/lib/foswiki/data
      - /var/lib/foswiki/pub

  samba:
    sources:
      - /var/lib/samba
      - /home
    excludes:
      - /home/escriba
      - /home/samba/aplicativos
      - /home/samba/arquivos
      - /home/samba/netlogon
      - /home/samba/profiles
      - /home/samba/documentos/Acervo do Cartóri/1 Oficio RI

  arquivo-permanente:
    sources:
      - /var/backups/digitalizacao

  externo:
    sources:
      - /var/backups/biorep100
{% endhighlight %}

O tarsnapper também não está empacotado no Debian, fiz um pacote não-oficial e
subi em meu repositório pessoal, basta adicionar a linha abaixo ao
`/etc/apt/sources.list`:

> deb http://sede.colivre.coop.br/~joenio/debian/ ./

E executar o apt:

<pre class="terminal">
<code>
# apt-get install tarsnapper
</code>
</pre>
