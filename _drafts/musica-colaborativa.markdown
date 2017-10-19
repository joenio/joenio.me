## processamento de audio

jack-tools
* jack-plumbing - define conexoes entre entradas/saidas do jack via configuracao modo texto

* jack-play - play em audios diretamente pro jack
jack-play -u freak-vagabundo.wav

infra basica: jack - conecta saida de um em entrada de outro, etc
interface para o jack: qjackctl ou gladish (este ultimo faz outras coisas interessantes)
gravacao e edicao (remove ruidos): audacity
amplificador e efeitos: rakarrack ou guitarrix (este ultimo n funcionou p mim)
edicao e gravacao profissional de audio: ardour
gravacao e edicao wave: audacity
máquina de bateria / sequenciador: hydrogen
afinador: lingot
qtractor: Aplicação sequenciadora de MIDI/Áudio de multi-pistas

#### afinador

lingot (configurar para usar saida jack)

#### efeitos e volume (ganho)

rakarrack

para melhorar o volume (sem ele fica mto baixo) e para efeitos

Alguns efeitos legais do rakarrack

Preset: Go with Him
Efeito psicodelico (sujo)

Preset: All is Lost
Psicodelico (

Preset: Metal Tone
Efeito bom para melhorar o volume, n altera mto o som

Preset: Joe
Volume bom

Circle Tremolo

Clean Chord
Som limpo, volume bom

Igniner
Som alto, bom timbre

Phsetron
Som estranho, legal

Para remover ruido do rakarack basta colocar os microfones no mute, tanto
o interno quando o externo.

o guitarix eh mais atualizado que o rakarack que tem ultimo release
de 2010, sendo que o guitarix tem atualizacao de 2013. o guitarix funciona
com jack e com os microfone interno off e o microfone on no volume minimo sem
amplificacao nativa do sistema operacional. eh preciso tb confgurar as
conexoes do jack usando qjackclt manualmente conctando:

   system: capture_1 e _2 em gx_head_amp: in_0
   gc_head_amp: out_0 em system: playback_1 e _2

<!-- _a -->

<img src="files/qjackctl-conexoes.png" />


Para gravar com a distorcao do guitarrix n ardour (ardou eh mais
maduro e poderoso que audacity), desmarcar as opcoes de conexao automatica
dos input em Options -> Autoconnect -> (desmarcar Auto-connect inputs
to physical inputs e marcar opcao Manually connect inputs)
Se nao for feito isto o ardour desfaz as conexoes feitas no jack e faz outras.
Marcar tambem "manuaaly connect outputs"


Para poder ouvir mp3 enquanto se utiliza o jack usar alsaplayer-jack:q


M-AUDIO FAST TRACK NO DEBIAN
============================

Versao do Debian: testing

Precisa do pacote "midisport-firmware" que baixa o firmware necessário.


LER COM MAIS CALMA:
http://www.vivaolinux.com.br/artigo/Jack-Rosegarden-midi-e-audio-no-Debian-Ubuntu?pagina=5
https://en.wikipedia.org/wiki/Rosegarden
http://qsynth.sourceforge.net/qsynth-index.html
http://www.fluidsynth.org/

## musica colaborativa

sites de colaboracao de musicos, avaliar, testar e escrever post sobre
isto para divulgar os sites:

http://musistic.com
http://www.kompoz.com/music/listen/releases
http://bandhub.us/band/53b73c2bb9e2088d1c000596
https://www.composrapp.com/
http://www.mixbadger.com/

http://ccmixter.org/ <- livre

mais em:
http://www.masternewmedia.org/online-music-collaboration-best-tools-and/

achei intimamente ligado a uma palestra que vi no TEDx de um maestro que
fez um projeto regendo e lancou na internet para outras pessoas gravarem

http://www.ted.com/talks/eric_whitacre_a_virtual_choir_2_000_voices_strong

Ele criou um projeto e continuou fazendo novos coros
http://ericwhitacre.com/the-virtual-choir

Recebi uma mensagem de um usuario do bandhub em um video da Los benzenos

TydalCycles
===========

pacotes debian:
* haskell-platform
* sc3-plugins

$ cabal update
$ cabal install tidal
