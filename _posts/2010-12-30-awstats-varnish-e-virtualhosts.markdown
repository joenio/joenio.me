---
title: AWStats, Varnish e virtualhosts
lead: Post originalmente feito na rede SoftwareLivre Brasil.
---

![software livre brasil logo](/files/softwarelivre-brasil-post-image.png)

<div class="alert alert-warning">
Post originalmente feito na rede SoftwareLivre Brasil. Fonte:<br/>
http://softwarelivre.org/joenio/blog/awstats-varnish-e-virtualhosts
</div>

<p><img src="http://softwarelivre.org/articles/0028/3737/varnish.jpg?1293717058" alt="Varnish" style="float: left; border: 10px solid white; border-top: 2px;"></p>

<p>Se você usa <a href="http://awstats.sourceforge.net">AWStats</a> para gerar estatísticas do seu site e seu servidor tem multiplos virtualhosts rodando sob o <a href="http://www.varnish-cache.org">Varnish</a> então você vai precisar configurar o Varnish pra guardar o virtualhost nos logs, caso contrário o AWStats terá problemas em saber quais entradas do log pertence a qual vhost.</p>

<p>Se você gosta de emoções fortes e usa a versão de desenvolvimento do Varnish, que será a próxima 2.1.5, em seu servidor produção então é fácil, basta utilizar a <a href="http://www.varnish-cache.org/docs/trunk/reference/varnishncsa.html">opção de linha de comando -F do varnishncsa</a> para personalizar o formato dos logs.</p>

<p>Por outro lado, se você gosta de dormir tranquilo a noite e usa versão estável então precisará de uma outra solução. O varnishncsa é responsável por ler e escrever os logs que o varnishd mantém em memória, ele <a href="http://www.mail-archive.com/varnish-misc@projects.linpro.no/msg02402.html">permite "interceptar" cada linha do log e alterar o que for preciso</a> e escrever de volta onde for. Como o varnishncsa guarda a URL completa de cada requisição então é possível extrair o virtualhost facilmente, com essa ideia em mente fiz um pequeno script Perl pra fazer esse trabalho, este script está disponível em:</p>

<p><img src="http://softwarelivre.org/articles/0028/3736/awstats.png?1293716652" alt="Awstats" style="float: right; border: 10px solid white;"></p>

<p><a href="http://gitorious.org/varnisnncsa-vhost">http://gitorious.org/varnisnncsa-vhost</a></p>

<p>Se você usa Debian pode instalar a partir do repositório abaixo:</p>

<p><a href="http://sede.colivre.coop.br/~joenio/debian/">http://sede.colivre.coop.br/~joenio/debian/</a></p>

<p>Assim como o varnishncsa ele vai rodar como um daemon e armazenar os logs em /var/log/varnish/varnishncsa-vhost.log.</p>

<p>Esta solução foi gentilmente financiada pela <a href="http://colivre.coop.br/">Colivre</a>.</p>
