---
title: Backup na nuvem com Tarsnap
tags: tecnologia
---

![Soldado clone andando](/files/storm-trooper-andando.jpg)

Recentemente precisei implementar uma solução de backup e eu queria algo
simples de implementar e manter, não queria ter que manter servidor nem sistema
operacional, após uma pesquisa rápida optei pelo Tarsnap, uma solução de backup
na nuvem que utiliza a infra-estrutura do Amazon Web Services.

Neste post vou descrever os critérios utilizados para decidir por esta
ferramenta, em seguida mostro um passo-a-passo de como instalar e configurar
backups com ele.

O Tarsnap é uma ferramenta e também um serviço online de armzenamento para
backup, o preço é razoável, $0.30 por GB de armazenamento por mês e $0.30 por
GB pelo uso de banda. A cobrança é pré-paga e é necessário pagar um valor
inicial de $ 5.00.

Uma das principais razões de eu ter escolhido o Tarsnap é que com ele não
preciso me preocupar com servidores (virtual, dedicado ou compartilhado), nem
com ssh, rsync, ftp, etc, basta assinar o serviço e configurar corretamente o
cliente.

Resumindo:

* Não quero manter servidor (nem físico nem virtual)
* Nem sistema operacional
* Não quero Bacula, ótima ferramenta mas complicado
* Deve ser simples de configurar e manter
* Quero pagar/contratar um serviço específico de backup
* Idealmente o serviço deve fornecer ou suportar oficilamente a ferramenta a ser utilizada para efetuar os backups
* Além do Tarsnap, avaliei uma série de opções de backup online como DropBox e outras do tipo, mas a maioria delas é voltada para usuário Desktop ou não tem clientes Linux, a maioria também não é livre.

A única desvantagem do Tarsnap para mim é justamente o fato de não ser livre,
ele disponibiliza o código fonte, mas a licença não permite redistribuir nem
código fonte nem binários com modificações. O tarsnap é desenvolvido sob o
libarchive http://code.google.com/p/libarchive/ que é livre, e o autor diz
contribuir de volta com este projeto, isso ameniza o fato de não ser livre
apensar de não resolver.

O serviço é baseado na infra-estrutura do Amazon S3 e EC2, o serviço é
pré-pago, você coloca créditos nele e ele vai consumindo isto diariamente. Caso
o crédito acabe ele continua fazendo o backup por até 7 dias, para dar tempo de
vc pôr crédito novamente.

Hoje, o meu backup tem aproximadamente 7 GB no total e tenho gasto menos de $
10 mensal, veja o histórico de pagamentos:

| **Mês** | **Valor** |
| Maio | $ 10 |
| Agosto | $ 10 |
| Outubro | $ 10 |
| Novembro | |

Como instalar e configurar o Tarsnap?

Como sempre utilizo Debian em meus servidores, todos os passos abaixo serão
baseados nesta plataforma.

O tarsnap não é livre, mas o código fonte está disponível, assim eu pude fazer
um pacote não-oficial disponível aqui, adicione a linha abaixo ao seu
/etc/sources.list a seguinte linha:

> deb http://sede.colivre.coop.br/~joenio/debian/ ./

Execute num terminal como root para instalar ele:

> \# apt-get install tarsnap

Com o Tarsnap instalado, o próximo passo é gerar uma chave para o servidor que
você quer fazer backup (estas instruções estão em
http://www.tarsnap.com/gettingstarted.html).

> # tarsnap-keygen --keyfile /root/tarsnap.key --user me@example.com --machine mybox

Faça uma cópia de seguança desta chave, sem ele não será possível mais acessar
o backup do seu servidor.

Para fazer um backup do diretório /home basta executar o seguinte comendo
(estas instruções estão todas em https://www.tarsnap.com/usage.html)

> # tarsnap -c -f mybackup /usr/home /other/stuff

Veja o link acima para outros exemplos de como recuperar ou apagar um backup
por exemplo.

O tarsnap apenas faz, lê, apaga backups, ele não gerencia política de retenção,
para isto é preciso algo mais, pesquisando encontrei o tarsnapper, um agendador
para o tarsnap, com ele é possível de maneira simples definir a política de
retenção usando um arquivo de texto simples, também sem pacote debian, :(

O pacote Debian do tarsnap tem um bug e não reconhece o arquivo de configuração
em /etc/tarsnap.conf apenas em /usr/local/etc/tarsnap.conf, então é preciso
fazer um link simbólico para funcionar adequadamente.

O tarsnapper deve ser agendado no cron, exemplo de minha configuração de backup
e agendamento no cron abaixo:

{% highlight bash %}
$ cat /etc/cron.daily/tarsnapper 
#!/bin/sh

## /etc/cron.daily/tarsnapper
## this file is managed by puppet

# Start in the root filesystem, make SElinux happy
cd /

tarsnapper -o configfile /etc/tarsnap.conf -c /etc/tarsnapper.conf make >> /var/log/tarsnapper.log 2>&1
{% endhighlight %}

Marcando o bit de execução deste arquivo faz o tarsnapper ser executado todos
os dias, o tarsnapper utiliza um arquivo de configuração

{% highlight yaml %}
# cat /etc/tarsnapper.conf
##
## File managed by puppet, dont change it locally
##

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
/etc/apt/sources.list

> deb http://sede.colivre.coop.br/~joenio/debian/ ./

E executar o apt:

> # apt-get install tarsnapper
