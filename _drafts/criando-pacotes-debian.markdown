---
title: Empacotando módulos Perl no Debian
tags: tecnologia debian perl
---

Escrever um tutorial de como criar pacotes Debian, como submeter ao Debian,
como atualizar, corrigir, questoes de licenças, etc

Começar o texto com uma introdução ao maravilhoso mundo dos pacotes Debian,
resolucao de dependencias, compilacao para varias plataformas, simples, facil
e lindo de se usar! O Debian eh o melhor sistema operacional do mundo!

01 - Instalar pacotes de desenvolvimento básicos
------------------------------------------------

0) Install devscripts, debhelper, svn-buildpackage, etc... (debuild), quilt (para trabalhar com patches)

mr (multiplo repositorios) e pkg-perl-tools

# apt-get install devscripts debhelper git-buildpackage quilt mr

Referencia sobre git do grupo: http://pkg-perl.alioth.debian.org/git.html

02 - Criar versão inicial do pacote
-----------------------------------

1) dh-make-perl --pkg-perl --cpan nome no cpan ou db-make-perl diretório dos fontes

03 - Correções básicas da versão inicial
----------------------------------------

2) Corrigir copyright, control, changelog (unstable) fechar um bug # ITP

Deve-se adicionar o ano em cada linha do copyright, ex: 2010-2012 ou 2011

Remover DISCLAIMER do copyright adicionado pelo dh-make-perl automaticamente

Escolher uma boa descricao curta e longa no d/control, isto eh importante,
deve-se levar um tempo nisso, uma boa descricao eh algo importante no empacotamento.

Quando o author não deixa explícito o ano do copyright é importante
documentar isso no d/copyright de alguma forma, uma opção é usar a dica
abaixo dada a mim enquanto empacotava o libmodule-install-repository
pelo gregor:
  - d/copyright: no years of upstream copyright, and more important: the
    upstream source doesn't contain and copyright information. please add a
    comment like in liblog-dispatch-config-perl/debian/copyright or the
    default Berne Convention Comment from
    http://pkg-perl.alioth.debian.org/copyright.html#berne_convention

(neste caso eu optei por usar a berne_convention)

04 - Gerar pacote e verificar conformidade com lintian
------------------------------------------------------

3) debuild -us -uc ou git-buildpackage / corrigir lintian mensagens

rodar lintian -I

como corrigir mensagem de ter .git no diff???

05 - Publicar pacote em algum repositório (não-oficial)
-------------------------------------------------------

4) dput para publicar num repositorio e testar instalacao (mostrar outro post sobre isso depois)

dput aceita como parametro o arquivo .changes do pacote já feito

dput sede arquivo.changes

(usar dpub + mini-dinstall)
(ver http://upsilon.cc/~zack/blog/posts/2009/04/howto:_uploading_to_people.d.o_using_dput/)
( e  http://wiki.debian.org/HowToSetupADebianRepository)

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

08 - Fazer upload do pacote no repositório git do grupo Debian pkg-perl
-----------------------------------------------------------------------

Alterar debian/changelog: UNRELEASED -> unstable

Adicionar mensagem: (Closes: #NNNNNN)

packages/lib...-perl$ dpt alioth-repo

http://pkg-perl.alioth.debian.org/git.html#pushing_to_git_debian_org

Após algum tempo o pacote entra no PET se o status no changelog for unstable
(nao UNRELEASED)

http://pet.debian.net/pkg-perl/pet.cgi

Antes de submeter sempre testar construir o pacote dentro de um chroot "limpo": sbuild, pbuilder ou cowbuilder

com o pbuilder faça o seguinte

# pbuilder create (cria base.tgz com sid)
# pbuilder update (atualiza o sistema chroot base com as atualizacoes do sid)
$ pdebuild (é preciso estar no sudo)

Verificar se o pacote funciona bem após os testes autopkgtest, ver documentacao abaixo:
http://pkg-perl.alioth.debian.org/autopkgtest.html
https://lists.debian.org/debian-perl/2014/09/msg00100.html

Alguns pacotes marcados na whitelist são executados contra o autopkgtest no servidor CI
http://ci.debian.net

09 - Atualizar repositório git
------------------------------

8) Atualizar repositórios do grupo pkg-perl

$ mr up

(lembrar de configurar o mr atraves de ~/.mrconfig)

10 - Atualizar pacote a partir do upstream
------------------------------------------

9) Atualizar pacote com nova versão no upstream

gbp-pull ou uscan

$ git-import-orig --uscan --pristine-tar

PROBLEMAS COMUNS
----------------

Sempre verificar o COPYRIGHT de cada arquivo com grep para ter certeza
que o d/copyright está ok.
