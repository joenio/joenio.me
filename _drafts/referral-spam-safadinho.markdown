Referrer Spam

Existem 2 tipos de Referrer Spam:

* Ghost Spam
* Crawler Referrer Spam

Ghost Referrer Spam adicionam dados diretamente ao Google Analytics via API,
não faz nenhum acesso real ao site, ou seja não faz "hit" nenhum. Gera
dados "fake" nas estatisticas do GA apenas.

Crawler Referrer Spam fazem acesso real ao site, são robores que acessam seu site
forcando o "Referer"...

Para testar se o bloqueio a certo domínio está funcionando:

$ wget --referer=http://o-o-6-o-o.com http://joenio.me

Boas referencias sobre o assunto:

O projeto abaixo mantido pela comunidade do Piwik documenta a lista de domínios
conhecidos como referrer spammers, lista constantemente atualizada.

https://github.com/piwik/referrer-spam-blacklist

Este link abaixo mostra como criar um filtro eficiente para remover ghost
spammers de forma simples:

http://www.cucumber.co.nz/blog/2015/january/14/ghost-referrals/

Para bloquear os crowler spammers gere uma lista para o nginx com base nos
spam listados em spammers.txt do projeto piwik/referrer-spam.blacklist:

   $ perl -e 'while(<>){ chomp; print "$_|"}' spammers.txt

* [I want to build a list of referrer spam links to block. I'm being hit hard
  on every site I run, and I'm tired of it. Anyone want to add to it?][reddit]
* [What is Referrer Spam and How to Stop it (ótimo texto)][ohow]
* [HOW TO REMOVE DARODAR SPAM][alexzerbach]
* [Definitive Guide to Removing Referral Spam][analyticsedge-2014]
* [[updated] Segment to Eliminate Spam Referrals][analyticsedge-2015]
* [Stop addons.mozilla.org referral traffic (Spam)][stop-addons-mozilla]

[reddit]: http://www.reddit.com/r/Wordpress/comments/2qteln/i_want_to_build_a_list_of_referrer_spam_links_to/
[ohow]: http://www.ohow.co/block-referrer-spam-list/
[alexzerbach]: http://alexzerbach.com/how-to-remove-darodar-spam/
[analyticsedge-2014]: http://www.analyticsedge.com/2014/12/removing-referral-spam-google-analytics/
[analyticsedge-2015]: http://www.analyticsedge.com/2015/01/advanced-segment-eliminate-spam-referrals/
[stop-addons-mozilla]: http://www.ohow.co/stop-addons-mozilla-org-referral-traffic-spam/
