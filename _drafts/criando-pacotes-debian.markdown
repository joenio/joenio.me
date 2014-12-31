---
title: Criar pacotes Debian de módulos Perl
tags: tecnologia debian perl
---

Escrever um tutorial de como criar pacotes Debian, como submeter ao Debian,
como atualizar, corrigir, questoes de licenças, etc

Usar como base um TXT que escrevi como referencia pessoal...

01 - Instalar pacotes de desenvolvimento básicos
------------------------------------------------

0) Install devscripts, debhelper, svn-buildpackage, etc... (debuild), quilt (para trabalhar com patches)

02 - Criar versão inicial do pacote
-----------------------------------

1) dh-make-perl --pkg-perl --cpan nome no cpan ou db-make-perl diretório dos fontes

03 - Correções básicas da versão inicial
----------------------------------------

2) Corrigir copyright, control, changelog (unstable) fechar um bug # ITP

Deve-se adicionar o ano em cada linha do copyright, ex: 2010-2012 ou 2011

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

5) Reportar bug com reportbug

reportbug wnpp

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

Verificar as versões das dependencias, nem sempre as sugestões
dos desenvolvedores no Makefile.PL está correta, ou o Debian
possui versão mais antiga que esta.

08 - Fazer upload do pacote no repositório git do grupo Debian pkg-perl
-----------------------------------------------------------------------

7) Fazer upload no repositório do grupo Debian pkg-perl

Alterar debian/changelog: UNRELEASED -> unstable

Adicionar mensagem: (Closes: #NNNNNN)

src/pkg-perl/git/packages/lib...-perl$ ../../alioth-git-repo

Após algum tempo o pacote entra no PET se o status no changelog for unstable
(nao UNRELEASED)

http://pet.debian.net/pkg-perl/pet.cgi

Antes de submeter sempre testar construir o pacote dentro de um chroot: sbuild, pbuilder, cowbuilder

# pbuilder create (cria base.tgz com sid)

# pbuilder update (atualiza o sistema chroot base com as atualizacoes do sid)

$ pdebuild

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
