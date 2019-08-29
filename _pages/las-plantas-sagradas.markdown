---
title: Las Plantas Sagradas Y La Rosa Negra - Composiciones Para Oferendas (Collaborative Fusion Orchestra)
---

Compilação colaborativa coordenada e organizada por [INGRID][] lançada no
Bandcamp em 25 Outubro 2019, disponível também no Soundcloud, links abaixo.

* [https://soundcloud.com/ingr_d/sets/las-plantas-sagradas-y-la-rosa](https://soundcloud.com/ingr_d/sets/las-plantas-sagradas-y-la-rosa)

Neste álbum colaborei com uma canção usando TidalCycles -- `[djalgoritmo]
Composición para oferenda n.25 (feat INGRID)` -- totalmente composta com 1 único
sample da voz da INGRID, o mesmo sample disponibilizado para todos os artistas
usarem como base em suas criações nesta compilação.

<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/628206879&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

### Código-fonte TidalCycles de "Composición para oferenda n.25 (feat INGRID)"

```haskell
setcps (90/60/2)

-- musica, parte 1

do
  xfadeIn "owoh" 16
    $ sometimes (# attack (choose [0.05, 0.1, 0.15]))
    $ slow 3
    $ slowcat [
      n "3 3 3 3 3 3 3 3" # speed 0.5 # gain 1.8 # vowel "i",
      stack [
        n "[3 3 3 3 ~ ~ ~ ~]" # speed 0.4 # gain 1.8 # vowel "u",
        n "[~ ~ ~ ~ 3 3 3 3]" # speed 0.6 # gain 1.9 # vowel "o"
      ]
    ]
    # s "ingrid"
    # begin 0.1
    # end 0.3
    # release 0.2
    # lpf "400 800 1000"
    # orbit 0 # leslie 0 # room 0 # size 0 -- garante que o orbit 0 esta sem efeitos
    |+ gain 0.2
  xfade "bat"
    $ fast 2
    $ n "<6 6 6 6 6 6 6 7 7 7 7 8 8 8 8 8 10 10 10 10 8 8 6 6 6 7 8 6 7 7>"
    # s "ingrid"
    # begin 0.05
    # end 0.15
    # attack 0.1
    # release 0.2
    # lpf 800
    # vowel "i"
    # pan "<0 1>"
    # gain 1.5
  xfade "bum_bum"
    $ slow 3
    $ slowcat [
      n "0.1 0.2 0.1",
      n "0.2 0.1 0.2"
    ]
    # s "super808"
    # attack 0.4
    # release 0.8
    # gain 1.4

-- parte 1, vozes entram após alguns segundos

do
  xfade "vozes"
    $ sometimesBy 0.2 (# vowel "a")
    $ slow 2
    $ stut 4 0.2 0.2
    $ sometimes (chop 4)
    $ s "ingrid:0"
    # begin "<0.20 0.20 0.20 0.20 0.19 0.18 0.20 0.20 0.20 0.20 0.19 0.18>"
    # end "<0.21 0.22 0.21 0.24 0.24 0.22 0.22 0.21 0.23 0.23 0.24 0.24>"
    # gain (1 + sine)
    # attack 0.2
    # release 2

-- musica, parte 2

do
  xfadeIn "navios" 16
    $ slow 8
    $ sometimesBy 0.2 (# end 0.82)
    $ sometimesBy 0.3 (# begin 0.78)
    $ off 0.75 (# vowel (choose ["i", "a", "o"]))
    $ s "ingrid"
    # begin 0.800
    # end 0.805
    # gain 1
    # speed 0.2
    # lpf "800 1600 4000 8000"
  p "efeitos"
    $ stut 8 0.2 0.2
    $ every 2 (# gain 0)
    $ sometimes (|-| gain 1.3)
    $ sometimesBy 0.8 (# cut 1)
    $ s "ingrid"
    # begin 0.421
    # end 0.429
    # gain (0.5 + sine)
    # leslie 1
    # lsize 4
    # lrate 4
    # orbit 1
    # attack 2
  xfadeIn "owoh" 16 $ silence
  xfadeIn "owoh_2" 8
    $ sometimes (# attack (choose [0.05, 0.1, 0.15]))
    $ slow 3
    $ slowcat [
      n "1*8" # speed 0.5 # gain 1.8 # vowel "i",
      stack [
        n "[1 1 1 1 ~ ~ ~ ~]" # speed 0.4 # gain 1.8 # vowel "u",
        n "[~ ~ ~ ~ 1 1 1 1]" # speed 0.6 # gain 1.9 # vowel "o"
      ]
    ]
    # s "ingrid"
    # begin 0.1
    # end 0.3
    # release 0.2
    |- gain 0.2
    # lpf "400 800 1000"

-- aguardar efeitos (voz ingrid owwww)

-- musica, parte 3, aguardar xfade sons navios, 60s

do
  xfadeIn "owoh_2" 32 $ silence
  p "owoh"
    $ sometimes (# attack (choose [0.05, 0.1, 0.15]))
    $ slow 3
    $ slowcat [
      n "3 3 3 3 3 3 3 3" # speed 0.5 # gain 1.8 # vowel "i",
      stack [
        n "[3 3 3 3 ~ ~ ~ ~]" # speed 0.4 # gain 1.8 # vowel "u",
        n "[~ ~ ~ ~ 3 3 3 3]" # speed 0.6 # gain 1.9 # vowel "o"
      ]
    ]
    # s "ingrid"
    # begin 0.1
    # end 0.3
    # release 0.2
    # lpf "400 800 1000"
    |+ gain 0.2
  xfade "fragmentos"
    $ slow 1.5
    $ sometimesBy 0.7 (|+| gain 0.9)
    $ sometimesBy 0.3 (|-| gain 0.7)
    $ sometimesBy 0.1 (chop 4)
    $ s "ingrid:4*9"
    # gain (saw - 0.7)
    # speed (choose [1, 1.1, 1.2, 0.9, 0.8, 1, 1])
    # cut 2
  xfade "bat" $ silence

-- tocar rodopio algumas vezes (2 talvez)

do
  p "rodopio"
    $ s "ingrid:0"
    # begin 0.421
    # end 0.429
    # gain 0.4
    # cut 1
    # leslie 2
    # lsize 6
    # lrate 6
    # orbit 1
  xfadeIn "rodopio" 8 $ silence

-- musica, parte 4, chocalho, amp bum_bum (tocar no minuto 5 ou +)

do
  xfadeIn "melodia" 4
    $ sometimes (|+| gain 0.7)
    $ slow 2
    $ stut 2 0.2 0.2
    $ degrade
    $ every 2 (chop 2)
    $ slowcat [
      n "[2 2 2 2?]",
      n "[8 8 8? 8]",
      n "[3 3? 3 3]"
    ]
    # s "ingrid"
    # begin "<0.2 0.3 0.4>"
    # end "<0.3 0.4 0.5>"
    # speed (choose [0.9, 1, 1.1])
    # gain 1.5
  xfade "navios" $ silence
  xfade "fragmentos" $ silence
  xfade "efeitos" $ silence
  xfadeIn "vozes" 16 $ silence
  xfadeIn "chocalho" 8
    $ fast 4
    $ s "hh:8*2"
    # gain 2.8
    # begin (choose [0.10, 0.15, 0.18])
    # end (choose [0.28, 0.3, 0.31])
    # speed 4
  xfadeIn "bum_bum" 4
    $ slow 3
    $ slowcat [
      n "0.1 0.2 0.1",
      n "0.2 0.1 0.2"
    ]
    # s "super808"
    # attack 0.4
    # release 0.8
    # gain 1.4
  xfade "larosa"
    $ sometimesBy 0.2 (stut 8 0.3 0.2)
    $ sometimes (|-| gain 1)
    $ every 5 (rev)
    $ every 3 (# speed "<1.2 1.4 1.6>")
    $ sometimes (striate 4)
    $ s "<ingrid:4 ingrid:5 ingrid:9>"
    # gain (0.8 + sine)
  xfadeIn "cordas" 32
    $ every 2 (|-| gain 0.6)
    $ slowcat [
      n "2*6" # attack 0.05,
      n "2*2" # attack 0.05,
      n "3*6" # attack 0.05,
      n "3*2" # attack 0.05,
      every 3 (# attack 0.1) $ n "2*6",
      every 2 (# attack 0.1) $ n "2*2",
      every 4 (# attack 0.1) $ n "3*6",
      every 5 (# attack 0.1) $ n "3*2",
      gap 2 $ chop 3 $ n "2*3" # pan "<0 1>",
      gap 2 $ chop 3 $ n "3*3" # pan "<1 0>"
    ]
    # s "ingrid"
    # begin 0.7
    # end 0.75
    # up (choose [-4, -3, -2, -1])
    # gain 0.75
    # release 0.3
    # vowel "u i"

-- musica, parte 4, final, parada, solo, unsolo

p "vozes_echo"
  $ slow 3
  $ sometimes (0.2 ~>)
  $ every 5 (0.5 <~)
  $ s (shuffle 2 "ingrid:2 ingrid:3 ingrid:6")
  # orbit 1
  # room 2
  # size 0.2
  # gain 0.6

p "vozes_echo" $ silence

p "vozes_echo" $ s "hh" # gain 0 # room 0 # size 0

do
  solo "owoh"
  solo "chocalho"
  solo "cordas"
  solo "vozes_echo"

do
  unsolo "owoh"
  unsolo "chocalho"
  unsolo "cordas"
  unsolo "vozes_echo"

do
  xfadeIn "chocalho" 8 $ silence
  xfadeIn "bum_bum" 8 $ silence
  xfadeIn "owoh" 8 $ silence
  xfadeIn "vozes" 8 $ silence
  xfadeIn "larosa" 8 $ silence
  xfadeIn "melodia" 8 $ silence
  xfadeIn "cordas" 8 $ silence
  xfade "vozes_echo" $ silence
```

[INGRID]: https://soundcloud.com/ingr_d
