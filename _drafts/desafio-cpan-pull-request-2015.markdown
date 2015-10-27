---
title: Contribuição à projetos de software livre Perl
tags: perl
---

Este ano participei do [CPAN Pull Request Challenge][cpan-prc], uma iniciativa
do Neil Bowers para promover maior contribuição da comunidade Perl ao
[CPAN][metacpan], para os não avisados, CPAN significa "XXX Perl XXX Network" e
é o maior repositório do mundo de blá .... (puxar sardinha pro CPAN e exibir
alguns números).

O [CPAN-PRC foi lançado][take-the-2015] por Neil Bowers em dezembro de 2014 e
em janeiro ele fez um post dando [mais detalhes sobre o desafio][more-details],
também criou um [repositório no GitHub][github-cpan-prc] contendo uma série
de documentação e dicas para quem tivesse interesse em participar do desafio. A comunidade
Perl Brasileira, como sempre bem antenada aos acontecimentos da comunidade
internacional, traduziu para o português grande parte do chamado ao desafio e
em XXX de XXX Breno de Oliveira fez um [post na lista Brasil Perl Mongers
explicando tudo sobre o desafio][brasil-pm-cpan-prc].

O desafio iniciou em janeiro de 2015 mas eu só entrei na brincadeira em fevereiro,
funcionava assim: a inscrição era feita diretamente com o Neil Bowers
&lt;neil@bowers.com&gt; por email, a cada início de mês um módulo CPAN era
sorteado e até o final do mês era preciso enviar ao menos um Pull Request no
Github para este módulo.

Deste modo, participei do desafio de janeiro à dezembro e ao todo enviei
XX Pull Requests, segue um resumo da minha participação.

## Fevereiro

Meu primeiro desafio ainda dentro do mês de fevereiro foi o módulo Module::Setup

* https://metacpan.org/release/Module-Setup
* https://github.com/yappo/p5-Module-Setup

Este modulo possuía algumas dependencias sem pacote Debian, acabei empacotando
essas dependencias e submetendo ao Debian, são elas:

* Module::Install::TestBase (em processo)
* Module::Install::Repository (em processo)

Também atualizei o pacote Test::Base para a última versão do upstream e submeti
ao Debian.

Minha contribuição ao módulo selecionado no desafio foi uma pequena modificação
no arquivo Makefile.PL para dar mensagem de aviso indicando dependencias faltando.

* http://github.com/yappo/p5-Module-Setup/pull/4

## Março

Em março Neil sorteou o módulo libnet, tive pouco tempo no mês de março e
fiz uma sugestão de nova funcionalidade no Net::FTP para listar arquivos
ocultos, a ideia foi baseada no ticket do RT CPAN:

* https://rt.cpan.org/Public/Bug/Display.html?id=101586
* https://github.com/steve-m-hay/perl-libnet/pull/16

Enviei atrasado o email "I'm done" em 1 de Abril de 2015. Aguardando novo módulo do
mês de Abril...

## Abril

Em abril também sem tempo para algo mais elaborado enviei um pull-request bem pequeno
para o módulo Data::Compare, enviei email para Neil dia 29/Abril.

* https://metacpan.org/pod/Data::Compare
* https://github.com/DrHyde/perl-modules-Data-Compare/pull/6

## Maio

O mês de maio eu atrasei mais que os outros, e pelo atraso e pela dificuldade
em entender o módulo sorteado pra mim eu fiz um pull-request bem simples,
um ";" faltando no código fonte. Email enviado "I'm done" para neil em 08/06.

* https://metacpan.org/pod/Method::Signatures
* https://github.com/evalEmpire/method-signatures/pull/118

## Junho

Para junho fui sorteado com o módulo PDF::Table

* https://metacpan.org/pod/PDF::Table
* https://github.com/kamenov/PDF-Table/pull/18
* https://github.com/kamenov/PDF-Table/pull/19

## Julho

Em julho foi a vez do cpan-outdated, como sempre pouco tempo fiz um "pequeno" pull-request só para não ficar de fora:

* https://metacpan.org/pod/cpan-outdated
* https://github.com/tokuhirom/cpan-outdated/pull/30

## Agosto

Agosto, atrasado em 09/09:

* https://github.com/cpants/Module-CPANTS-Analyse/pull/25

## Setembro

Setembro, atrasado:

(recuperar nos emails)

## Outubro

Outubro é o Hacktoberfest da DigitalOcean

* https://hacktoberfest.digitalocean.com/

(foram os 2 pull-req do mês de setembro + os abaixo)

https://github.com/koorchik/Mojolicious-Plugin-ValidateTiny/pull/10
https://github.com/koorchik/Mojolicious-Plugin-ValidateTiny/pull/11

## Novembro

(aguardando)

## Dezembro

(aguardando)

[cpan-prc]: http://cpan-prc.org
[take-the-2015]: http://blogs.perl.org/users/neilb/2014/12/take-the-2015-cpan-pull-request-challenge.html
[more-details]: http://blogs.perl.org/users/neilb/2015/01/more-details-on-the-cpan-pull-request-challenge.html
[github-cpan-prc]: http://github.com/CPAN-PRC/resources
[brasil-pm-cpan-prc]: http://mail.pm.org/pipermail/brasil-pm/2014q4/000356.html
[metacpan]: http://metacpan.org
