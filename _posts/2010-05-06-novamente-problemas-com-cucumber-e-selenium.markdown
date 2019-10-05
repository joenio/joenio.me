---
title: Novamente, problemas com Cucumber e Selenium
lead: Post originalmente feito na rede SoftwareLivre Brasil.
---

![software livre brasil logo](/files/softwarelivre-brasil-post-image.png)

<div class="alert alert-warning">
Post originalmente feito na rede SoftwareLivre Brasil. Fonte:<br/>
http://softwarelivre.org/joenio/blog/novamente-problemas-com-cucumber-e-selenium
</div>

<p>Mais uma vez a dupla Cucumber e Selenium deu problema:</p>

<pre>joenio@case ~/s/noosfero&gt; cucumber -p selenium features/edit_block_of_links.feature 
Using the selenium profile...
Feature: edit_block_of_links
  As a profile owner
  I want to edit a block of links

  Background:                           # features/edit_block_of_links.feature:5
==&gt; Waiting for Selenium RC server on port 4444... 

==&gt; Failed to boot the Selenium RC server... exiting!
</pre>

<p>Aparentemente o <strong>selenium-server</strong> não incia corretamente,
desconfiei do Java, removi e reinstalei todos os pacotes referente a ele mas
não resolveu.</p>

<p>Executei o selenium-server <em>"na mão"</em>, ele inicia normalmente mas não
consigo conectar nele.</p>

<pre>joenio@case ~/.g/r/1/g/w/vendor&gt; java -jar selenium-server.jar 
10:22:01.457 INFO - Java: Sun Microsystems Inc. 16.3-b01
10:22:01.458 INFO - OS: Linux 2.6.32-4-686 i386
10:22:01.474 INFO - v1.0.1 [2696], with Core v@VERSION@ [@REVISION@]
10:22:01.592 INFO - Version Jetty/5.1.x
10:22:01.594 INFO - Started HttpContext[/selenium-server/driver,/selenium-server/driver]
10:22:01.597 INFO - Started HttpContext[/selenium-server,/selenium-server]
10:22:01.597 INFO - Started HttpContext[/,/]
10:22:01.603 INFO - Started SocketListener on 0.0.0.0:4444
10:22:01.603 INFO - Started org.mortbay.jetty.Server@3a6727
</pre>

<p>O estranho é que o o servidor esté rodando na porta 4444 e ainda assim não
consigo conectar, fiz este mesmo teste em uma máquina com Debian Lenny (estou
usando Debian Sid) e funcionou perfeitamente.</p>

<p>Coincidência ou não comecei a ter problemas também com o site do Banco do
Brasil, ao tentar acessar minha conta recebo o erro abaixo:</p>

<p><em><strong>Problemas na instalação do Módulo de Segurança</strong></em></p>

<p>Como já estava desconfiado do Java fiz um teste acessando a URL abaixo e
recebi um <em>calltrace</em> enorme daqueles que só o Java dá pra gente.</p>

<ul>
<li><a href="http://www.java.com/en/download/help/testvm.xml"> http://www.java.com/en/download/help/testvm.xml</a></li>
</ul>
<p>Pesquisando no Google encontrei alguns <em>bugs</em> relatados no Debian com proposta de <em>workaround</em> para contornar o problema:</p>
<ul>
<li><a href="http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=561693">http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=561693</a></li>
<li><a href="http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=560238">http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=560238</a></li>
</ul>

<p>A solução proposta pelo pessoal do Debian nos <em>bugs</em> acima é a
seguinte:</p>

<p>Abra o arquivo <em>/etc/sysctl.d/bindv6only.conf</em> e sete
<em>net.ipv6.bindv6only=0</em>, reinicie o <em>procfs</em> com <em>invoke-rc.d
procps restart</em>.</p>

<p>Pra mim esta solução funcionou perfeitamente e resolveu meus probremas tanto
com Selenium quando com Banco do Brasil.</p>
