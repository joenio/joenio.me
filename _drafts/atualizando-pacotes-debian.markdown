---
title: Atualizando pacotes Perl no Debian
---



<!--
==========================
 
cpantesters: instalar zlib dev / libssl-dev / make / build-essential

cpan
>> o conf make install _commant = sudo make
          build install _command = sudo ./Build    

==========================
-->

![descricao imagem aqui](/files/default-post-image.png)

Neste post irei demonstrar como criar pacotes para o sistema operacional livre
[Debian][] [GNU/Linux][linux], submeter esses pacotes ao projeto oficial,
atualizar, corrigir bugs, resolver e documentar questões sobre licenças, e uma
série de outras informações relacionadas ao processo de empacotamento Debian,
especialmente sobre o empacotamento de [módulos][cpan] [Perl][].

<pre class="terminal">
<code>
apt install devscripts debhelper git-buildpackage quilt mr pkg-perl-tools
</code>
</pre>

## Atualizar pacote a partir do upstream

Quando sair uma nova versão do módulo no [CPAN][] é interessante atualizar o
pacote com a nova versão do upstream, para isso é necessário primeiro garantir
que o repositório local está atualizado usando um dos dois comandos abaixo.

<pre class="terminal">
<code>
gbp pull
</code>
</pre>

Ou:

<pre class="terminal">
<code>
uscan
</code>
</pre>

Após atualizar o repositório locao baixe a nova
do versão do upstream com o seguinte comando:

<pre class="terminal">
<code>
gbp import-orig --uscan --pristine-tar
</code>
</pre>

Atualize ao menos o `debian/changelog` indicando a nova versão do upstream, por exemplo se a nova versão for 0.016 utilize o seguinte comando para atualizar o changelog:

<pre class="terminal">
<code>
dch -v 0.016
</code>
</pre>

Quando o pacote estiver pronto para upload no repositório do Grupo Perl, execute:

<pre class="terminal">
<code>
dpt push
</code>
</pre>

Consulte o documento [upgrading to a new upstream release][upgrade-upstream]
para mais informações sobre atualização de pacotes com nova versão do upstream.

quilt
-----

Uso do quilt: http://pkg-perl.alioth.debian.org/howto/quilt.html

  a) Mudar QUILT_PATCHES=debian/patches em .quiltrc

$ quilt new fix_spelling_error_in_manpage
$ quilt edit lib/Mojolicious/Plugin/Authorization.pm
$ quilt refresh

Adicionar configs no .quiltrc:

http://pkg-perl.alioth.debian.org/howto/quilt.html#tips_and_tricks


09 - Atualizar repositório git
------------------------------

8) Atualizar repositórios do grupo pkg-perl

$ mr up

(lembrar de configurar o mr atraves de ~/.mrconfig)

Também é pre-requisito ter uma conta no Alioth com sua chave SSH para conseguir
acesso ao repositorio do grupo pkg-perl.

PROBLEMAS COMUNS
----------------

Sempre verificar o COPYRIGHT de cada arquivo com grep para ter certeza
que o d/copyright está ok.

#### gpg: signing failed: Inappropriate ioctl for device

o gnupg não consegue abrir o agente para solicitar a frase de segurança,

=====

Verificar se o pacote funciona bem após os testes autopkgtest, ver documentacao abaixo:
http://pkg-perl.alioth.debian.org/autopkgtest.html
https://lists.debian.org/debian-perl/2014/09/msg00100.html

<!--
  - d/copyright: no years of upstream copyright, and more important: the
    upstream source doesn't contain and copyright information. please add a
    comment like in liblog-dispatch-config-perl/debian/copyright or the
    default Berne Convention Comment from
    http://pkg-perl.alioth.debian.org/copyright.html#berne_convention

-->

noum phrase

<!-- 
, nunca sei o que é isso mas gregor sempre me corrije sobre isso: 
aconteceu com: libmodule-install-repository e libmodule-install-testbase também
-->


<!--
## testar build do pacote num ambiente limpo
Antes de submeter sempre testar construir o pacote dentro de um chroot "limpo": 

(se for usar pbuilder esse passo n eh necessário)

<!-- sudo mk-build-deps --install --remove --tool 'apt-get --yes --force-yes' ->
-->

<!--
O comando `pbuilder create` cria o `base.tgz` com a distribuição Debian Sid, 
`pbuilder update` atualiza o sistema chroot base com as atualizacoes do sid,
para executar pdebuild (é preciso estar no sudo)
-->
