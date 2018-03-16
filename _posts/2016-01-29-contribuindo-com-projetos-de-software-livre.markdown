---
title: Contribuindo com projetos de software livre
lead: >
  Em 2015 participei do desafio CPAN Pull Request (CPAN-PRC), uma iniciativa do
  Neil Bowers para promover maior contribuição da comunidade Perl ao CPAN. CPAN
  ou "Comprehensive Perl Archive Network" é o...
---

![Camisa Hacktoberfest 2015](/files/hacktoberfest-2015.jpg)

Em 2015 participei do desafio [CPAN Pull Request][cpan-prc] (CPAN-PRC), uma
iniciativa do [Neil Bowers][neil] para promover maior contribuição da
comunidade [Perl][perl] ao [CPAN][cpan]. CPAN ou _"Comprehensive Perl Archive
Network"_ é o repositório central de módulos Perl, está no ar desde 1995 e
conta hoje com aproximadamente 159 mil módulos.

O desafio foi lançado em dezembro de 2014, para mim foi uma forma de diversão
contribuir com projetos de softwares livres escritos em Perl.

* [Post do Neil Bowers em dezembro de 2014 lançando o desafio][take-the-2015]
* [Post do Neil dando mais detalhes sobre o desafio][more-details]
* [Repositório no GitHub com dicas para os participantes][github-cpan-prc]

A comunidade Perl Brasileira, como sempre, bem antenada aos acontecimentos da
comunidade internacional, traduziu grande parte do chamado ao desafio para o
português e divulgou nas listas de discussão nacional, em especial no [Brasil
Perl Mongers][brasil-pm]:

* [Mensagem de Breno de Oliveira na lista Brasil Perl Mongers][brasil-pm-cpan-prc]

Em resumo o desafio funcionou da seguinte forma:

> (1) Você fazia a inscrição por email com o Neil Bowers
> &lt;neil@bowers.com&gt;; (2) a cada início de mês um módulo do CPAN é
> sorteado para você; (3) até o final do mês é preciso enviar ao menos um Pull
> Request no Github para o módulo sorteado.

Este processo se repetia a cada mês entre Janeiro e Dezembro, eu perdi o prazo
para inscrição em Janeiro e só comecei a participar do desafio em Fevereiro, a partir
daí me mantive ativo até o final do ano e enviei ao todo 15 Pull Requests.

## Fevereiro

Em meu primeiro desafio o módulo sorteado foi o [Module::Setup][module-setup],
fiz uma melhoria no `Makefile.PL` para dar alertas de dependencias não
satisfeitas.

* [Pull Request #4 - declare building dependencies in Makefile.PL][module-setup-pull-4]

Este modulo possuía algumas dependencias não empacotadas no Debian, aproveitei
o _embalo_ empacotei e submeti eles ao Debian.

* [Module::Install::TestBase][module-install-testbase] - [ITP #778806][itp-778806]
* [Module::Install::Repository][module-install-repository] - [ITP #779000][itp-779000]

Também atualizei o [pacote Test::Base][libtest-base-perl] para a última versão do upstream e [submeti
ao Debian][tracker-680993].

[module-install-testbase]: http://metacpan.org/pod/Module::Install::TestBase
[module-install-repository]: http://metacpan.org/pod/Module::Install::Repository
[itp-778806]: http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=778806
[itp-779000]: http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=779000
[libtest-base-perl]: http://packages.debian.org/sid/libtest-base-perl
[tracker-680993]: http://tracker.debian.org/news/680993

## Março

Em março Neil sorteou o módulo [libnet][libnet], fiz uma sugestão de nova
funcionalidade para o `Net::FTP` a partir de uma ideia registrada no [ticket
#101586 do RT][cpan-rt-101586].

* [Pull Request #16 - add ability to listen hidden files from a FTP server][libnet-pull-16]

## Abril

Em Abril fiz uma correção na documentação do módulo [Data::Compare][data-compare].

* [Pull Request #6 - content of the TODO file moved to issue #5 in Github][data-compare-pull-6]

## Maio

O mês de Maio foi a vez do [Method::Signatures][method-signatures], fiz um
pull-request bem simples, ";" faltando no código fonte.

* [Pull Request #118 - added missing semicolon][method-signatures-pull-118]

## Junho

Em Junho foi a vez do [PDF::Table][pdf-table] e pela primeira vez consegui
mandar mais de 1 pull-request!

* [Pull Request #18 - avoid warnind about use of greediness modifier][pdf-table-pull-18]
* [Pull Request #19 - Characters rendered wrong][pdf-table-pull-19]

## Julho

Em Julho fiz algo que considero bem divertido, adicionei testes unitários para
funcionalidades sem cobertura no módulo [cpan-outdated][cpan-outdated].

* [Pull Request #30 - add unit tests for permissive_filter function][cpan-outdated-pull-30]

## Agosto

Em Agosto o tempo foi curto e me atrasei bastante, ainda assim consegui fazer
uma pequena contribuição ao módulo
[Module::CPANTS::Analyse][module-cpants-analyse].

* [Pull Request #25 - missing parenthesis in 'has_changelog' error msg][module-cpants-analyse-pull-25]

## Setembro

Setembro foi a vez do [Unicode::LineBreak][unicode-linebreak], me atrasei tanto
e não consegui enviar o pull-request em tempo, mas o desafio permitia
"esticar" o prazo e eu enviei 2 pull-requests.

* [Pull Request #1 - testing that GCString stringify numeric arguments][unicode-linebreak-pull-1]
* [Pull Request #2 - documenting wget as a testing dependency][unicode-linebreak-pull-2]

## Outubro

Em Outubro o módulo sorteado foi o
[Mojolicious::Plugin::ValidateTiny][mojolicious-plugin-validatetiny],
Mojolicious é um _framework Web_ muito bom e eu sempre me empolgo para fazer
qualquer coisa com ele.

* [Pull Request #10 - fix example in SYNOPSIS section of documentation][mojolicious-plugin-validatetiny-pull-10]
* [Pull Request #11 - indicating the need loading the "Validate::Tiny" module][mojolicious-plugin-validatetiny-pull-11]

Outubro foi também o mês do [Hacktoberfest][hacktoberfest] da DigitalOcean, a
imagem no topo deste post é da camisa e adesivos que ganhei ao completar os 4
Pull Requests para projetos de software livre no Github.

## Novembro

Em Novembro foi o módulo [XML::API][xml-api], adicionei testes unitários e
resolvi um bug registrado na [issue #1][xml-api-issue-1].

* [Pull Request #2 - adding tests for _attrs()][xml-api-pull-2]
* [Pull Request #3 - escape apostrophe/single quote][xml-api-pull-3]

## Dezembro

Dezembro é sempre um mês apertado, mas deu tempo de fechar um bug do módulo
[URI][uri] registrado na [issue #13][uri-issue-13].

* [Pull Request #31 - remove colon from pair "user:pass" if has no password][uri-pull-31]

--

E assim concluí minha participação no CPAN Pull Request Challenge 2015, Neil
Bowers fez um post bem elaborado resumindo a experiência do desafio, nele
apresenta números e gráficos da participação, além do resultado de um survey
realizado entre todos os participantes.

* [A review of the 2015 CPAN Pull Request Challenge][cpan-prc-2015-review]

Ele fez também um post sobre os planos para o desafio de 2016, o qual já
começou e eu já estou participando.

* [The CPAN Pull Request Challenge for 2016][cpan-prc-2016]


[cpan-prc]: http://cpan-prc.org
[cpan]: http://cpan.org
[neil]: http://neilb.org
[take-the-2015]: http://blogs.perl.org/users/neilb/2014/12/take-the-2015-cpan-pull-request-challenge.html
[more-details]: http://blogs.perl.org/users/neilb/2015/01/more-details-on-the-cpan-pull-request-challenge.html
[github-cpan-prc]: http://github.com/CPAN-PRC/resources
[brasil-pm]: http://brasil.pm.org
[brasil-pm-cpan-prc]: http://mail.pm.org/pipermail/brasil-pm/2014q4/000356.html
[metacpan]: http://metacpan.org
[module-setup]: http://metacpan.org/pod/Module::Setup
[module-setup-pull-4]: http://github.com/yappo/p5-Module-Setup/pull/4
[libnet]: http://metacpan.org/release/libnet
[libnet-pull-16]: http://github.com/steve-m-hay/perl-libnet/pull/16
[cpan-rt-101586]: http://rt.cpan.org/Public/Bug/Display.html?id=101586
[data-compare]: http://metacpan.org/pod/Data::Compare
[data-compare-pull-6]: http://github.com/DrHyde/perl-modules-Data-Compare/pull/6
[method-signatures]: http://metacpan.org/pod/Method::Signatures
[method-signatures-pull-118]: http://github.com/evalEmpire/method-signatures/pull/118
[pdf-table]: http://metacpan.org/pod/PDF::Table
[pdf-table-pull-18]: http://github.com/kamenov/PDF-Table/pull/18
[pdf-table-pull-19]: http://github.com/kamenov/PDF-Table/pull/19
[cpan-outdated]: http://metacpan.org/pod/cpan-outdated
[cpan-outdated-pull-30]: http://github.com/tokuhirom/cpan-outdated/pull/30
[module-cpants-analyse]: http://metacpan.org/pod/Module::CPANTS::Analyse
[module-cpants-analyse-pull-25]: http://github.com/cpants/Module-CPANTS-Analyse/pull/25
[unicode-linebreak]: http://metacpan.org/pod/Unicode::LineBreak
[unicode-linebreak-pull-1]: http://github.com/hatukanezumi/Unicode-LineBreak/pull/1
[unicode-linebreak-pull-2]: http://github.com/hatukanezumi/Unicode-LineBreak/pull/2
[hacktoberfest]: http://hacktoberfest.digitalocean.com
[mojolicious-plugin-validatetiny]: http://metacpan.org/pod/Mojolicious::Plugin::ValidateTiny
[mojolicious-plugin-validatetiny-pull-10]: http://github.com/koorchik/Mojolicious-Plugin-ValidateTiny/pull/10
[mojolicious-plugin-validatetiny-pull-11]: http://github.com/koorchik/Mojolicious-Plugin-ValidateTiny/pull/11
[xml-api]: http://metacpan.org/pod/XML::API
[xml-api-pull-2]: http://github.com/mlawren/xml-api/pull/2
[xml-api-pull-3]: http://github.com/mlawren/xml-api/pull/3
[xml-api-issue-1]: http://github.com/mlawren/xml-api/issues/1
[uri]: http://metacpan.org/pod/URI
[uri-pull-31]: http://github.com/libwww-perl/uri/pull/31
[uri-issue-13]: http://github.com/libwww-perl/uri/issues/13
[perl]: http://perl.org
[cpan-prc-2015-review]: http://neilb.org/2016/01/05/cpan-prc-2015-review.html
[cpan-prc-2016]: http://neilb.org/2015/12/30/cpan-prc-2016.html
