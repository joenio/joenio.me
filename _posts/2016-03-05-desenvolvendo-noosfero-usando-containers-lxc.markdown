---
title: Desenvolvendo Noosfero usando containers LXC
tags: tecnologia lxc noosfero
---

![Noosfero LXC](/files/noosfero-lxc.png)

Sou desenvolvedor do projeto [Noosfero][noosfero] a algum tempo e desde meu
[primeiro commit][primeiro-commit] em 2008 venho utilizando ambientes de
desenvolvimento variados para isolar meu sistema real do sistema onde o
Noosfero é executado, desde chroot e schroot, passando por VirtualBox e
Vagrant, chegando mais recentemente ao Linux Containers (LXC), testei o Docker
mas não gostei muito.

O que eu busco nestas soluções é o seguinte:

1. Isolar instalação de dependencias de desenvolvimento do meu sistema real
1. Fácil de criar, destruir e recriar ambientes de desenvolvimento
1. Mapear código-fonte entre meu sistema real e o ambiente virtual

Isto quer dizer que para cada projeto tenho um ambiente "virtual" isolado, de
forma que não é necessário instalar dependencias de desenvolvimento em meu
sistema, ou que um ambiente "virtual" seja poluído com dependencias de outro
projeto, ou seja, para cada projeto tenho um ambiente "virtual" isolado.

Nas aventuras com o [LXC][lxc] senti necessidade de algo para simplificar e
automatizar um pouco as coisas, então comecei a escrever um pequeno shell
script e lhe dei o nome de `holodev`.

## holodev

<img src='/files/holodeck.gif' class='float-right' />

O nome [holodev][holodev] é uma referência à tecnologia [Holodeck][holodeck] do
seriado Star Trek, nela é possível criar ambientes e cenários conhecidos com um
alto nível de fidelidade e realidade a partir de um simples comando de voz.
Basta dizer: "crie o estádio Fonte Nova antes de ser implodido em 2010 em algum
jogo Bahia x Vitória" e o Holodeck cria toda a realidade, com objetos e
personagens.

O `holodev` é então um Holodeck para desenvolvedores de software, onde ambientes
virtuais são criados com o mínimo de esforço. Vejamos como criar um ambiente de
desenvolvimento [Noosfero][noosfero-gitlab] usando `holodev` em um sistema
Debian-like.

Adicione o seguinte repositório ao `/etc/apt/sources.list`:

    deb http://debian.joenio.me unstable/

Baixe a chave do repositório e instale o pacote `holodev`:

<pre class="terminal">
<code>
# wget -O - http://debian.joenio.me/signing.asc | apt-key add -
# apt-get update
# apt-get install holodev
</code>
</pre>

Supondo que você já tem o código-fonte do Noosfero, entre no seu diretório e
execute o seguinte comando. (_é preciso ter sudo_)

<pre class="terminal">
<code>
~/src/noosfero$ holodev create --release jessie
</code>
</pre>

Isto vai (1) criar um container chamado 'noosfero-master' usando Debian Jessie,
(2) criar seu usuário dentro do container com o mesmo UID e (3) mapear o
código-fonte do Noosfero dentro do container. O próximo passo é entrar no
container e instalar as dependencias de desenvolvimento do Noosfero.

<pre class="terminal">
<code>
~/src/noosfero$ holodev attach
</code>
</pre>

Dentro do container LXC 'noosfero-master' execute o seguinte:

<pre class="terminal">
<code>
~$ ./script/quick-start --force-install
</code>
</pre>

O script `quick-start` irá instalar todas as dependencias necessárias além de
executar um setup inicial deixando tudo pronto para o Noosfero ser executado.

Pronto! Você tem um container LXC redondo para rodar o Noosfero, executar os
testes, abrir o console Rails, etc... Agora é só meter a mão na massa e começar
a _codar_.

Não sabe o que fazer? [Comece resolvendo algum bug][noosfero-bugs]. Se precisar
de ajuda pergunte na [lista de discussão da comunidade][noosfero-br].

[noosfero]: http://noosfero.org
[primeiro-commit]: http://gitlab.com/noosfero/noosfero/commit/dedffcc6a535cfe7a097770c1485e1658565e929
[lxc]: http://wiki.debian.org/LXC
[holodeck]: http://en.wikipedia.org/wiki/Holodeck
[holodev]: http://github.com/lappis-tools/holodev
[noosfero-gitlab]: http://gitlab.com/noosfero/noosfero/
[noosfero-bugs]: http://gitlab.com/noosfero/noosfero/issues?label_name=bug
[noosfero-br]: http://listas.softwarelivre.org/cgi-bin/mailman/listinfo/noosfero-br
