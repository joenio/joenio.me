---
title: Atari 2600 Vídeo Remix
---

`autor:djalgoritmo` | `ano:2019`

A obra é composta de três vídeos-remix com aproximadamente 2 minutos cada, com
trechos dos jogos Pitfall!, Enduro e River Raid mixados com imagens e vídeos
que remetem a Brasília em sua época de construção e primeiros anos da cidade,
os vídeos possuem trilha sonora produzida com samples (amostras) de sons dos
próprios jogos composta com programação algorítmica e live coding.

[Colabore financiando o trabalho de djalgoritmo](#financie-o-trabalho-artístico-de-djalgoritmo).

## Vídeo 1: brasilia-pitfall (remix)

<video width="500" controls>
  <source src="http://download.joenio.me/djalgoritmo/brasilia-pitfall.mp4" type="video/mp4">
  Seu navegador não suporta a tag vídeo.
</video> 

Pitfall! é um jogo eletrônico lançado pela Activision para o Atari 2600
em 1982. É um dos jogos mais vendidos para o Atari 2600, com mais de 4
milhões de cópias vendidas [[1]][1].

As imagens utilizadas no vídeo remix são parte do acervo público nacional e
dizem respeito a momentos da construção de Brasília entre os anos de 1956 a
1960 [[2]][2] [[3]][3] [[4]][4] [[5]][5].

## Vídeo 2: brasilia-enduro (remix)

<video width="500" controls>
  <source src="http://download.joenio.me/djalgoritmo/brasilia-enduro.mp4" type="video/mp4">
  Seu navegador não suporta a tag vídeo.
</video> 

Enduro é um jogo de Videogame produzido pela Activision em 1983 para
o console Atari 2600. Foi um dos últimos sucessos do Atari antes da
crise na indústria eletrônica entre 1983 e 1984 [[6]][6].

Os vídeos utilizados em conjunto com o jogo são registros da prova
de automibilismo "1000 KM DE BRASÍLIA" realizada em 1962 na cidade de
Brasília, considerada uma das provas mais tradicionais do automobilismo
Brasileiro [[7]][7].

## Vídeo 3: brasilia-riverraid (remix)

<video width="500" controls>
  <source src="http://download.joenio.me/djalgoritmo/brasilia-riverraid.mp4" type="video/mp4">
  Seu navegador não suporta a tag vídeo.
</video> 

River Raid é um jogo de Video game para o console Atari 2600, criado por Carol
Shaw, da empresa Activision, em 1982. É considerado um clássico e um dos jogos
mais populares de seu tempo. A versão do jogo para Atari 2600 vendeu um milhão
de cópias, sem contar cópias não autorizadas e cartuchos com vários jogos [[8]][8].

As fotos de Brasília utilizadas na construção deste vídeo retratam locais
característicos da cidade numa visão aérea, entre as décadas de 50 e 60. As
imagens são em sua maioria do Arquivo Público do DF [[9]][9].

## Agradecimentos

Agradeço aos amigos [Prezi][prezi] e [José Flávio][ze] pelo incentivo e pelas ótimas idéias e
sugestões de melhorias nos vídeos; ao amigo [Biophillick][biophillick] pelo espaço e
visibilidade dada a obra em sua galeria [ArquiBrasília][arquibrasilia]; ao
[Calango Hacker Clube][calango] pela ajuda na construção da infraestrutura para
exposição da obra, especialmente os amigos Faísca e Martino.

A todos os desenvolvedores do [sistema operacional Debian][debian] por me
proporcionar um ambiente seguro, estável e politicamente alinhado aos meus
ideais, ao todos os desenvolvedores e colaboradores das ferramentas de
[Software Livre][software-livre] utilizadas na criação dos vídeos e dos sons
que os acompanham:

* [Kdenlive](https://kdenlive.org)
* [TidalCycles](https://tidalcycles.org)
* [SuperCollider](https://supercollider.github.io)
* [Ardour](http://www.ardour.org)
* [Audacity](https://www.audacityteam.org)
* [Vim](https://www.vim.org)
* [Stella](https://stella-emu.github.io)
* [OBS Studio](https://obsproject.com)

Por fim e não menos importante, agradeço a [Atari][atari] e a todas as empresas
e pessoas que desenvolveram jogos para plataforma Atari 2600.

## Desenvolvimento e instalação

Documento aqui detalhes técnicos e decisões de projeto durante a criação e
instalação da obra.

### Reprodução automática dos vídeos em loop

Foi utilizado para reprodução dos vídeos um [Raspberry Pi 3 B+][raspberry] com
o sistema de media center [OSMC][osmc] configurado com um shell script para
play automático dos vídeos em loop. O shell script foi configurado como serviço
através do [systemd][systemd] seguindo o tutorial fornecido na wiki do próprio
OSMC: [Running scripts on startup and shutdown][osmc-wiki].

Arquivo `/home/osmc/.config/systemd/user/play.service`:

```ini
[Unit]
Description=play
After=graphical-session.target

[Service]
Type=forking
PIDFile=/var/run/play.pid
ExecStart=/home/osmc/play.sh

[Install]
WantedBy=multi-user.target
```

O script `/home/osmc/play.sh` executa [funções internas do player
Kodi][kodi-wiki] usando o comando `kodi-send`, [Kodi][kodi] é o software
utilizado no OSMC como player de mídia.

Arquivo `/home/osmc/play.sh`:

```shell
#!/bin/sh
kodi-send --action="PlayMedia(/media/atari2600/, isdir)"
kodi-send --action="PlayerControl(RandomOn)"
kodi-send --action="PlayerControl(RepeatAll)"
```

O serviço via `systemd` deve ser habilitado executando os seguintes comandos no
terminal do OSMC:

```console
systemctl --user daemon-reload
systemctl --user enable play
```

Feito isso os vídeos serão tocados em loop sempre que o Raspberry Pi for
iniciado.

## Instalaçao e equipamentos

### Fotos

<figure>
  <img src="/files/atari-2600-video-remix/distribuidor-rca.jpg" alt="Distribuidor RCA">
  <legend>Distribuidor RCA</legend>
</figure>

<figure>
  <img src="/files/atari-2600-video-remix/hdmi-rca.jpeg" alt="Conversor HDMI-RCA">
  <legend>Conversor HDMI-RCA</legend>
</figure>

<figure>
  <img src="/files/atari-2600-video-remix/pilha-tvs.jpeg" alt="TVs de tubo empilhadas">
  <legend>TVs de tubo empilhadas</legend>
</figure>

<figure>
  <img src="/files/atari-2600-video-remix/pilha-tvs-ligada.jpeg" alt="TVs de tubo ligadas">
  <legend>TVs de tubo ligadas</legend>
</figure>

<figure>
  <img src="/files/atari-2600-video-remix/tv-sony-frente.jpg" alt="TV de tubo Sony">
  <legend>TV de tudo Sony</legend>
</figure>

<figure>
  <img src="/files/atari-2600-video-remix/tv-sony-fundo.jpg" alt="Fundo TV de tubo Sony">
  <legend>Fundo TV de tubo Sony</legend>
</figure>

## Financie o trabalho artístico de djalgoritmo

Contribua no link abaixo através de transferência bancária Nubank do
djalgoritmo (a.k.a. Joenio Marques da Costa):

* [https://nubank.com.br/pagar/7z7a/SOq9YIYhey](https://nubank.com.br/pagar/7z7a/SOq9YIYhey)

[1]: https://pt.wikipedia.org/wiki/Pitfall!
[2]: https://www.archdaily.com.br/br/01-81125/brasilia-em-construcao-por-marcel-gautherot/81125_81127
[3]: https://casavogue.globo.com/MostrasExpos/Fotografia/noticia/2015/10/fotos-ineditas-retratam-construcao-de-brasilia.html
[4]: https://www.msn.com/pt-br/noticias/fotos/fotos-hist%c3%b3ricas-raras-da-constru%c3%a7%c3%a3o-de-bras%c3%adlia/ss-AAw3Stj
[5]: https://ims.com.br/exposicao/as-construcoes-de-brasilia
[6]: https://pt.wikipedia.org/wiki/Enduro_(jogo_eletr%C3%B4nico)
[7]: http://retrovisoronline.blogspot.com/2011/03/historia-dos-1000-km-de-brasilia.html
[8]: https://pt.wikipedia.org/wiki/River_Raid
[9]: https://noticias.uol.com.br/album/100415brasilia50_album.jhtm#fotoNav=20
[arquibrasilia]: https://arquibrasilia.com
[calango]: http://calango.club
[debian]: http://debian.org
[software-livre]: https://www.gnu.org/philosophy/free-sw.pt-br.html
[atari]: https://www.atari.com
[biophillick]: https://biophillick.com
[prezi]: https://www.instagram.com/garotodeprogramanutella
[ze]: https://www.instagram.com/jotaffmaciel
[raspberry]: https://www.raspberrypi.org/products/raspberry-pi-3-model-b-plus
[osmc]: https://osmc.tv
[osmc-wiki]: https://osmc.tv/wiki/general/running-scripts-on-startup-and-shutdown
[kodi-wiki]: https://kodi.wiki/view/List_of_built-in_functions
[kodi]: https://kodi.tv
[systemd]: https://pt.wikipedia.org/wiki/Systemd
