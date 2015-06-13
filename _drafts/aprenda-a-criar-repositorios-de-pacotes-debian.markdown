---
title: Aprenda a criar repositórios de pacotes Debian
tags: tecnologia debian
---

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

O sistema de gerenciamento de pacotes do Debian é o [APT][APT], criado
originalmente pelos desenvolvedores do projeto e lançado pela primeira vez em 9
Março de 1999 no Debian 2.1 (_Slink_), hoje 9 de Junho de 2015 o
[repositório][repositorio] oficial do Debian 8.1 (_Jessie_) conta com um total
de 44893 pacotes (**44 mil !!!**), esta enorme quantidade de softwares
disponíveis nos repositórios oficiais do projeto torna extremamente simples
a tarefa de pesquisar, instalar, atualizar ou remover qualquer software do computador.

Os pacotes disponibilizados nos repositórios oficiais do Debian passam por um
rígido controle de qualidade técnica e uma enorme preocupação com licenças de
software, o processo é liderado pelos desenvolvedores oficiais do projeto e
aberto à contribuição de qualquer um interessado em ajudar, então se você está
empacotando algo tente incluir ele nos repositórios oficiais, veja o [Guia do
Novo Mantenedor Debian][maint-guide] para saber como.

Se isso não for possível ou se não puder esperar o pacote entrar no Debian
então você pode criar um _Private Package Archive_ (PPA) e disponibilizar seu
pacote lá, é isto que irei mostrar como fazer a partir daqui. Esta solução foi
fortemente baseado no post de _Stefano Zacchiroli_, [howto: uploading to
people.d.o using dput][zack].

<div class="alert alert-warning">
<strong>Atenção!</strong>
<em>Todas as instruções a seguir serão baseadas em meu próprio ambiente, isto
inclui nomes de usuários, domínios, diretórios, etc. Você deve adaptar estas
instruções com base em suas próprias configurações.</em>
</div>

## Configurando o servidor

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

## Configurando a estação de trabalho

* Sistema Operacional: **Debian Testing**

Instale o `dput`:

> dput allows you to put one or more Debian packages into the archive

<pre class="terminal">
<code>
# apt-get install dput
</code>
</pre>

Exporte sua chave pública GNUPG para para o arquivo `signing.asc`.

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

Crie arquivo `~/.dput.cf`:

{% highlight ini %}
[debian.joenio.me]
fqdn = debian.joenio.me
method = scp
login = *
incoming = ~/debian.joenio.me/mini-dinstall/incoming
allow_unsigned_uploads = 0
post_upload_command = ssh debian.joenio.me mini-dinstall -b && sign-remote --no-batch debian.joenio.me:debian.joenio.me/unstable/Release
{% endhighlight %}

Os pacotes serão assinados com a chave GNUPG ao serem enviados pelo `dput` ao
servidor, isto será feito pelo script `sign-remote`, disponível
[aqui][sign-remote-script]. Copie este arquivo no seu computador e adicione a
localização ao **$PATH**, se não sabe do que estou falando [leia
isso][variables].

O `dput` irá reclamar se o pacote for **UNRELEASED**, lembre sempre de setar
como **unstable** antes de fazer upload. Estando tudo configurado basta
executar o comando abaixo para fazer upload de um pacote qualquer para o
repositório:

<pre class="terminal">
<code>
$ dput debian.joenio.me &lt;pacote&gt;.changes
</code>
</pre>

## Disponibilizando o repositório publicamente

Até aqui você já tem um repositório com pacotes hospedados nele, mas este
repositório ainda não pode ser utilizado pois não está publicado de nenhuma
forma, geralmente repositórios são disponibilizados por `HTTP` ou `FTP`,
particularmente vejo como muito mais comum o uso do `HTTP`, portanto vamos ver
como configurar acesso público ao repositório via `HTTP` usando o o servidor
web [Nginx][nginx].

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


## Testando o repositório e instalando pacotes

Com o `Nginx` configurado e rodando já temos o repositório e seus pacotes
disponíveis no endereço correspondente:

* [http://debian.joenio.me](http://debian.joenio.me)

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

Se tiver dado tudo certo, agora você tem seu próprio repositório de pacotes
Debian, se você for curioso pode verificar a página [How to setup a Debian
repository][setup] na wiki do Debian, lá tem uma lista de ferramentas além do
`mini-dinstall` para configuração de repositórios Debian, não usei a maioria
das ferramentas listadas lá, mas lendo sobre elas me parece que uma boa opção é
o `aptly`, então se você for curioso o suficiente e desejar testar algo meu
palpite é que vá por aí... se você ... posta aqui um comentário relatando sua
experiência.

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
