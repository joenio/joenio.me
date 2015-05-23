---
title: Aprenda a criar repositório de pacotes Debian
tags: tecnologia debian
---

Como criar um repositório privado de pacotes Debian "Private Package Archive (PPA)".
Em um servidor VPS rodando Debian Wheezy com acesso shell e configurado com domínio
_debian.joenio.me_.

Usando dput + mini-dinstall configurar um repositorio pessoal Debian, baseado no
post de _Stefano Zacchiroli_:

* [howto: uploading to people.d.o using dput](http://upsilon.cc/~zack/blog/posts/2009/04/howto:_uploading_to_people.d.o_using_dput/)

Instalar `mini-dinstall` no servidor:

<pre class="terminal">
<code>
# apt-get install mini-dinstall
</code>
</pre>

Criar diretório no servidor para receber os pacotes:

<pre class="terminal">
<code>
$ mkdir -p ~/debian.joenio.me/mini-dinstall/incoming
</code>
</pre>

Criar arquivo `~/.mini-dinstall.conf` no servidor:

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

Instalar `dput` no computador local:

<pre class="terminal">
<code>
# apt-get install mini-dinstall
</code>
</pre>

Exportar chave GNUPG pública para para o arquivo `signing.asc`, **D5609CBE** é
a minha chave GNUPG, você deve substituir este valor pelo identificador da sua
própria chave:

<pre class="terminal">
<code>
$ gpg --armor --output signing.asc --export D5609CBE
</code>
</pre>

Copie o arquivo `signing.asc` para o servidor onde será criado o repositório Debian:

<pre class="terminal">
<code>
$ scp signing.asc debian.joenio.me:~/debian.joenio.me/
</code>
</pre>


Criar arquivo `~/.dput.cf` no computador local:

{% highlight ini %}
[debian.joenio.me]
fqdn = debian.joenio.me
method = scp
login = *
incoming = ~/debian.joenio.me/mini-dinstall/incoming
allow_unsigned_uploads = 0
post_upload_command = ssh debian.joenio.me mini-dinstall -b && sign-remote --no-batch debian.joenio.me:debian.joenio.me/unstable/Release
{% endhighlight %}

Os pacotes devem ser assinados com chave GNUPG, para isto é utilizado o script
[sign-remote](https://github.com/joenio/sign-remote) nas configurações do
`dput` mostrada acima. Copie este arquivo para o seu computador local e adicione
a localização dele no seu **PATH**.

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

## Testando o repositório / instalando pacotes

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
