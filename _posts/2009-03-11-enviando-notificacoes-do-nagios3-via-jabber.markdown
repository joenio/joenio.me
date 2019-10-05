---
title: Enviando notificações do Nagios3 via Jabber
lead: Post originalmente feito na rede SoftwareLivre Brasil.
---

![software livre brasil logo](/files/softwarelivre-brasil-post-image.png)

<div class="alert alert-warning">
Post originalmente feito na rede SoftwareLivre Brasil. Fonte:<br/>
http://softwarelivre.org/joenio/blog/enviando-notificacoes-do-nagios3-via-jabber
</div>

<p>O script <a
href="http://nagios.sourceforge.net/download/contrib/notifications/notify_via_jabber">notify_via_jabber</a>
funcionava muito bem com o Nagios1 no Debian Etch para enviar as notificações
para o Jabber mas depois de atualizar o servidor para Lenny o Nagios foi
atualizado para a versão 3 e o script deixou de funcionar, as configurações do
Nagios estavam certas o script ainda funcionava (testei via linha de comando)
mas as notificações não chegavam no Jabber, debugando o problema descobri que a
mensagem (segundo parametro via linha de comando enviado pelo Nagios) não
estava chegando corretamente no script. Fiz umas pequenas mudanças no script e
ele voltou a funcionar corretamente, veja <a
href="http://gitorious.org/joenio/misc/blobs/master/notify_via_jabber">aqui o
script modificado</a>.</p>

<p>Para saber como configurar o Nagios para funcionar com este script veja o
post <a
href="http://psychopenguin.org/2006/01/enviando-notificacoes-do-nagios-via-jabber/">Enviando
notificações no nagios via Jabber</a> (é, o título deste post foi copiado de
lá) no blog PsychoPenguin.</p>
