Sou desenvolvedor do projeto Noosfero a algum tempo e desde meu primeiro commit
em 2008 venho utilizando ambientes de desenvolvimento variados para isolar meu
sistema real do sistems onde o Noosfero será executado, desde chroot e schroot,
passando por VirtualBox e Vagrant, chegando mais recentemente ao Linux
Containers (LXC), testei também o Docker mas não gostei.

Como dito, recentemente cheguei ao LXC, ele atende à minha necessidade
para desenvolvimento.

* isolar a instalação de dependencias de desenvolvimento
* fácil de criar, destuir e re-criar novos ambientes
* mapeamento do código-fonte entre o sistema real e o ambiente "virtualizado"

Para cada projeto eu quero um ambiente "virtual" isolado, de forma que não seja
necessário instalar dependencias de desenvolvimento em seu sistema real nem que
um ambiente "virtual" seja poluído com dependencias de outro projeto.

Ou seja, além do projeto Noosfero, costumo desenvolver também para outros projetos,
nestes outros projetos eu utilizo ambientes "virtuais" isolados. O que significa isto?
Que para o Noosfero eu tenho um container específico, para o projeto-b eu tenho outro,
e assim por diante.

Estes ambientes "virtuais" são apenas ...

=======================================================

Em um Debian testing

https://wiki.debian.org/LXC

Instale:
 * bridge-utils libvirt-bin debootstrap lxctl

Teste:
 # lxc-checkconfig

https://github.com/pixelb/scripts/blob/master/scripts/ansi2html.sh

Para funcionar rede:

Execute:
 # virsh net-autostart default

Edite /etc/lxc/default.conf:

Remova a linha:
 lxc.network.type = empty

E adicione:
 lxc.network.type = veth
 lxc.network.link = virbr0


Crie sistema base:
 # lxc-create -n noosfero -t debian -- -r wheezy

-- noosfero: oe6NAobz
-- perl: Sh3nZatn

Para montar o código fonte do Noosfero dentro do container basta

1 Criar o diretório dentro do container:

 # mkdir /var/lib/lxc/noosfero/rootsh/JOENIO

2 Adicionar no fstab do container a seguinte linha

/var/lib/lxc/noosfero/fstab:

/home/joenio /var/lib/lxc/noosfero/rootfs/JOENIO none bind 0 0

Inicie e entre no container:
 # lxc-start -n noosfero -d
 # lxc-console -n noosfero

 # lxc-execute 
Dentro do container:
 # addgroup --gid 1000 joenio
 # adduser --uid 1000 --gid 1000 --disabled-password joenio

Adicionar user joenio ao sudo:
 # apt-get update
 # apt-get install sudo
 # echo "%sudo ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/sudo-group-nopasswd

Pacotes utilitarios basicos:
 # apt-get install aptitude bash-completion

Instalando dependencias de denvolvimento Noosfero e setup básico:
 # su - joenio
 $ cd /JOENIO/src/noosfero
 $ ./script/quick-start

Gerando pacotes:
 $ rake noosfero:debian\_packages
 $ debsign pkg/noosfero\_1.2\_amd64.changes

