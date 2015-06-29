---
title: Aprenda a criar repositórios de pacotes Debian
tags: tecnologia debian
---

![Clone trooper e wall-e empilhando pacotes](/files/clone-trooper-e-wall-e-pacotes.jpg)

Neste post irei mostrar como configurar um repositório de pacotes [Debian][]
GNU/Linux usando **dput** + **mini-dinstall** + **nginx**. O Debian é um
sistema operacional [livre][] criado e mantido por um grupo independente de
desenvolvedores espalhados pelo mundo, o projeto foi iniciado em 1993 e tem
sido desenvolvido abertamente desde então sempre seguindo o espírito do
[projeto GNU][GNU].

Uma das características mais interessantes do Debian é o seu [sistema de
gerenciamento de pacotes][sistema-de-pacotes].

> "Um sistema de gerenciamento de pacotes é uma coleção de ferramentas que
> oferece um método automático para instalar, atualizar, configurar e remover
> pacotes de um sistema operacional. É tipicamente usado em sistemas
> operacionais tipo Unix, que consistem de centenas de pacotes distintos, para
> facilitar a identificação, instalação e atualização" (fonte: Wikipédia)

O sistema de gerenciamento de pacotes Debian chamado [APT][APT] foi criado
originalmente pelos desenvolvedores do projeto e lançado pela primeira vez em 9
Março de 1999 no Debian 2.1 (_Slink_) e conta hoje com um total de 44893 pacotes
(**44 mil !!!**) em seus [repositórios][repositorio] oficiais. Esta enorme
quantidade de softwares disponíveis nos repositórios oficiais do projeto torna
extremamente simple pesquisar, instalar, atualizar ou remover qualquer coisa do
computador.

Os pacotes disponibilizados nos repositórios oficiais do Debian passam por um
rígido controle de qualidade liderado pelos desenvolvedores oficiais do projeto
e aberto à contribuição de qualquer pessoa. Então se você está empacotando algo
veja o [Guia do Novo Mantenedor Debian][maint-guide] para saber como incluir
isso nos repositórios oficiais.

Mas se isso não for possível ou se você não puder esperar o pacote entrar no
Debian seja por qual motivo for, então a solução será criar um repositório
pessoal ou _Private Package Archive (PPA)_. É isto que será descrito aqui a partir
de uma solução proposta inicialmente por _Stefano Zacchiroli_ em seu blog no post
[howto: uploading to people.d.o using dput][zack].

<div class="alert alert-warning">
<strong>Atenção!</strong>
<em>Todas as instruções a seguir são baseadas em meu próprio ambiente, isto
inclui nomes de usuários, domínios, diretórios, etc. Você deve adaptar estas
informações com base em sua realidade.</em>
</div>

## Configurando o servidor para receber pacotes

* Sistema Operacional: **Debian Wheezy**
* Domínio: **debian.joenio.me**

Acesse o servidor via `SSH` e instale o `mini-dinstall`:

> mini-dinstall is a tool for installing Debian packages into a personal APT
> repository

<pre class="terminal">
<code>
# apt-get install mini-dinstall
</code>
</pre>

Crie o diretório onde os pacotes serão copiados:

<pre class="terminal">
<code>
$ mkdir -p ~/debian.joenio.me/mini-dinstall/incoming
</code>
</pre>

Crie o arquivo `~/.mini-dinstall.conf`:

{% highlight ini %}
[DEFAULT]
mail_on_success = false
incoming_permissions = 0750
architectures = all, i386, amd64
archive_style = flat
dynamic_reindex = 1
archivedir = /home/joenio/debian.joenio.me/
generate_release = 1
release_label = Joenio
release_description = Unofficial Debian packages maintained by Joenio Costa
verify_sigs = 0
{% endhighlight %}

## Preparando a estação de trabalho para enviar pacotes

* Sistema Operacional: **Debian Testing**

Instale o `dput` em seu computador:

> dput allows you to put one or more Debian packages into the archive

<pre class="terminal">
<code>
# apt-get install dput
</code>
</pre>

Exporte sua chave pública `GnuPG` para para o arquivo `signing.asc`.

<pre class="terminal">
<code>
$ gpg --armor --output signing.asc --export D5609CBE
</code>
</pre>

<div class="alert alert-warning">
<strong>D5609CBE</strong> é a minha chave, substitua este valor pelo
identificador da sua própria chave.
</div>

Copie o arquivo `signing.asc` para o servidor:

<pre class="terminal">
<code>
$ scp signing.asc debian.joenio.me:~/debian.joenio.me/
</code>
</pre>

Crie arquivo `~/.dput.cf` em seu `$HOME`:

{% highlight ini %}
[debian.joenio.me]
fqdn = debian.joenio.me
method = scp
login = *
incoming = ~/debian.joenio.me/mini-dinstall/incoming
allow_unsigned_uploads = 0
post_upload_command = ssh debian.joenio.me mini-dinstall -b && sign-remote --no-batch debian.joenio.me:debian.joenio.me/unstable/Release
{% endhighlight %}

Os pacotes serão assinados com a chave `GnuPG` ao serem enviados pelo `dput` ao
servidor. Isso será feito pelo script `sign-remote` disponível
[aqui][sign-remote-script]. Copie este arquivo em seu computador e adicione a
localização dele ao `$PATH`, se não sabe do que estou falando [leia
isso][variables].

O `dput` irá reclamar se a distribuição do pacote não for **unstable**, isto é
definido no arquivo `changelog` do pacote, veja o capítulo 4 _Required files
under the debian directory_ no [Guia do Novo Mantenedor Debian][maint-guide]
para entender como fazer isso.

Bem, aqui já temos tudo pronto para fazer _upload_ dos nossos pacotes ao
servidor, basta executar o seguinte comando:

<pre class="terminal">
<code>
$ dput debian.joenio.me &lt;pacote&gt;.changes
</code>
</pre>

Isto irá copiar o pacote _.deb_ e o arquivo _.changes_ dele, irá atualizar os
arquivos _Sources_ e _Packages_ com as informações do pacote e irá assinar o
arquivo _Release_ com a chave pública `GnuPG`.

## Disponibilizando acesso ao repositório publicamente

Até aqui já temos um repositório com pacotes hospedados, mas sem acesso público
aos pacotes ninguém poderá utilizá-lo. Para resolver isto vamos configurar
acesso via `HTTP` usando o servidor web [Nginx][nginx].

Instale o `Nginx` no servidor:

<pre class="terminal">
<code>
# apt-get install nginx
</code>
</pre>

Crie o arquivo de configuração `/etc/nginx/sites-available/debian.joenio.me`:

{% highlight nginx %}
server {
  server_name debian.joenio.me;
  access_log /var/log/nginx/debian.joenio.me.access.log;
  location / {
    root /home/joenio/debian.joenio.me;
    autoindex on;
  }
}
{% endhighlight %}

Habilite o arquivo de configuração e reinicie o serviço:

<pre class="terminal">
<code>
# cd /etc/nginx/sites-enabled/
# ln -s /etc/nginx/sites-available/debian.joenio.me
# service nginx restart
</code>
</pre>

Com o `Nginx` configurado e rodando já temos o repositório e seus pacotes
disponíveis no seguinte endereço:

* [http://debian.joenio.me](http://debian.joenio.me)

## Testando o repositório e instalando pacotes

Para usar este repositorio adicione as seguintes entradas no
`/etc/apt/sources.list` do computador local:

{% highlight sourceslist %}
deb http://debian.joenio.me unstable/
deb-src http://debian.joenio.me unstable/
{% endhighlight %}

Adicione a chave de assinatura ao banco de dados de segurança do `APT`:

<pre class="terminal">
<code>
# wget -O - http://debian.joenio.me/signing.asc | apt-key add -
</code>
</pre>

Atualize a lista de pacotes e teste a instalação de algum pacote disponível no
repositório:

<pre class="terminal">
<code>
# apt-get update
# apt-get install &lt;pacote&gt;
</code>
</pre>

Pronto, temos o nosso próprio repositório de pacotes Debian disponível
publicamente. Você pode agora publicar qualquer pacote que esteja criando e
divulgar o endereço do repositório para que outros usuários Debian possam
instalar os seus pacotes mais facilmente.

Na wiki do Debian em [How to setup a Debian repository][setup] tem uma lista de
ferramentas para configuração de repositórios Debian, não usei a maioria das
ferramentas listadas lá, mas dentre elas o [aptly][aptly] parece uma boa opção
para criar repositório pessoal de pacotes Debian e pode ser uma boa alternativa
para o setup descrito aqui neste post.

<div class="alert alert-info">
<strong>Sobre a foto no título deste post:</strong>
<em>Os cubos (pacotes) de papel utilizados na imagem foram feitos seguindo o tutorial
<a href="http://pt.wikihow.com/Fazer-um-Cubo-de-Origami">
"Como Fazer um Cubo de Origami"
</a>.</em>
</div>

[Debian]: http://debian.org
[livre]: http://debian.org/intro/free
[GNU]: http://www.gnu.org
[sistema-de-pacotes]: http://pt.wikipedia.org/wiki/Sistema_gestor_de_pacotes
[repositorio]: http://pt.wikipedia.org/wiki/Repositório
[zack]: http://upsilon.cc/~zack/blog/posts/2009/04/howto:_uploading_to_people.d.o_using_dput
[APT]: http://pt.wikipedia.org/wiki/Advanced_Packaging_Tool
[sign-remote]: http://github.com/joenio/sign-remote
[sign-remote-script]: http://github.com/joenio/sign-remote/blob/master/sign-remote
[maint-guide]: http://www.debian.org/doc/manuals/maint-guide
[variables]: https://wiki.debian.net/EnvironmentVariables
[nginx]: http://nginx.org
[setup]: http://wiki.debian.org/HowToSetupADebianRepository
[aptly]: http://www.aptly.info
