---
title: Electronic Experimental Music with Debian
lead: >
  In this talk will be presented software projects for musical creation,
  including software synthesizers, DAW, sound desks, mixer for DJ, drum
  machine, MIDI tools, Jack, audio editing, languages and programming
  environments for live coding, among others. All the free software projects
  presented are available in Debian and can be easily installed with a simple
  apt install. The talk is aimed to whom is curious about tools for sound and
  music in Debian, covering only it’s basic features, focusing mainly on how to
  install and how to use these features. This talks is a tour around sound and
  music tools available on Debian. At the end of the talk will be reserved
  some time for a live coding performance using TidalCycles.
theme: serif
---

<section data-background="/files/ardour-screenshot.png">
  <h2 class="box-green" style="text-shadow: 0px 0px 15px green; color: white">Electronic Experimental Music with Debian</h2>
</section>

<section>
<!-- música eletrônica é toda música criada por equipamentos e instrumentos eletrônicos -->
electronic music is music made by electronic equipments

<!-- desenvolve-se especialmente após a música concreta com Pierre Schaeffer na França -->
electronic music is a results of the concrete music started by Pierre Schaeffer on France

<!-- a música concreta inaugura uma forma de produção com sons gravados, fragmentos, edições -->
concrete music starts a new form of music creation by sounds recorded

  <aside class="notes">
    in detriment to electronic music we
     have the acoustic music made with
     acoustic instruments
    schaeffer did research and experiments
     with sound recording and editing
    concrete music is a kind of electronic
     music based on recorded sounds
  </aside>
</section>

<section>
<!-- o conceito de música eletrônica evolui associada a música pop se distanciando da música concreta -->
the electronic music concept evolved apart from the experiments (eg. concrete music) and was captured by the pop music as we know today

<!-- em algum momento cria-se o conceito de música eletroacústica para designar e reconectar .... -->
at some point researchers, musicians and experimentalists on electronic music adopted the term electroacoust music

  <aside class="notes">
    today eletronic music is sinonym of
     pop eletronic music but in the past
     eletronic music was a kind of
     experimental music
    electroacoustic music is a umbrella
     concept including many movements,
     mainly from France and German
  </aside>
</section>

<section>
<!-- então nesta palestra eu estou falando sempre da perspectiva de um músico eletroacústico, explorando especialmente o software para pesquisas e experimentações com sons -->
here at this talk I was speaking from the perspective of an experimentalist on electroacoustic music, focusing on the software tools and the potential of Debian and free software in general
</section>

<section>
<!-- dou início com duas definições básicas que dão praticamente o base de tudo que tenho pesquisado e experimentado nesta área -->
before start, I want to define some important concepts

  <aside class="notes">
    this are fundamental concepts to
     understand where this tools are
     in, among so many options we have
     nowadays
  </aside>
</section>

<section>
<!-- conceito 1: samples e conceito 2: sintetizadores, ambos criações das pesquisa do campo da eletroacústica -->
## Sample

--

## Synthesizer

--

<audio src="/files/everything.wav" controls>
  <a href="/files/everything.wav">everything.wav</a>
</audio>
<audio src="/files/pitfall-ouro.wav" controls>
  <a href="/files/pitfall-ouro.wav">pitfall-ouro.wav</a>
</audio>
<audio src="/files/water-to-glass.wav" controls>
  <a href="/files/water-to-glass.wav">water-to-glass.wav</a>
</audio>

<!-- samples: são gravaçoes, arquivos de áudio (colocar exemplos de dois ou três sons no slide e dar play na apresentação) -->
  <aside class="notes">
    samples are used nowadays in almost
     kind of pop music, hip hop is a
     key exemple

    ! play samples
  </aside>
</section>

<section data-background="/files/buchla_100_NYU.jpg">
<!-- sintetizadores: são equipamentos (ou software) capazes de gerar sons artificialmente (embutir algum synth no navegador e dar play para testar / ou usar algum synth no desktop - talvez seja melhor local no desktop) -->
<div class="box-gray">
<h3 style="color: white">synthesizers are instruments able to generate all kind of sound</h3>
</div>

  <aside class="notes">
    sinthesizer is able to generate
     sounds like "traditional" instruments
     like electronic guitar, bass, pianos,
     flautes, etc
    or concrete sounds as cow sound, cat,
     dog, cars, engines, human voices, etc
  </aside>
</section>

<section>
<!-- os sintetizadores estão intimanente relacionados ao surgimento e evolução dos osciladores -->
synthesizers are strong related with the oscilators evolution

<!-- osciladores são componentes eletrônicos capazes de gerar sinais eletrônicos periódicos, possuem diversas aplicações, como gerar sinais de rádio por exemplo -->
<img src="/files/integrierter-quarzoszillator.jpg" /><img src="/files/waveforms.svg" width="36%"/>

  <aside  class="notes">
    oscilators are electronic pieces
     able to generate electronic signals
     periodically and can be applied in
     a variaty of situations, like
     generate clock for computers, radio
     signals, and so on
  </aside>
</section>

<section data-background="/files/yamaha-dx7.jpg">
<!-- além do oscilador, outros componentes básicos fazem parte de praticamente qualquer sintetizador: amplificador, filtro, envelope e LFO -->
<div class="box-gray">
  <h4 style="color: white">Amplifier <br/>-- <br/>Filter <br/>-- <br/>Envelope <br/>-- <br/>LFO</h4>
</div>

  <aside class="notes">
    but synthesizers are composed not
     only by oscilators, almost any
     synth is constructed usind some
     combination of aplifiers, filters,
     envelopes and oscilators
  </aside>
</section>

<section>
## first analog synthesizers

<!-- os primeiros sintetizadores originalmente surgiram os sintetizadores analógicos, surgiram em paralelo: -->

<img src="/files/buchla-100_NYU.jpg" width="45%" /> <img src="/files/moog-synthesizer_1964_NY.jpg" width="45%" />

Buchla 100 (1965) and Moog Synthesizer (1964)

<!--
(1) Buchla & Associates, Berkeley, California em 1965 criou o "Buchla 100 series Modular Electronic Music System"
    Em 1967 Morton Subotnick compôs o álbum "Silver Apples Of The Moon" inteiramente composto no Buchla 100

(2) Robert Moog, Cornell, NY em 1964 vendeu seu primeiro protótipo "Moog synthesizer"
    Em 1968 Wendy Carlos lança o álbum "Switched-On Bach" com músicas Johann Sebastian Bach tocadas por ele num Moog
-->
  <aside class="notes">
    the first synthesizers were the analog
     ones, and the two key inventions this
     time was Buhcla 100 and Moog Synthesizer
     from 1965 and 1964 respenclty, research
     and experiments before the release of
     these two models started in paralell
  </aside>
</section>

<section>
<!-- a partir da disseminação destes sintetizadores surgiram uma infinidade de produtos, chegando aos sintetizadors em software, ou softsynth -->
since these first analog synthesizers many others products were created, including:

## softsynth

<!-- dada esta introdução apresento alguns sintetizadores (softsynth) existentes no debian e ferramentas relacionadas a manipulação sonora e musical, gravação, edição e outras ferramentas -->

  <aside class="notes">
    softsynths are synthesizers implemented
     in software form, they have the same
     principles of any other synth and we
     have so many options in Debian
    but before start to see some softsynths
     is necessary to know a little about
     jack
  </aside>
</section>

<section>
<!-- antes é necessário apresentar o Jack pois a maioria das ferramentas dependem dele. -->
<img src="/files/jack-logo.png" width="80%" />

JACK (JACK Audio Connection Kit) provides a basic infrastructure for audio applications to communicate with each other and with audio hardware

<!-- eu penso no JACK como os pipes do unix mas para áudio -->

  <aside class="notes">
    jack is like the unix pipes applied to
     audio sources
    jack also supports midi communication,
     then is possible to connect software
     os even hardware using jack
  </aside>
</section>

<!--
apresentar dois softsynths:
amsynth
setBfree
-->

<section data-background="/files/screenshots/amsynth.png">
<div class="box-green" style="color: white">
<h1 style="text-shadow: 0px 0px 15px red; color: white">amsynth</h1>

software synthesizers with dual oscilators

[http://amsynth.github.io](http://amsynth.github.io)
</div>

  <aside class="notes">
    amsynth is an easy-to-use software
     synth with a classic subtractive
     synthesizer topology

    ! run amsynth and do some noise
  </aside>
</section>

<section data-background="/files/setbfree.png">
<div class="box-green" style="color: white">
<h1 style="text-shadow: 0px 0px 15px red; color: white">setBfree</h1>

tonewheel organ

[http://setbfree.org](http://setbfree.org)
</div>

  <aside class="notes">
    tonewheel is a kind of electromechanical
     organ like Hammond Organ created in
     1935 by Laurens Hammond

    ! run setbfree and make noise
  </aside>
</section>

<section data-background="/files/screenshots/padthv1.png">
<div class="box-green" style="color: white">
<h1 style="text-shadow: 0px 0px 15px red; color: white">padthv1</h1>

old-school polyphonic additive synthesizer

[https://padthv1.sourceforge.io](https://padthv1.sourceforge.io)
</div>

  <aside class="notes">
    polyphonic synth is able to play
     multiple notes at once, monophonic
     synth can play one single note at time
    additive synths operate by the combination
     of multiple wave types at different
     frequencies, is how filter operates
    ! run qjackctl and padthv1
  </aside>
</section>


<section data-background="/files/screenshots/drumkv1.png">
<div class="box-green" style="color: white">
<h1 style="text-shadow: 0px 0px 15px red; color: white">drumkv1</h1>

old-school drum-kit sampler

[https://drumkv1.sourceforge.io](https://drumkv1.sourceforge.io)
</div>

<!-- apresentar o drumkv1 e falar dele como um mix entre o uso de samples + sintetizador -->

  <aside class="notes">
    drumkv1 is a mixing samples and
     synthesizer, it is possible to load
     a set of files, apply filters,
     effects, then controls using midi
    ! run drumkv1 and qjackctl
    (dont forget configure jack audio
    output)
  </aside>
</section>

<section>
<!-- muitos softsynths livres estão disponívels no debian, alguns exemplos: -->
there is so many softsynths packaged into Debian

* samplv1
* synthv1
* fluidsynth
* yoshimi
* zynaddsubfx
* horgand

a good source for free libre softsynth is [https://wiki.linuxaudio.org](https://wiki.linuxaudio.org)
</section>

<section data-background="/files/hydrogen.png">
<div class="box-green">
<h3 style="color: white">Hydrogen</h3>
<!-- http://bestanimations.com/Music/Instruments/Percussion/Drums/drums-animated-gif-12.gif -->

<img src="/files/drums-animated-gif-12.gif" />

<!-- além dos synths ferramentas interessantes são máquinas de bateria como o Hydrogen -->

[http://hydrogen-music.org](http://hydrogen-music.org)
</div>

  <aside class="notes">
    ! run hydrogen and open some
     sample file
  </aside>
</section>

<section>

<!-- é possível ainda integrar com instrumentos "tradicionais" e substituir os tradicionais pedais e pedaleiras por efeitos em software, como no caso do Guitarrix e Rakarrack -->
# Effects

  <aside class="notes">
    rakarrack is a richly featured
     multi-effects processor emulating
     a guitar effects pedalboard
    guitarix is a virtual guitar amplifier
     for Linux running on jack
    both are quite similar
  </aside>

* Rakarrack: [http://rakarrack.sourceforge.net](http://rakarrack.sourceforge.net)
* Guitarrix: [http://guitarix.org](http://guitarix.org)
</section>

<section>
# LMMS

LMMS is a sound generation system, synthesizer, beat/baseline editor and MIDI
control system which can power an entire home studio

[http://lmms.io](http://lmms.io)
<!-- mostrar o lmms e abrir um exemplo /usr/share/lmms/projects/Demos/Thomasso-AxeFromThe80s.mmpz -->

<!-- com o LMMS é possível compor músicas usando sequenciadores, sintetizadores, samples, controladores MIDI e uma infinidade de outros recursos integrados num único ambiente -->

  <aside class="notes">
    lmms is a kind of integrated
     environment to work with synths,
     sequencers, samples, midis and
     so on...
    ! run lmms and open sample file
  </aside>
</section>

<section>
# LADSPA

### Linux Audio Developers Simple Plugin

<!-- ambos, softsynth, amplificaadores, processador de efeitos, quando instalados no Debian se tornam disponíveis como plugins LADSPA -->

<!-- assim é possível intercambiar efeitos, aplificadores e sintetizadores entre diversos ambientes distintos, é possível utilizar os efeitos do Guitarrix dentro do LMMS por exemplo -->
[https://www.ladspa.org](https://www.ladspa.org)

  <aside class="notes">
    almost tools when installed
     are available on Debian system
     as LADSPA plugin, that way is
     possible to interchange among
     tools and environments
  </aside>
</section>

<section>
# Ardour

for instance is possible to load Amsynth on Ardour using that LADSPA plugin feature

<!-- ou mesmo aplicar efeitos durante uma gravação utilizando o DAW Ardour por exmeplo -->
[https://www.ardour.org](https://www.ardour.org)

<!-- DAW: Digital Audio Workstation (ou, de forma abreviada, DAW) — em português: "estação de trabalho de áudio digital" — é um sequenciador que tem a finalidade de gravar, editar e tocar áudio digital. -->

  <aside class="notes">
    ardour is a DAW (Digital Audio
     Workstation) and environment to
     record, edit or play live integrating
     many tools (as plugins)
    ! run ardour and load some plugin
     (Category -> Spatial -> setBfree)
  </aside>
</section>

<section>
<!-- dessa forma, com a capacidade de comunicação provida pelo jack, com o intercambio dos plugins LADSPA (e outros), é possível tratar o desktop Debian como um ambiente "integrado" para produção sonora e musical, substituindo (em alguma medida) os tradicionais e dominantes produtos proprietários, como Ableton, FL Studio, Bitwig e outros. -->
LADSPA + Jack + <br/> lots of synths, effects and tools makes

# Debian
## a very flexible integrated audio environment

<!-- mas se você gosta de desenvolvimento, programaçao, código, algoritmos, então a melgor forma de integrar tudo isto é através de live coding -->
</section>

<!--
mas antes de mostrar live coding irei utilizar o edição digital de áudio Audacity para transformar um sample a ser utilizado no live coding

* Audacity
* sox (linha de comando)
-->

<section data-background="/files/9sbYZGea-210x110.png" style="color:white">
<h1 style="color:white">Live Coding</h1>

a new direction in electronic music and video: live coders expose and rewire
the innards of software while it generates improvised music and/or visuals

  <aside class="notes">
    but if you like to write code
     maybe you will have fun doing
     live coding
  </aside>
</section>

<section>
## Live Coding languages

* SuperCollider
* Sonic Pi (Ruby based)
* TidalCycles (Haskell based)
* FoxDot (Python based)
* ChucK
* Gibber (JavaScript based)
* see [https://github.com/toplap/awesome-livecoding](https://github.com/toplap/awesome-livecoding)
</section>

<section data-background="black">
<!-- (neste ponto da palestra faço uma pequena performance com TidalCycles de 10 minutos no máximo + projectM?) -->

<!-- (usar o free software song editado pelo Audacity como sample) -->
<img src="/files/tidalcycles-id-mono.png" />
</section>

<section>
<!-- para quem interesse em participar de eventos de live coding deve procurar a Algorave na sua cidade -->

## [http://algorave.com](http://algorave.com)

  <aside class="notes">
    if you have interest on see live
     codinf performances look for algorave
     on your city at algorave.com
  </aside>
</section>

<section>
thank you!

questions?

slides available at http://joenio.me/electronic-music-with-debian
</section>

<!--

<section>
caso você seja DJ e queira usar o Debian em suas performances pode ainda utilizar o Mixxx

* Mixxx

ou o ???? (nome do projeto Sam Hartman DPL)
</section>

<section>
a música acústica e a música eletrônica dão origem a música eletro-acústica, ganha força no século XX

música concreta (Pierre Schaeffer, França) trabalha com gravações e transformações, samples, loops em fitas magnéticas

música eletrônica (Herbert Eimert, Studio for Electronic Music, Alemanha)

os sons produzidos analogicamente (acustica)
com a evolução da tecnologia tornou-se possível produzir sons artificialmente (sintetizador)
osciladores são a base dos sintetizadores

sons gravados podem ser usados como raiz, música concreta, música eletrônica (usar anotações do meu caderno)
</section>

<section>
* Calf
* sooperlooper
* lingot
* din
* espeak
* festival
* csound
* faust
* puredata
* vkeybd
</section>

-->
