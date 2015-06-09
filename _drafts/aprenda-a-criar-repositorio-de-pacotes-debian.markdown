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
gerenciamento de pacotes][sistema-de-pacotes] e a enorme quantidade de
softwares empacotados e disponíveis nos repositórios oficiais.

> "Um sistema de gerenciamento de pacotes é uma coleção de ferramentas que
> oferece um método automático para instalar, atualizar, configurar e remover
> pacotes de um sistema operacional. É tipicamente usado em sistemas
> operacionais tipo Unix, que consistem de centenas de pacotes distintos, para
> facilitar a identificação, instalação e atualização" (fonte: Wikipédia)

[Repositórios][repositorio] são locais de armazenamento de pacotes de software
normalmente disponibilizados via internet, são parte integrante do todo que
compõe o _sistema de gerenciamento de pacotes_, juntamente com as ferramentas
para instalação, atualização, configuração e remoção.

Um pacote é isto e aquilo e é composto disso e disso, são disponibilizados nos
repositórios oficiais do Debian através dos Desenvolvedores Debian (membros
"oficiais" do projeto), existe um rígido controle de qualidade e uma preocupação
grande com questões envolvendo licenciamento do software empacotado. Mas se você
não é um Desenvolvedor Debian e quer disponibilizar seus pacotes em um repositório
pessoal enquanto trabalha na inclusão dele nos repositórios oficiais, ou se
o seu pacote é de um software que não está pronto ainda para entrar no Debian,
ou existe algum impedimento legal, ou, existem mil motivos, neste caso você
vai precisar criar seu próprio repositório, ou um _Private Package Archive_ (PPA).
E é isto que irei mostrar como fazer aqui neste post.

Todas as instruções a seguir serão dadas com base em minhas configurações, eu
tenho um repositório Debian no endereço _debian.joenio.me_ e as instruções que
se seguem irão usar este endereço sempre que for necessário, você deve adaptar
para o seu próprio endereço. Parte das instruções são executadas em minha estação de
trabalho, outra parte num servidor, ambos utilizando Debian, Debian Testing e Debian
Wheezy respectivamente. É neste servidor que está rodando o domínio _debian.joenio.me_.

O setup desenvolvido aqui foi fortemente baseado no post de _Stefano Zacchiroli_:

* [howto: uploading to people.d.o using dput][zack]

## Configurando o servidor

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

## Configurando a estação de trabalho

Instalar `dput` no computador local:

<pre class="terminal">
<code>
# apt-get install dput
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
[sistema-de-pacotes]: https://pt.wikipedia.org/wiki/Sistema_gestor_de_pacotes
[repositorio]: http://pt.wikipedia.org/wiki/Repositório
[zack]: http://upsilon.cc/~zack/blog/posts/2009/04/howto:_uploading_to_people.d.o_using_dput
