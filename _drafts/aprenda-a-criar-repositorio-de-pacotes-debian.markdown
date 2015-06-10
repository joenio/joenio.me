---
title: Aprenda a criar repositórios de pacotes Debian
tags: tecnologia debian
---

Neste post irei mostrar como configurar um repositório de pacotes [Debian][]
GNU/Linux usando **dput** + **mini-dinstall** + **nginx**. O Debian é um
sistema operacional [livre][] criado e mantido por um grupo independente de
desenvolvedores espalhados pelo mundo, o projeto foi iniciado em 1993 e tem
sido desenvolvido abertamente seguindo o espírito do [projeto GNU][GNU].

Uma das características mais interessantes do Debian é o seu [sistema de
gerenciamento de pacotes][sistema-de-pacotes].

> "Um sistema de gerenciamento de pacotes é uma coleção de ferramentas que
> oferece um método automático para instalar, atualizar, configurar e remover
> pacotes de um sistema operacional. É tipicamente usado em sistemas
> operacionais tipo Unix, que consistem de centenas de pacotes distintos, para
> facilitar a identificação, instalação e atualização" (fonte: Wikipédia)

O sistema de gerenciamento de pacotes do Debian é o [APT][APT],
criado originalmente pelos desenvolvedores do projeto, lançado pela primeira
vez em 9 Março de 1999 no Debian 2.1 (_Slink_), hoje 9 de Junho de 2015 o
[repositório][repositorio] oficial do Debian 8.1 (_Jessie_) conta com um total de 44893
pacotes (**44 mil !!!**), esta enorme quantidade de softwares empacotados
disponíveis nos repositórios oficiais do projeto tornam a vida muito fácil,
pois simplifica enormemente o processo de pesquisar, instalar, atualizar ou
remover qualquer software do computador.

Os pacotes disponibilizados nos repositórios oficiais do Debian pelos
desenvolvedores Debian (integrantes oficiais do projeto) passam por um rígido
controle de qualidade técnica e uma enorme preocupação com questões envolvendo
licenciamento do software empacotado. Se você não é desenvolvedor Debian
e deseja disponibilizar pacotes em um repositório então você vai precisar
criar um _Private Package Archive_ (PPA), é isto que irei mostrar como fazer a
partir daqui.

<div class="alert alert-warning">
<strong>Atenção!</strong>
<em>Todas as instruções a seguir serão dadas com base em meu ambiente, isto
inclui nome de usuário, domínio, caminho de diretórios, etc.  Você deve adaptar
estas instruções com base em suas próprias configurações.</em>
</div>

O setup desenvolvido aqui foi fortemente baseado no post de _Stefano Zacchiroli_:

* [howto: uploading to people.d.o using dput][zack]

## Configurando o servidor

* Debian Wheezy 
* Domínio: _debian.joenio.me_

Instale o `mini-dinstall`:

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

* Debian Testing

Instale o `dput`:

<pre class="terminal">
<code>
# apt-get install dput
</code>
</pre>

Exporte a chave pública GNUPG para para o arquivo `signing.asc`.

<pre class="terminal">
<code>
$ gpg --armor --output signing.asc --export D5609CBE
</code>
</pre>

<div class="alert alert-warning">
<strong>D5609CBE</strong> é a minha chave pública GNUPG, substitua este valor
pelo identificador da sua própria chave.
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

Os pacotes devem ser assinados com chave GNUPG, isto será feito pelo script
[sign-remote][sign-remote], copie [este arquivo][sign-remote-script] para o seu
computador local e adicione a localização dele ao seu **PATH**.

Se o pacote deb foi gerado como **UNRELEASED** nao será possível fazer upload
pois o dput não aceita, então é preciso ao menos mudar para **unstable** antes
de fazer upload.

Com tudo configurado basta executar o seguinte comando para enviar um pacote ao
repositório:

<pre class="terminal">
<code>
$ dput debian.joenio.me &lt;pacote&gt;.changes
</code>
</pre>

## Disponibilizando o repositório publicamente

Para configurar acesso público ao repositório será utilizado o servidor web `nginx`, então
o primeiro passo é instalar ele no servidor:

<pre class="terminal">
<code>
# apt-get install nginx
</code>
</pre>

Criar arquivo de configuração para o diretório onde os pacotes estão localizados:
`/etc/nginx/sites-available/debian.joenio.me`:

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

Habilite o arquivo de configuração e reinicie o `nginx`:

<pre class="terminal">
<code>
# cd /etc/nginx/sites-enabled/
# ln -s /etc/nginx/sites-available/debian.joenio.me
# service nginx restart
</code>
</pre>

Com isso o repositório estará disponível em [http://debian.joenio.me](http://debian.joenio.me).

## Testando o repositório e instalando pacotes

Para instalar os pacotes disponíveis no repositorio basta adicionar as
seguintes entradas no `/etc/apt/sources.list`:

{% highlight sourceslist %}
deb http://debian.joenio.me unstable/
deb-src http://debian.joenio.me unstable/
{% endhighlight %}

Adicionar o chave de assinatura ao banco de dados de segurança do APT:

<pre class="terminal">
<code>
# wget -O - http://debian.joenio.me/signing.asc | apt-key add -
</code>
</pre>

Baixe a lista de pacotes e teste a instalação de algum pacote disponível no repositório:

<pre class="terminal">
<code>
# apt-get update
# apt-get install &lt;pacote&gt;
</code>
</pre>

Referências:

* [How to setup a Debian repository](http://wiki.debian.org/HowToSetupADebianRepository)

[Debian]: http://debian.org
[livre]: http://debian.org/intro/free
[GNU]: http://www.gnu.org
[sistema-de-pacotes]: http://pt.wikipedia.org/wiki/Sistema_gestor_de_pacotes
[repositorio]: http://pt.wikipedia.org/wiki/Repositório
[zack]: http://upsilon.cc/~zack/blog/posts/2009/04/howto:_uploading_to_people.d.o_using_dput
[APT]: http://pt.wikipedia.org/wiki/Advanced_Packaging_Tool
[sign-remote]: http://github.com/joenio/sign-remote
[sign-remote-script]: http://github.com/joenio/sign-remote/blob/master/sign-remote
