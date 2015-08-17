---
title: Debian GNU/Linux
---

<section>
# Debian GNU/Linux
<img src="files/debian.png" style="background: white" />

O Sistema Operacional Universal
</section>

<section data-background="/slides/files/backgrounds/debian-lines.png">
# Debian

* Lançado em 1993
* Criado para ser uma distribuição Linux a ser mantida de uma maneira aberta, segundo o espírito do Linux e do GNU
* Em 1994 e 1995 o sistema dpkg ganhou notoriedade
* O projeto tem uma enorme comunidade de desenvolvedores trabalhando sob um contrato social
</section>

<section data-background="/slides/files/backgrounds/debian-lines.png" data-theme="sky">
# Versões do Debian

O ciclo de desenvolvimento das versões do Debian tem três fases

* _unstable_ (instável) = Sid
* _testing_ (teste) = Stretch
* _stable_ (estável) = Jessie (8.0)
</section>

<section data-background="/slides/files/backgrounds/debian-lines.png">
# Sistema de pacotes

* Desenvolvedor Debian mantém pacotes
* "Upstream" é o desenvolvedor/autor do software
* Cada novo upload entra na versão "unstable"
* Após algum tempo de testes entra no "testing"
</section>

<section data-background="/slides/files/backgrounds/debian-lines.png">
# Ferramentas

* dpkg
* Apt (apt-get, apt-cache, ...)
* Aptitude
* Synaptic
</section>

<section data-background="/slides/files/backgrounds/debian-lines.png">
#### dpkg

{% highlight bash %}
~# dpkg -i libjs-impress_0.5.3-1_all.deb
{% endhighlight %}

#### apt

{% highlight bash %}
~# apt-cache search impress.js
libjs-impress - JavaScript library to make animated presentations
{% endhighlight %}

{% highlight bash %}
~# apt-get install libjs-impress
{% endhighlight %}

#### aptitude

{% highlight bash %}
~# aptitude search libjs-impress
i libjs-impress - JavaScript library to make animated presentations
{% endhighlight %}

{% highlight bash %}
~# aptitude install libjs-impress
{% endhighlight %}

</section>

<section data-background="/slides/files/backgrounds/debian-lines.png">
## Repositórios de pacotes Debian

{% highlight bash %}
~# cat /etc/apt/sources.list

deb http://ftp.debian.org/debian/ jessie main
deb-src http://ftp.debian.org/debian/ jessie main
{% endhighlight %}

### Backports

{% highlight bash %}
~# cat /etc/apt/sources.list.d/wheezy-backports.list

deb http://http.debian.net/debian wheezy-backports main
{% endhighlight %}

### Repositório do Noosfero

{% highlight bash %}
~# cat /etc/apt/sources.list.d/noosfero.list

deb http://download.noosfero.org/debian/wheezy-1.2 ./
deb-src http://download.noosfero.org/debian/wheezy-1.2 ./
{% endhighlight %}
</section>

<section data-background="/slides/files/backgrounds/debian-lines.png">
## Anatomia de um pacote Debian

{% highlight bash %}
~# vim libjs-impress_0.5.3-1_all.deb
{% endhighlight %}

<img src="files/screenshots/deb-vim.png" />
<small>debPlugin.vim -- a Vim plugin for browsing debian packages</small>
</section>

<section data-background="/slides/files/backgrounds/debian-lines.png">
## * ./control

<img src="files/screenshots/libjs-impress-deb-control.png" />
</section>

<section data-background="/slides/files/backgrounds/wheezy-packages-graph.png">
# Consistência

<table><tr>
<td style="vertical-align: middle">
<p class="fragment" style="background: black">Evite instalar qualquer .deb que você encontrar por aí</p>
<p class="fragment" style="background: black">Não instale nada "na mão" usando `make` e `make install`</p>
<p class="fragment" style="background: black">Mantenha seu sistema atualizado</p>
</td>
<td>
<img src="/slides/files/stickers/screamin-jay-hawkins.png" style="border:0;background:none"/>
</td>
</tr></table>
</section>

<section data-background="/slides/files/backgrounds/debian-lines.png">
## Servidor web, apache

Processa pedidos HTTP e responde (usualmente) HTML

{% highlight bash %}
~# apt-get install apache2
{% endhighlight %}
</section>

<section data-background="/slides/files/backgrounds/debian-lines.png">
## Servidor de aplicação, thin

Servidor web de aplicação Ruby

{% highlight bash %}
~# apt-get install thin
{% endhighlight %}
</section>

<section data-background="/slides/files/backgrounds/debian-lines.png">
## Banco de dados, postgresql

Banco de dados relacional

{% highlight bash %}
~# apt-get install postgresql
{% endhighlight %}
</section>

<section data-background="/slides/files/backgrounds/debian-lines.png">
## Cache de páginas, varnish

Cache HTML para sites com alto volume de tráfego

{% highlight bash %}
~# apt-get install varnish
{% endhighlight %}
</section>

<section data-background="/slides/files/backgrounds/debian-lines.png">
## Cache de objetos, memcached

Cache em memória de objetos de aplicação

{% highlight bash %}
~# apt-get install memcached
{% endhighlight %}
</section>

<section data-background="/slides/files/backgrounds/debian-lines.png">
## Servidor de email (MTA), exim4

Agente de transporte de e-mail

{% highlight bash %}
~# apt-get install exim4
{% endhighlight %}
</section>

<section data-background="/slides/files/backgrounds/debian-lines.png">
## Servidor de chat, ejabberd

Servidor de chat XMPP/Jabber escrito em Erlang

{% highlight bash %}
~# apt-get install ejabberd
{% endhighlight %}
</section>

<section data-background="#c4a000">
### Obrigado!

joenio@colivre.coop.br

**Dúvidas?**
</section>
