---
title: Deixando o bash um pouco mais amigável
lead: Post originalmente feito na rede SoftwareLivre Brasil.
---

![software livre brasil logo](/files/softwarelivre-brasil-post-image.png)

<div class="alert alert-warning">
Post originalmente feito na rede SoftwareLivre Brasil. Fonte:<br/>
http://softwarelivre.org/joenio/blog/deixando-o-bash-um-pouco-mais-amigavel
</div>

<p><img src="http://softwarelivre.org/articles/0023/4433/terminal.png?1280533142" alt="Terminal" style="float: left; margin: 0 5px 5px 0;"></p>

<p><span style="font-size: xx-small;"> </span></p>

<p>Sempre utilizei o <a href="http://www.gnu.org/software/bash/">bash</a> como shell padrão, mas pelo pouco tempo que utilizei o <a href="http://fishshell.org/">fish</a> me acostumei com um recurso que me faz falta no bash: <strong>O histórico.</strong></p>

<p>Fui buscar uma forma de melhorar o histórico do bash e encontrei uma <a href="http://www.dicas-l.com.br/arquivo/bash_history.php">dica</a> muito fácil para aumentar o tamanho dele. Basta adicionar as linhas abaixo ao seu <strong>.bashrc</strong> para aumentar o histórco de 500 (padrão) para 5000:</p>

<pre>export HISTSIZE=5000<br>export HISTFILESIZE=$HISTSIZE</pre>

<p>Continuei lendo a <a href="http://www.gnu.org/software/bash/manual/bashref.html#Readline-Interaction">documentação</a> do bash e descobri mais algumas configurações interessantes para ele (na verdade para o readline), basta adicionar ao arquivo <strong>.inputrc</strong> as linhas abaixo:</p>

<pre>set completion-ignore-case on</pre>

<p><span style="font-size: small;">Para ignorar maiúsculas e minúsculas ao completar.</span></p>

<pre>set match-hidden-files off<br></pre>

<p>Para ignorar arquivos ocultos ao completar nomes de arquivos e diretórios.</p>
