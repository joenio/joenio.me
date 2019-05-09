---
title: Empacotando módulos Perl no Debian
modulo: Devel::FindPerl
pacote: libdevel-findperl-perl
lead: >
  Neste post demonstro como criar pacotes para o sistema operacional livre
  Debian GNU/Linux, submeter o pacote ao projeto oficial, resolver e documentar
  questões sobre licenças, e uma série de outras informações relacionadas ao
  processo de empacotamento de módulos Perl no Debian.
---

![descricao imagem aqui](/files/clone-trooper-e-wall-e-pacotes-perl.jpg)

Neste post irei demonstrar como criar pacotes para o sistema operacional livre
[Debian][] [GNU/Linux][linux], submeter esses pacotes ao projeto oficial,
resolver e documentar questões sobre licenças, e uma série de outras
informações relacionadas ao processo de empacotamento Debian, especialmente
sobre o empacotamento de [módulos][cpan] [Perl][].

O Debian é um sistema operacional [livre][] criado e mantido por um grupo
independente de desenvolvedores espalhados ao redor do mundo, o projeto foi
iniciado em 1993 e tem sido desenvolvido abertamente desde então, sempre
seguindo o espírito livre do [projeto GNU][GNU]. O sistema de gerenciamento de
pacotes Debian, chamado [APT][APT], foi criado originalmente pelos
desenvolvedores do projeto e conta hoje com 51 mil pacotes em seus
[repositórios][repositorio] oficiais.

A enorme quantidade de pacotes disponíveis torna extremamente simples
pesquisar, instalar, atualizar ou remover qualquer software em seu computador,
seja desktop, servidor ou qualquer outra [plataforma suportada pelo
Debian][plataformas]. Contribuir com o empacotamento de novos projetos de
software ou com a manutenção dos pacotes existentes é uma forma muito simples e
útil de melhorar a qualidade geral deste sistema operacional universal.

Vamos lá! Os exemplos relatados aqui serão com o módulo [{{ page.modulo
}}][modulo-url], empacotado durante a escrita deste post e que até a data de
publicação ainda não estava empacotado no Debian.

## Instalar as dependências para empacotamento

Primeiro, antes de tudo, é necessário utilizar alguma versão do Debian,
_stable_, _testing_, ou _unstable_ e ter os seguintes pacotes instalados.

<pre class="terminal">
<code>
apt install devscripts debhelper git-buildpackage pkg-perl-tools
</code>
</pre>

Consulte o [guia do Debian Perl Group sobre uso do Git][pkg-perl-git] para mais
detalhes sobre os pacotes necessários. Instale também o `apt-file` e atualize a
sua base de dados para que o `dh-make-perl` possa descobrir qual pacote é de
qual módulo.

<pre class="terminal">
<code>
apt install apt-file
apt-file update
</code>
</pre>

Assim é possível descobrir quando um certo módulo Perl já está empacotado no
Debian, execute o comando abaixo para descobrir se o módulo [{{ page.modulo
}}][modulo-url] está empacotado e qual é o nome do pacote em caso afirmativo.

<pre class="terminal">
<code>
dh-make-perl locate {{ page.modulo }}
</code>
</pre>

Até o momento da escrita deste post o módulo `{{ page.modulo }}` não está
empacotado no Debian então o `dh-make-perl` reporta o seguinte.

<pre class="terminal">
<code>
== dh-make-perl 0.95 ==
Using cached Contents from Sun Jul 16 19:21:00 2017
{{ page.modulo }} is not found in any Debian package
</code>
</pre>

## Criar a versão inicial do pacote

Infome ao Git quem você é para que o `dh-make-perl` gere o template
inicial do pacote com as informações corretas.

<pre class="terminal">
<code>
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
</code>
</pre>

Crie também as variáveis de ambiente abaixo com seu nome e email, isso ajuda o
`dh-make-perl` a criar os arquivos do pacote em `debian/` com seus dados
corretamente.

```shell
export EMAIL=you@example.com
export DEBFULLNAME="Your Name"
```

Crie a versão inicial do pacote.

<pre class="terminal">
<code>
dh-make-perl --pkg-perl --cpan {{ page.modulo }}
</code>
</pre>

<div class="alert alert-warning">
<strong>Atenção!</strong>
<em>Se o `cpan` nunca foi utilizado execute-o antes do `dh-make-perl` para que
sejam criadas as configurações básicas.</em>
</div>

O `dh-make-perl` criará um repositório Git local com a cópia da última versão
do módulo `{{ page.modulo }}` já com os arquivos necessários para o pacote
Debian, o nome dado ao pacote será `{{ page.pacote }}`, este é o padrão
definido pela [política de nomes para pacotes][naming-policy] do _Debian Perl
Group_.

## Correções básicas no template inicial

O template inicial do pacote criado pelo `dh-make-perl` é bom mas não é
ideal, muitas alterações são necessárias até o pacote estar pronto para entrar nos
repositórios oficiais do projeto Debian, geralmente é necessário
alterar ao menos os seguintes arquivos:

### debian/copyright

Adicionar o ano em cada linha do copyright, exemplo:

```
Files: debian/*
Copyright: 2006, Florian Ragwitz <rafl@debian.org>
 2008-2014, gregor herrmann <gregoa@debian.org>
 2008, Damyan Ivanov <dmn@debian.org>
License: Artistic or GPL-1+
```

Remover **DISCLAIMER** do copyright adicionado pelo `dh-make-perl`
automaticamente.

#### O que fazer quando o upstream não informa corretamente o ano do copyright?

Se o upstream não informar o ano nas notas de copyright do código fonte então
será necessário documentar isso de alguma forma, as opções são (1) fazer um
comentário como feito no
[liblog-dispatch-config-perl/debian/copyright][liblog-dispatch-config-perl/copyright]
ou (2) utilizar o padrão [Berne Convention Comment][berne-convention].

(1) liblog-dispatch-config-perl:

```yaml
Comment: Rationale from the author was:
  All of my modules available at http://search.cpan.org/~miyagawa/ with the
  statement "AUTHOR: Tatsuhiko Miyagawa" are, unless otherwise noted,
  Copyright (c) Tatsuhiko Miyagawa.
```

(2) Berne Convention:

```yaml
Comment: The upstream distribution does not contain an explicit statement of
 copyright ownership. Pursuant to the Berne Convention for the Protection of
 Literary and Artistic Works, it is assumed that all content is copyright by
 its respective authors unless otherwise stated.
```

Eu, geralmente, prefiro usar o comentário no formato **Berne Convention**.

### debian/control

Escolher uma boa descrição é fundamental, deve-se levar um bom tempo nisso,
tanto para a descrição curta, quanto para a descrição longa do pacote.

Consulte a [política para descrição de pacotes][description-policy] no manual
de políticas do Debian para mais detalhes sobre como descrever os pacotes de
forma adequada. A descrição curta deve, usualmente, iniciar com letra minúscula
e deve ser uma "noum phrase" (substantivo). No caso do pacote `{{ page.modulo }}`
alterei a descrição gerada pelo `dh-make-perl` para o seguinte.

#### single line synopsis:

```yaml
Description: Perl module to find the path to the currently running perl
```

Usei descrição curta iniciando com maiúscula por se tratar de um nome próprio
neste caso, a linguagem de programação é Perl e não perl, perl é o
interpretador.

#### extended description:

```yaml
 The Devel::FindPerl module tries to find the path to the currently running
 perl. It implements a function to try (really really hard) to find the path to
 the perl running your program and another function to test if the perl in
 `$path` is the same perl as the currently running one.
 .
 SECURITY ALERT: This module by default does things that are not particularly
 secure (run programs based on external input).
```

### debian/changelog

Deve ser informado no arquivo `debian/changelog` uma mensagem referenciando o
fechamendo de um bug do tipo [ITP][] e o pacote deve ser indicado como
`unstable`, isto significa que os pacotes sempre entram na distribuição
`unstable`, a partir disso segue seu fluxo até chegar na versão `stable`,
passando pela `testing`.

#### Reportar bug do tipo ITP com reportbug

`reportbug` é uma ferramenta de linha de comando para reportar bugs do sistema
Debian. Ao empacotar um software é importante registrar que temos a intenção de
empacotar este software para que a comunidade Debian tenha conhecimento de que
alguém está trabalhando nisso e assim evitar re-trabalho e sobreposição, um
pseudo-pacote chamado `wnpp` ([Work-Needing and Prospective Packages][wnpp])
é utilizado para concentrar os bugreports relativos a novos pacotes.

Os bugs reportados no pseudo-pacote `wnpp` recebem tags indicando o tipo do
"bug", neste caso queremos reportar um bug indicando que estamos trabalhando
(ou iremos trabalhar) num novo pacote, a tag para isso é a **ITP** (Intent To
Package), consulte a [documentação oficial do `reportbug`][reportbug] para
saber como configurá-lo e execute o seguinte comando para registrar um bug do
tipo ITP.

<pre class="terminal">
<code>
reportbug wnpp
</code>
</pre>

Selecione _1 ITP_, informe o nome do pacote como _{{ page.pacote }}_, informe a
descrição do pacote, use a mesma descrição curta utilizada no `debian/control`.
Após isso o _reportbug_ abrirá um editor de texto com o template da mensagem de
bug a ser enviada, adicione as seguintes informações:

1. versão do pacote = _0.015_
1. nome do upstream = _Leon Timmermans <leont@cpan.org>, Randy Sims <randys@thepierianspring.org>_
1. url do upstream = _https://metacpan.org/release/Devel-FindPerl_
1. licença = _Artistic or GPL-1+_
1. linguagem = _Perl_
1. inclua a descrição longa (use o mesmo do arquivo `debian/control`) no corpo da mensagem

Apague as mensagens adicionadas pelo template do reportbug, salve e feche o
arquivo para retornar ao reportbug, ele solicitará confirmação para o envio do
email ao sistema de bugs do Debian, responda `Y`. No exemplo seguido aqui
para o pacote `{{ page.modulo }}` a mensagem do reportbug ficou da seguinte
forma.

```
Subject: ITP: libdevel-findperl-perl -- Perl module to find the path to the currently running perl
Package: wnpp
Owner: Joenio Costa <joenio@joenio.me>
Severity: wishlist

* Package name    : libdevel-findperl-perl
  Version         : 0.015
  Upstream Author : Leon Timmermans <leont@cpan.org>
                    Randy Sims <randys@thepierianspring.org>
* URL             : https://metacpan.org/release/Devel-FindPerl
* License         : Artistic or GPL-1+
  Programming Lang: Perl
  Description     : Perl module to find the path to the currently running perl

The Devel::FindPerl module tries to find the path to the currently running
perl. It implements a function to try (really really hard) to find the path to
the perl running your program and another function to test if the perl in
`$path` is the same perl as the currently running one.

SECURITY ALERT: This module by default does things that are not particularly
secure (run programs based on external input).
```

Verifique a mensagem nos servidores do Debian, você deve receber uma
cópia do email, esta mensagem contém o número do bug, adicione o número do bug
no arquivo `debian/changelog` com a mensagem "(Closes #&lt;numero do bug&gt;)", veja
como ficou o changelog do `{{ page.pacote }}`.

```
libdevel-findperl-perl (0.015-1) unstable; urgency=low

  * Initial release. (Closes #928632)

 -- Joenio Costa <joenio@joenio.me>  Tue, 7 May 2019 12:21:30 -0300
```

A mensagem automática com o número do bug ITP criado para o pacote `{{
page.pacote }}` recebida dos servidores do Debian foi a seguinte.

```
Subject: Bug#928632: Acknowledgement (ITP: libdevel-findperl-perl -- Perl module to find the path to the currently running perl)

Thank you for filing a new Bug report with Debian.

You can follow progress on this Bug here: 928632: https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=928632.

This is an automatically generated reply to let you know your message
has been received.

Your message is being forwarded to the package maintainers and other
interested parties for their attention; they will reply in due course.

As you requested using X-Debbugs-CC, your message was also forwarded to
  debian-devel@lists.debian.org
(after having been given a Bug report number, if it did not have one).

Your message has been sent to the package maintainer(s):
 wnpp@debian.org

If you wish to submit further information on this problem, please
send it to 928632@bugs.debian.org.

Please do not send mail to owner@bugs.debian.org unless you wish
to report a problem with the Bug-tracking system.

-- 
928632: https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=928632
Debian Bug Tracking System
Contact owner@bugs.debian.org with problems
```

#### Atenção sobre dependendências declaradas no `debian/control`

Não se deve incluir dependencias para os pacotes `perl-modules` ou `perl-base`,
apenas para `perl`, lembrar que `perl` é fornecido por `${perl:Depends}`.

Verifique a versão das dependências, nem sempre as sugestões dos
desenvolvedores no `Makefile.PL` está correta, ou pode ocorrer do Debian não
possuir versão mais antiga que as versões no `Makefile.PL`.

Neste ponto já temos o pacote minimamente pronto, vamos testar e usar o
`lintian` para debugar possíveis problemas.

## Gerar o pacote e verificar a conformidade com lintian

Commite as mudanças realizadas nos arquivos em `debian/` e use o
`git-buildpackage` para gerar o pacote.

<pre class="terminal">
<code>
gbp buildpackage -us -uc
</code>
</pre>

As flags `-us` e `-uc` informam ao processo de build para não assinar o
pacote ao final do processo, usamos estas flags apenas enquanto estamos
testando, ao final quando for o momento de submeter o pacote ao Debian iremos
gerar o pacote e assinar ele com o GnuPG.

O `lintian` encontrou alguns problemas no empacotamento do módulo `{{ page.modulo }}`:

```
Now running lintian libdevel-findperl-perl_0.015-1_amd64.changes ...
W: libdevel-findperl-perl: new-package-should-close-itp-bug
E: libdevel-findperl-perl: possible-missing-colon-in-closes Closes #928632
W: libdevel-findperl-perl: spelling-error-in-description really really (duplicate word) really
```

Dois dos três problemas relatados pelo `lintian` indica que faltou adicionar
dois pontos (`:`) após a palavra _Closes_, o diff da mudança necessária para
resolver esse problema é o seguinte.

```diff
diff --git a/debian/changelog b/debian/changelog
index 914b680..8e8e6f6 100644
--- a/debian/changelog
+++ b/debian/changelog
@@ -1,5 +1,5 @@
 libdevel-findperl-perl (0.015-1) unstable; urgency=low
 
-  * Initial release. (Closes #928632)
+  * Initial release. (Closes: #928632)
 
  -- Joenio Costa <joenio@joenio.me>  Tue, 7 May 2019 12:21:30 -0300
```

O terceiro warning do `lintian` _spelling-error-in-description_ é um falso
positivo pois a palavra _really_ duplicada está assim de propósito, a descrição
do upstream usa essa forma para enfatizar a mensagem, usei a mesma descrição
do upstream, neste caso podemos criar um arquivo no pacote para fazer o
`lintian` não mais reclamar desse falso warning, para isso usamos o `lintian`
[_Override_][lintian-override] criando o arquivo
`debian/libdevel-findperl-perl.lintian-overrides` com o seguinte conteúdo.

```yaml
# The package long description duplicate the word "really" on purpose
libdevel-findperl-perl binary: spelling-error-in-description
```

Após corrigir os _warnings_ do `lintian` vamos re-gerar o pacote e verificar
novamente usando a flag `-I` para obter mensagens mais descritivas do lintian.
Commite as mudanças realizadas no código do pacote (arquivo em `debian/`),
execute novamente `gbp buildpackage -us -uc` e rode o `lintian`.

<pre class="terminal">
<code>
lintian -I
</code>
</pre>

Uma vez que temos uma versão inicial do pacote pronta é interessante publicar
em algum repositório para testar a instalação com o `APT`, claro que é possível
instalar o pacote localmente usando o `dpkg` diretamente.

## Publicar o pacote em repositório (não-oficial)

Veja no post [Aprenda a criar repositórios de pacotes
Debian](/aprenda-a-criar-repositorios-de-pacotes-debian) como criar seu próprio
repositório de pacotes Debian usando `dput` + `mini-dinstall` + `nginx`. É
necessário gerar o pacote novamente sem o uso das flags `-us` e `-uc` para
assinar o pacote com [GnuPG][], o upload para o repositório via `dput` requer
que o pacote esteja assinado.

Irei publicar no repositório [http://debian.joenio.me](http://debian.joenio.me)
usando o `dput` para testar a publicação do pacote e na sequência testar a
instalação via APT. O `dput` aceita como parâmetro o arquivo `.changes` do
pacote, para o pacote `{{ page.pacote }}` vamos executar o seguinte.

<pre class="terminal">
<code>
dput debian.joenio.me ../{{ page.pacote }}_0.015-1_amd64.changes
</code>
</pre>

Altere o endereço do repositório `debian.joenio.me` pelo seu próprio
repositório ou por qualquer outro repositório onde você tem permissão de
escrita. Teste a instalação do pacote e garanta que ele instala corretamente,
caso encontre problemas resolva e só então submeta o pacote ao Debian. É uma
boa prática testar também a construção do pacote num ambiente `chroot` limpo.

## Construir o pacote num ambiente chroot isolado

Existem diversas ferramentas para criar um ambiente Debian limpo voltado para
construção de pacotes, geralmente usando `chroot`, entre os mais comuns estão o
`sbuild`, `pbuilder` e `cowbuilder`. Aqui vou mostrar o uso do `pbuilder` por
ser o que costumo utilizar no meu fluxo de empacotamento, execute os comandos
abaixo a partir do diretório do pacote.

<pre class="terminal">
<code>
sudo pbuilder create
sudo pbuilder update
pdebuild
</code>
</pre>

O `git-buildpackage` oferece um wrapper para o `pdebuild`, para usar ele e
evitar alertas a respeito dos arquivos binários existentes no diretório `.git`
basta executar o `pdebuild` da seguinte forma:

<pre class="terminal">
<code>
BUILDER=pbuilder git-pbuilder
</code>
</pre>

Passe a opção `--force-sign` para assinar os arquivos do pacote, se desejar
informar um mirror alternativo passe o parâmetro `--othermirror "deb
http://local/mirror stable main"`.

## Fazer upload do pacote no repositório do grupo Debian Perl

É necessário solicitar acesso ao [Salsa do time Perl do Debian][perl-team]
enviando um email com uma curta apresentação pessoal para o seguinte email <a
href="mailto:debian-perl@lists.debian.org">debian-perl@lists.debian.org</a>.
Após ter acesso ao repositório do grupo Perl é hora de fazer upload do pacote
no repositório do grupo, mas antes faça uma revisão final no pacote:

* Verifique se o status do pacote em `debian/changelog` foi alterado de UNRELEASED para unstable
* Garanta que há uma mensagem `(Closes: #NNNNNN)` no `debian/changelog` indicando o número do bug ITP
* Verifique a versão correta de "Standards-Version:", aqui a versão utilizada foi 4.3.0
* Use o formato correto no arquivo `debian/copyright`, atualmente usar [DEP-5][dep5]
* Verificar o COPYRIGHT de cada arquivo (usar grep ou ack) para buscar a quem pertence o copyright de cada arquivo

Feito as verificações finais, use o comando abaixo para criar e configurar um
novo projeto no Salsa, e subir o repositório local do nosso novo pacote `{{
page.pacote }}`.

<pre class="terminal">
<code>
dpt salsa pushrepo
</code>
</pre>

<div class="alert alert-warning">
<strong>Atenção!</strong>
<em>
Lembre de registrar um token em
[https://salsa.debian.org/profile/personal_access_tokens](https://salsa.debian.org/profile/personal_access_tokens)
e defina este token na variável de ambiente `DPT_SALSA_PRIVATE_TOKEN` para que
o `dpt` tenha acesso de escrita no servidor Salsa.
</em>
</div>

Para saber mais detalhes de como fazer upload do seu pacote veja a documentação
[pushing to salsa.debian.org][pushing-to-salsa], além do token é necessário
também fazer upload de sua chave ssh no Salsa, ele é uma instância do Gitlab,
então basta acessar sua conta ir em preferências e configurar uma chave ssh por
lá.

Algum tempo após o upload o pacote entra no [PET][] (Package Entropy Tracker),
mas apenas caso nenhum revisor solicite alterações mudando o status em
`debian/changelog` para `UNRELEASED`. Além disso, alguns pacotes marcados na
whitelist são executados contra o [autopkgtest][] no servidor CI do Debian e
podem ser consultados em [ci.debian.net](http://ci.debian.net).

O módulo `{{ page.modulo }}` empacotado para `{{ page.pacote }}` durante a escrita
deste post foi submetido ao repositório do Debian Perl Group e pode ser visualizado em:

* [https://salsa.debian.org/perl-team/modules/packages/libdevel-findperl-perl](https://salsa.debian.org/perl-team/modules/packages/libdevel-findperl-perl)

[Debian]: http://debian.org
[livre]: http://debian.org/intro/free
[GNU]: http://www.gnu.org
[repositorio]: http://www.debian.org/releases/stable/amd64/release-notes/ch-whats-new.pt-br.html#newdistro
[APT]: http://pt.wikipedia.org/wiki/Advanced_Packaging_Tool
[linux]: http://www.kernel.org
[cpan]: http://metacpan.org
[perl]: http://perl.org
[plataformas]: http://www.debian.org/ports
[modulo-url]: http://metacpan.org/pod/{{ page.modulo }}
[naming-policy]: http://perl-team.pages.debian.net/policy.html#Package_Naming_Policy
[description-policy]: https://www.debian.org/doc/debian-policy/ch-binary.html#s-descriptions
[ITP]: https://wiki.debian.org/ITP
[pkg-perl-git]: http://perl-team.pages.debian.net/git.html
[liblog-dispatch-config-perl/copyright]: https://salsa.debian.org/perl-team/modules/packages/liblog-dispatch-config-perl/blob/debian/1.04-1/debian/copyright
[berne-convention]: http://perl-team.pages.debian.net/copyright.html#Berne_Convention
[wnpp]: https://wiki.debian.org/WNPP
[reportbug]: https://wiki.debian.org/reportbug
[lintian-override]: https://lintian.debian.org/manual/section-2.4.html
[gnupg]: https://www.gnupg.org
[perl-team]: https://salsa.debian.org/perl-team
[dep5]: https://dep-team.pages.debian.net/deps/dep5/
[pushing-to-salsa]: http://perl-team.pages.debian.net/git.html#pushing_to_salsa.debian.org
[pet]: http://pet.debian.net/pkg-perl/pet.cgi
[autopkgtest]: https://perl-team.pages.debian.net/autopkgtest.html
[upgrade-upstream]: https://perl-team.pages.debian.net/git.html#upgrading_to_a_new_upstream_release
