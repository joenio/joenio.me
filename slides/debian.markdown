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

<pre><code class="bash">
~# dpkg -i libjs-impress_0.5.3-1_all.deb
</code></pre>

#### apt

<pre><code class="bash">
~# apt-cache search impress.js
libjs-impress - JavaScript library to make animated presentations
</code></pre>

<pre><code class="bash">
~# apt-get install libjs-impress
</code></pre>

#### aptitude

<pre><code class="bash">
~# aptitude search libjs-impress
i libjs-impress - JavaScript library to make animated presentations
</code></pre>

<pre><code class="bash">
~# aptitude install libjs-impress
</code></pre>

</section>

<section data-background="/slides/files/backgrounds/debian-lines.png">
## Repositórios de pacotes Debian

<pre><code class="bash">
~# cat /etc/apt/sources.list

deb http://ftp.debian.org/debian/ jessie main
deb-src http://ftp.debian.org/debian/ jessie main
</code></pre>

### Backports

<pre><code class="bash">
~# cat /etc/apt/sources.list.d/wheezy-backports.list

deb http://http.debian.net/debian wheezy-backports main
</code></pre>

### Repositório do Noosfero

<pre><code class="bash">
~# cat /etc/apt/sources.list.d/noosfero.list

deb http://download.noosfero.org/debian/wheezy-1.2 ./
deb-src http://download.noosfero.org/debian/wheezy-1.2 ./
</code></pre>
</section>

<section data-background="/slides/files/backgrounds/debian-lines.png">
## Anatomia de um pacote Debian

<pre><code class="bash">
~# vim libjs-impress_0.5.3-1_all.deb
</code></pre>

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

<pre><code class="bash">
~# apt-get install apache2
</code></pre>
</section>

<section data-background="/slides/files/backgrounds/debian-lines.png">
## Servidor de aplicação, thin

Servidor web de aplicação Ruby

<pre><code class="bash">
~# apt-get install thin
</code></pre>
</section>

<section data-background="/slides/files/backgrounds/debian-lines.png">
## Banco de dados, postgresql

Banco de dados relacional

<pre><code class="bash">
~# apt-get install postgresql
</code></pre>
</section>

<section data-background="/slides/files/backgrounds/debian-lines.png">
## Cache de páginas, varnish

Cache HTML para sites com alto volume de tráfego

<pre><code class="bash">
~# apt-get install varnish
</code></pre>
</section>

<section data-background="/slides/files/backgrounds/debian-lines.png">
## Cache de objetos, memcached

Cache em memória de objetos de aplicação

<pre><code class="bash">
~# apt-get install memcached
</code></pre>
</section>

<section data-background="/slides/files/backgrounds/debian-lines.png">
## Servidor de email (MTA), exim4

Agente de transporte de e-mail

<pre><code class="bash">
~# apt-get install exim4
</code></pre>
</section>

<section data-background="/slides/files/backgrounds/debian-lines.png">
## Servidor de chat, ejabberd

Servidor de chat XMPP/Jabber escrito em Erlang

<pre><code class="bash">
~# apt-get install ejabberd
</code></pre>
</section>

<section data-background="#c4a000">
### Obrigado!

joenio@colivre.coop.br

**Dúvidas?**
</section>
