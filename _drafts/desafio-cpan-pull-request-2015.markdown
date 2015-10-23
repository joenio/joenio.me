Irei participar do "2015 CPAN Pull Request Challenge" a partir de Março, em
19/02/2015 enviei email para Neil Bowers (neil@bowers.com) com os meus dados
para inscrição no desafio.

GitHub username: joenio
PAUSE id: joenio

Neil Bowers lançou o desafio em 24/12/2014:
* http://blogs.perl.org/users/neilb/2014/12/take-the-2015-cpan-pull-request-challenge.html

Em 12/01/2015 Neil Bowers deu mais detalhes sobre o desafio:
* http://blogs.perl.org/users/neilb/2015/01/more-details-on-the-cpan-pull-request-challenge.html

Breno de Oliveira fez um post na lista Brasil Perl Mongers explicando (em português):
* http://mail.pm.org/pipermail/brasil-pm/2014q4/000356.html

Foi criado um repositório no GitHub com documentação de recursos disponíveis:
* http://github.com/CPAN-PRC/resources

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
no arquivo Makefile.PL para dar mensagem de aviso indicando dependencias faltando,
o pull-request foi enviado ao Neil Bowers por email em 22/02/15.

* http://github.com/yappo/p5-Module-Setup/pull/4

Site do desafio lançado em 04 de Março 2015 na lista
http://cpan-prc.org/
http://www.listbox.com/member/archive/256049/2015/03/sort/time_rev/page/1/entry/0:1/20150304075416:8981B218-C26D-11E4-85A7-F78B4B9D8EF2/

Em março Neil sorteou o módulo libnet, tive pouco tempo no mês de março e
fiz uma sugestão de nova funcionalidade no Net::FTP para listar arquivos
ocultos, a ideia foi baseada no ticket do RT CPAN:

* https://rt.cpan.org/Public/Bug/Display.html?id=101586
* https://github.com/steve-m-hay/perl-libnet/pull/16

Enviei atrasado o email "I'm done" em 1 de Abril de 2015. Aguardando novo módulo do
mês de Abril...

Em abril também sem tempo para algo mais elaborado enviei um pull-request bem pequeno
para o módulo Data::Compare, enviei email para Neil dia 29/Abril.

* https://metacpan.org/pod/Data::Compare
* https://github.com/DrHyde/perl-modules-Data-Compare/pull/6

O mês de maio eu atrasei mais que os outros, e pelo atraso e pela dificuldade
em entender o módulo sorteado pra mim eu fiz um pull-request bem simples,
um ";" faltando no código fonte. Email enviado "I'm done" para neil em 08/06.

* https://metacpan.org/pod/Method::Signatures
* https://github.com/evalEmpire/method-signatures/pull/118

Para junho fui sorteado com o módulo PDF::Table

* https://metacpan.org/pod/PDF::Table
* https://github.com/kamenov/PDF-Table/pull/18
* https://github.com/kamenov/PDF-Table/pull/19

Em julho foi a vez do cpan-outdated, como sempre pouco tempo fiz um "pequeno" pull-request só para não ficar de fora:

* https://metacpan.org/pod/cpan-outdated
* https://github.com/tokuhirom/cpan-outdated/pull/30

Agosto, atrasado em 09/09:

* https://github.com/cpants/Module-CPANTS-Analyse/pull/25

Setembro, atrasado:

(recuperar nos emails)

Outubro é o Hacktoberfest da DigitalOcean

https://hacktoberfest.digitalocean.com/

(foram os 2 pull-req do mês de setembro + os abaixo)

https://github.com/koorchik/Mojolicious-Plugin-ValidateTiny/pull/10
https://github.com/koorchik/Mojolicious-Plugin-ValidateTiny/pull/11
