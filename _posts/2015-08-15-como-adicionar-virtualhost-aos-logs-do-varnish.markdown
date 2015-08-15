---
title: Como adicionar virtualhost aos logs do Varnish
tags: debian
---

![Clone trooper segurando caneta](/files/trooper-segurando-caneta-fundo-verde.jpg)

Há algum tempo atrás escrevi um post [mostrando como configurar o
`Varnish`][awstats-varnish-e-virtualhosts] para escrever logs num formato
modificado do [_Combined Log Format_][combined] do `Apache`, esta modificação
foi feita para adicionar o _virtualhost_ `%v` no início de cada registro do log
e na sintaxe do `Apache` se parece com o seguinte:

{% highlight apache %}
LogFormat "%v %h %l %u %t \"%r\" %>s %O \"%{Referer}i\" \"%{User-Agent}i\"" vhost_combined
{% endhighlight %}

Isto foi feito com o [varnishncsa-vhost][varnishncsa-vhost], um script que faz
o `Varnish` armazenar logs seguindo o formato acima, este script deveria estar
obsoleto já que versões recentes do `Varnish` suportam customizar o formato dos
logs através da opção `-F`, mas um problema no pacote Debian impede de fazer
isto do "jeito certo"™.

Este problema foi citado em [Workaround for broken varnishncsa logging due to
shell mishandling of spaces in LOG_FORMAT variables][workaround] e algumas
soluções foram sugeridas, mas todas elas tem um "ar" de armengue. O problema já
foi relatado no Debian em [#657449 varnishncsa: please add a config option to
allow a custom logging format (patch)][bug-657449] mas ainda não foi
solucionado.

> Porque estou contando esse "blá blá blá"?

Recentemente precisei alterar o formato dos logs do `Varnish` em um servidor de
produção e acabei utilizando o `varnishncsa-vhost` novamente e ele funcionou
muito bem, isto me salvou dos sedutores "armengues que quebram na próxima
atualização".

Então se isto for útil para você de alguma forma utilize o repositório abaixo,
eu subi uma nova versão do pacote Debian do `varnishncsa-vhost` lá:

{% highlight sourceslist %}
deb http://debian.joenio.me unstable/
{% endhighlight %}

[awstats-varnish-e-virtualhosts]: http://softwarelivre.org/joenio/blog/awstats-varnish-e-virtualhosts
[workaround]: http://giantdorks.org/alain/workaround-for-broken-varnishncsa-logging-due-to-shell-mishandling-of-spaces-in-log_format-variables
[bug-657449]: http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=657449
[bug-608395]: http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=608395
[combined]: http://httpd.apache.org/docs/2.4/logs.html#combined
[varnishncsa-vhost]: http://github.com/joenio/varnishncsa-vhost
