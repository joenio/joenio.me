Referrer Spam é um tipo de [spamdexing][spamdexing] baseado em realizar
requisições a um determinado site alvo usando uma informação falsa no campo
_referer_ do cabeçalho HTTP, esta informação falsa é geralmente uma URL válida
para algum site que o spammer tem interesse em divulgar, isto acontece quando o
site alvo divulga seus logs ou estatísticas de acesso.

O objetivo final do spammer é aumentar a relevância de um determinado site em
resultados de buscas e costuma ser feito com fins comerciais, então se você tem
um site, blog, portal, etc sendo monitorado e analisado por algum sistema de
estatísticas, como Piwik, Google Analytics, AWStats, etc é possível que esteja
sofrendo ataques deste tipo.

Se for este o caso, além de estar permitindo o spammer atingir seu objetivo
final, está ainda tendo dados e números falsos em suas estatísticas, para saber
se está sendo alvo somente analisando os seus relatórios de estatísticas
verificando o _referer_ dos seus acessos e identificando se alguma URL
conhecida como _referrer spam_ está presente, uma extensa lista de URLs
conhecidas como _referrer spam_ é mantida abertamente pela comunidade do Piwik
no projeto [referrer-spam-blacklist][referrer-spam-blacklist], uma dica
é se você tem muitos acessos vindos da Rússia ou China é possível que sejam
spammers.

Existem 2 tipos de Referrer Spam:

* Ghost Referer Spam
* Crawler Referer Spam

Ghost Referrer Spam adicionam dados diretamente ao Google Analytics via API,
não faz nenhum acesso real ao site, ou seja não faz "hit" nenhum. Gera
dados "fake" nas estatisticas do GA apenas.

Crawler Referrer Spam fazem acesso real ao site, são robores que acessam o seu site
forçando o campo _referer_ do cabeçalho HTTP, eles fazem hit real ao site.

Para bloquear _Ghost Referer Spam_ no Google Analytics uma técnica simples é
usar filtro que inclui apenas _Hostnames_ genuinos, Nick Baker mostra em seu
blog como fazer isto no post [BLOCKING GHOST REFERRALS FROM GOOGLE
ANALYTICS][ghost-referrals].

Para bloquear o _Crawler Referer Spam_ é necessário bloquear a requisição do
robô ao seu site, isto pode ser feito nas configurações do próprio servidor
Web, para o Nginx isto pode ser feito com a seuinte configuração 

{% highlight nginx %}
server {
  server_name joenio.me www.joenio.me;
  location / {
    root /var/www/joenio.me/_site;
    if ($http_referer ~* (buttons-for-website.com|erot.co)) {
      return 403;
    }
}
{% endhighlight %}

Esta configuração irá bloquear qualquer acesso com o cabeçalho HTTP referer
igual a `buttons-for-website.com` ou `erot.co`, que são 2 domínios conhecidos
por fazerem _Referer Spam_.

Para testar se o bloqueio a certo domínio está funcionando:

    $ wget --referer=http://o-o-6-o-o.com http://joenio.me

gere uma lista para o nginx com base nos
spam listados em spammers.txt do projeto piwik/referrer-spam.blacklist:

    $ perl -e 'while(<>){ chomp; print "$_|"}' spammers.txt

Boas informações e debates sobre este assunto podem ser encontrados nos links abaixo:

* [I want to build a list of referrer spam links to block. I'm being hit hard
  on every site I run, and I'm tired of it. Anyone want to add to it?][reddit]
* [What is Referrer Spam and How to Stop it (ótimo texto)][ohow]
* [HOW TO REMOVE DARODAR SPAM][alexzerbach]
* [Definitive Guide to Removing Referral Spam][analyticsedge-2014]
* [Segment to Eliminate Spam Referrals][analyticsedge-2015]
* [Stop addons.mozilla.org referral traffic (Spam)][stop-addons-mozilla]

[reddit]: http://www.reddit.com/r/Wordpress/comments/2qteln/i_want_to_build_a_list_of_referrer_spam_links_to/
[ohow]: http://www.ohow.co/block-referrer-spam-list/
[alexzerbach]: http://alexzerbach.com/how-to-remove-darodar-spam/
[analyticsedge-2014]: http://www.analyticsedge.com/2014/12/removing-referral-spam-google-analytics/
[analyticsedge-2015]: http://www.analyticsedge.com/2015/01/advanced-segment-eliminate-spam-referrals/
[stop-addons-mozilla]: http://www.ohow.co/stop-addons-mozilla-org-referral-traffic-spam/
[spamdexing]: http://pt.wikipedia.org/wiki/Spamdexing
[referrer-spam-blacklist]: http://github.com/piwik/referrer-spam-blacklist
[ghost-referrals]: http://www.cucumber.co.nz/blog/2015/january/14/ghost-referrals/
