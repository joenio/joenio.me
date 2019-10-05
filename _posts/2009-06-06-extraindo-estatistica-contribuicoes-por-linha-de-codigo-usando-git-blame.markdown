---
title: Extraindo estatística contribuições por linha de código usando git-blame
lead: Post originalmente feito na rede SoftwareLivre Brasil.
---

![software livre brasil logo](/files/softwarelivre-brasil-post-image.png)

<div class="alert alert-warning">
Post originalmente feito na rede SoftwareLivre Brasil. Fonte:<br/>
http://softwarelivre.org/joenio/blog/extraindo-estatistica-contribuicoes-por-linha-de-codigo-usando-git-blame
</div>

<p>Achei em [1] um script muito interessante para extrair a quantidade de
contruições dos autores de um projeto contando cada linha do código fonte,
mudei algumas coisasinhas e implementei uma sugestão dada nos comentários do
próprio post para ignorar linhas em branco em [2].</p>

<p>Executei o script no código do Noosfero e olha só o que ele disse:</p>

<p>$ git-blame-stats -e
public/images,vendor,public/javascripts/tinymce,public/javascripts/prototype.js
-a AntonioTerceiro='Antonio Terceiro',JoenioCosta='Joenio
Costa',AurelioAHeckert='Aurelio A. Heckert','Daniela Feitosa'='Daniela Soares
Feitosa',DanielaFeitosa='Daniela Soares Feitosa',MoisesMachado='Moises
Machado',ValessioBrito='Valessio S Brito' -w -C</p>

<p>Total lines: 196665<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 77917&nbsp;
39.62%&nbsp; Antonio Terceiro<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
66137&nbsp; 33.63%&nbsp; LeandroNunes<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
17877&nbsp;&nbsp; 9.09%&nbsp; Joenio
Costa<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 16109&nbsp;&nbsp; 8.19%&nbsp;
Aurelio A. Heckert<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 11835&nbsp;&nbsp;
6.02%&nbsp; Moises Machado<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
4790&nbsp;&nbsp; 2.44%&nbsp; Daniela Soares
Feitosa<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1079&nbsp;&nbsp;
0.55%&nbsp; Valessio S
Brito<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 425&nbsp;&nbsp;
0.22%&nbsp; *initial
checkin<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 414&nbsp;&nbsp;
0.21%&nbsp; Yann
Lugrin<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 82&nbsp;&nbsp;
0.04%&nbsp; GrazienoPellegrino</p>

<p>A linha de comando ficou enorme pois disse ao script para ignorar alguns
diretorios contendo código de terceiros, como por exemplo 'vendor' que é onde
está o rails e os plugins. E para criar aliases de autores que eu sei que são
as mesmas pessoas mas que estão no histórico do repositório com nomes
diferentes.</p>

<p>[1] <a
href="http://use.perl.org/~acme/journal/39082?from=rss">http://use.perl.org/~acme/journal/39082?from=rss</a></p>
<p>[2] <a href="http://gitorious.org/joenio/misc/blobs/master/git-blame-stats">http://gitorious.org/joenio/misc/blobs/master/git-blame-stats</a></p>
