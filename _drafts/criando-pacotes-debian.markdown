---
title: Empacotando módulos Perl no Debian
modulo: Devel::FindPerl
pacote: libdevel-findperl-perl
---

==========================
 
cpantesters: instalar zlib dev / libssl-dev / make / build-essential

cpan
>> o conf make install _commant = sudo make
          build install _command = sudo ./Build    

==========================

Neste post irei demonstrar como criar pacotes para o sistema operacional livre
[Debian][] [GNU/Linux][linux], submeter esses pacotes ao projeto oficial,
atualizar, corrigir bugs, resolver e documentar questoes sobre licenças, e uma
série de outras informações relacionadas ao processo de empacotamento Debian,
especialmente sobre o empacotamento de [módulos][cpan] [Perl][].

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
Debian][plataformas]. Contribuir com o empacotamento de novos softwares ou com
a manutenção dos pacotes existentes é uma forma muito simples e útil de
melhorar a qualidade geral deste sistema operacional universal.

Vamos lá!

## Instalar as dependências para empacotamento

Você precisa utilizar alguma versão do Debian, _stable_, _testing_, ou
_unstable_ e ter os seguintes pacotes instalados:

<pre class="terminal">
<code>
apt-get install devscripts debhelper git-buildpackage quilt mr pkg-perl-tools
</code>
</pre>

Consulte o [guia do Debian Perl Group sobre uso do
Git](http://pkg-perl.alioth.debian.org/git.html) para mais detalhes sobre
os pacotes necessários.

Instale também o `apt-file` e atualize a sua base de dados para que o `dh-make-perl`
possa descobrir qual pacote é de qual módulo:

<pre class="terminal">
<code>
apt-get install apt-file
apt-file update
</code>
</pre>

Assim é possível descobrir se um certo módulo Perl já está empacotado no
Debian, por exemplo, execute o comando abaixo para descobrir se o módulo
[{{ page.modulo }}][modulo-url] está empacotado no Debian e qual é o nome do
pacote em caso afirmativo.

<pre class="terminal">
<code>
dh-make-perl locate {{ page.modulo }}
</code>
</pre>

Até o momento da escrita deste post o módulo acima não está empacotado no Debian
então o `dh-make-perl` reporta o seguinte:

<pre class="terminal">
<code>
== dh-make-perl 0.95 ==
Using cached Contents from Sun Jul 16 19:21:00 2017
{{ page.modulo }} is not found in any Debian package
</code>
</pre>

## Criar a versão inicial do pacote

Já sabendo que o módulo `{{ page.modulo }}` não está empacotado ainda
basta usar o comando `dh-make-perl` para criar a versão inicial do pacote:

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

Infome também ao Git quem você é para que o `dh-make-perl` gere o template
inicial do pacote com as informações corretas:

<pre class="terminal">
<code>
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
</code>
</pre>

O `dh-make-perl` criará um repositório Git local com a cópia da última versão
do módulo `{{ page.modulo }}` já com os arquivos necessários para o pacote
Debian, o nome dado ao pacote será `{{ page.pacote }}`, este é o padrão
definido pela [política de nomes para pacotes][naming-policy] do _Debian Perl
Group_.

## Correções básicas no template inicial

O template inicial do pacote criado pelo `dh-make-perl` é muito bom mas não é
ideal, muitas alterações serão necessárias até o pacote estar pronto para entrar nos
repositórios oficiais do projeto Debian, mas geralmente é necessário
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

Remover DISCLAIMER do copyright adicionado pelo dh-make-perl automaticamente

### debian/control

Escolher uma boa descrição é fundamental, deve-se levar um bom tempo nisso,
tanto para a descrição curta, quanto para a descrição longa do pacote.

Consulte a [política para descrição de pacotes][description-policy] no manual de
políticas do Debian.

### debian/copyright

Se o upstream não informar o ano nas notas de copyright do código fonte então
será necessário documentar isso de alguma forma, as opções são (1) fazer um
comentário como feito no
[liblog-dispatch-config-perl/debian/copyright][liblog-dispatch-config-perl/copyright]
ou (2) utilizar o padrão [Berne Convention Comment][berne-convention], eu
prefiro a segunda opção.

<!--
  - d/copyright: no years of upstream copyright, and more important: the
    upstream source doesn't contain and copyright information. please add a
    comment like in liblog-dispatch-config-perl/debian/copyright or the
    default Berne Convention Comment from
    http://pkg-perl.alioth.debian.org/copyright.html#berne_convention

(neste caso eu optei por usar a berne_convention)
-->

[liblog-dispatch-config-perl/copyright]:https://anonscm.debian.org/cgit/pkg-perl/packages/liblog-dispatch-config-perl.git/tree/debian/copyright?h=debian/1.04-1
[berne-convention]: http://pkg-perl.alioth.debian.org/copyright.html#Berne_Convention

### debian/changelog

Deve ser informado no arquivo `debian/changelog` uma mensagem referenciando o
fechamendo de um bug do tipo [ITP][] e o pacote deve ser indicado como
`unstable`, isto significa que os pacotes sempre entram na distribuição
`unstable`, a partir disso segue seu fluxo até chegar na versão `stable`.

## Gerar o pacote e verificar a conformidade com lintian

<pre class="terminal">
<code>
gbp buildpackage -us -uc
</code>
</pre>

Corrigir os _warnings_ do `lintian`, re-gerar o pacote e verificar novamente com
a flag `-I`.

<pre class="terminal">
<code>
lintian -I
</code>
</pre>

05 - Publicar pacote em algum repositório (não-oficial)
-------------------------------------------------------

4) dput para publicar num repositorio e testar instalacao (mostrar outro post sobre isso depois)

dput aceita como parametro o arquivo .changes do pacote já feito

dput debian.joenio.me <arquivo.changes>

06 - Reportar bug do tipo ITP com reportbug
-------------------------------------------

$ reportbug wnpp

seleciona 1 ITP

Uso do quilt: http://pkg-perl.alioth.debian.org/howto/quilt.html

  a) Mudar QUILT_PATCHES=debian/patches em .quiltrc

$ quilt new fix_spelling_error_in_manpage
$ quilt edit lib/Mojolicious/Plugin/Authorization.pm
$ quilt refresh

Adicionar configs no .quiltrc:

http://pkg-perl.alioth.debian.org/howto/quilt.html#tips_and_tricks

07 - Verificar e corrigir alguns parametros
-------------------------------------------

6) Verificar

Versao correta de "Standards-Version: 3.9.4"
Formato do copyright, atualmente usar DEP-5
Verificar o COPYRIGHT de cada arquivo (usar grep ou ack)

$ ack COPYRIGHT -a

Não incluir dependencias para 'perl-modules' ou 'perl-base', apenas para
'perl'. 'perl' é fornecido por ${perl:Depends}.

Descrição curta deve iniciar com letra minuscula.

"deve ser a 'noum phrase'", nunca sei o que é isso mas gregor sempre me corrije sobre isso:
aconteceu com: libmodule-install-repository e libmodule-install-testbase também

Verificar as versões das dependencias, nem sempre as sugestões
dos desenvolvedores no Makefile.PL está correta, ou o Debian
possui versão mais antiga que esta.

## instalar dependencias de build

(se for usar pbuilder esse passo n eh necessário)

sudo mk-build-deps --install --remove --tool 'apt-get --yes --force-yes'

## testar build do pacote num ambiente limpo

Antes de submeter sempre testar construir o pacote dentro de um chroot "limpo": sbuild, pbuilder ou cowbuilder

com o pbuilder faça o seguinte

$ sudo pbuilder create (cria base.tgz com sid)
$ sudo pbuilder update (atualiza o sistema chroot base com as atualizacoes do sid)
$ pdebuild (é preciso estar no sudo)

Verificar se o pacote funciona bem após os testes autopkgtest, ver documentacao abaixo:
http://pkg-perl.alioth.debian.org/autopkgtest.html
https://lists.debian.org/debian-perl/2014/09/msg00100.html

Alguns pacotes marcados na whitelist são executados contra o autopkgtest no servidor CI
http://ci.debian.net

o pacote git-buildpackage oferece um wrapper para o pdebuild também, para usalo e evitar
mensagens a respeito dos arquivos binarios existentes no repositorio .git basta executar
da seguinte forma:

$ BUILDER=pbuilder git-pbuilder

passe a opção --force-sign para assinar os arquivos do pacote.

--othermirror

deb http://local/mirror stable main


08 - Fazer upload do pacote no repositório git do grupo Debian pkg-perl
-----------------------------------------------------------------------

Alterar debian/changelog: UNRELEASED -> unstable

Adicionar mensagem: (Closes: #NNNNNN)

packages/lib...-perl$ dpt alioth-repo

http://pkg-perl.alioth.debian.org/git.html#pushing_to_git_debian_org

Após algum tempo o pacote entra no PET se o status no changelog for unstable
(nao UNRELEASED)

http://pet.debian.net/pkg-perl/pet.cgi

09 - Atualizar repositório git
------------------------------

8) Atualizar repositórios do grupo pkg-perl

$ mr up

(lembrar de configurar o mr atraves de ~/.mrconfig)

Também é pre-requisito ter uma conta no Alioth com sua chave SSH para conseguir
acesso ao repositorio do grupo pkg-perl.

10 - Atualizar pacote a partir do upstream
------------------------------------------

9) Atualizar pacote com nova versão no upstream

garantir que o repositório local está atualizado: gbp pull ou uscan

baixar versão nova do upstream: gbp import-orig --uscan --pristine-tar

atualizar o changelog com a versão do upstream: dch -v 2.000001

https://pkg-perl.alioth.debian.org/handbook/git.html#upgrading-to-a-new-upstream-release

quando o pacote estiver pronto para upload pro grupo pkg-perl:

$ dpt push

PROBLEMAS COMUNS
----------------

Sempre verificar o COPYRIGHT de cada arquivo com grep para ter certeza
que o d/copyright está ok.

#### gpg: signing failed: Inappropriate ioctl for device

o gnupg não consegue abrir o agente para solicitar a frase de segurança,


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
[naming-policy]: http://pkg-perl.alioth.debian.org/policy.html#Package_Naming_Policy
[description-policy]: https://www.debian.org/doc/debian-policy/ch-binary.html#s-descriptions
[ITP]: https://wiki.debian.org/ITP
