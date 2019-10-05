---
title: Rodando Cucumber + Selenium no Debian sid
lead: Post originalmente feito na rede SoftwareLivre Brasil.
---

![software livre brasil logo](/files/softwarelivre-brasil-post-image.png)

<div class="alert alert-warning">
Post originalmente feito na rede SoftwareLivre Brasil. Fonte:<br/>
http://softwarelivre.org/joenio/blog/rodando-cucumber-selenium-no-debian-sid
</div>

<p>Tenho trabalhado com <a href="http://cukes.info/">Cucumber</a> e <a
href="http://selenium-rc.openqa.org">Selenium</a> para fazer testes de
integração há algum tempo e por algum motivo hoje o Selenium não conseguiu
iniciar corretamente o Firefox.</p>

<pre>$ cucumber -p selenium<br>==&gt; Waiting for Selenium RC server on port
4444... Ready!<br>==&gt; Waiting for rails application server on port 3001...
Ready!<br> led to start new browser session: java.lang.RuntimeException:
Firefox 3<br> could not be found in the path! Please add the directory
containing ''firefox-bin'<br> or 'firefox'' to your PATH environment</pre>

<p>Como tenho péssimo hábito de não prestar muita atenção nas mensagens de erro
fui tentar resolver o problema e nada do que tentei funcionou, encontrei então
no <a
href="http://www.google.com.br/search?hl=pt-BR&amp;q=selenium+cucumber+firefox+debian">Google</a>
o post <a
href="http://tero.tilus.net/rutinat/2009/08/18/cucumber-running-selenium-on-debian-lenny/">Cucumber
running Selenium on Debian Lenny</a> e fucionou como uma luva!</p>

<p>Como sugerido no post, adicionei ao <em>PATH</em> o caminho
<em>/usr/lib/iceweasel</em> e o Selenium conseguiu rodar os testes numa boa com
o Firefox.</p>

<pre>$ cucumber -p selenium<br><br>==&gt; Waiting for Selenium RC server on
port 4444... Ready!<br>==&gt; Waiting for rails application server on port
3001... Ready!<br>    Given I am logged in as "booking"<br>    And I am on
/booking/rails.png?view=true<br>    And I fill in "Title" with "Hey ho, let's
go!"<br>    And I fill in "Enter your comment" with "Hey ho, let's go!"<br>
When I press "Post comment"<br>    Then I should be exactly on
/booking/rails.png?view=true<br><br>1 scenario (1 passed)<br>9 steps (9
passed)<br>0m20.214s<br></pre>
