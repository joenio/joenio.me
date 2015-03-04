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
