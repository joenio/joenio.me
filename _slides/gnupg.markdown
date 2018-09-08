---
title: Chaves GnuPG
theme: sky
---

<section>

<img style="width: 30%" src="/files/gnupg_twitter_400x400.png" />

Chaves GnuPG
</section>

<section>
GnuPG é uma implementação livre do padrão OpenPGP definido pela [RFC4880](https://tools.ietf.org/html/rfc4880)

[www.gnupg.org](https://www.gnupg.org)
</section>

<section>
OpenPGP é um protocolo não-proprietário para comunicação encriptada por email usando chaves públicas criptográficas.

O protocolo OpenPGP define formatos padrão para mensagens encriptadas, assinaturas e certificados para troca de chaves públicas.

[www.openpgp.org](https://www.openpgp.org)
</section>


<section>
<img src="/files/OpenPGP.png" />

<small>fonte: [http://www.articpost.com/openpgp-key-email-security](http://www.articpost.com/openpgp-key-email-security)</small>
</section>


<section>
GnuPG criptografa mensagens utilizando a criptografia de chaves assimétricas.

Criptografia assimétrica é uma classe de protocolos de criptografia baseados em
algoritmos que requerem duas chaves, uma delas sendo secreta (ou privada) e a
outra delas sendo pública.
</section>

<section>
* Cada usuário gera um par de chaves correspondentes: uma pública e uma secreta.
* A chave pública é distribuída livremente.
* A chave secreta criptografa, descriptografa e assina dados.
</section>

<section>
<img src="/files/GoAnywhereMFT_OpenPGP-Diagram_web.png" />

<small>fonte: [https://www.goanywhere.com/managed-file-transfer/encryption/open-pgp](https://www.goanywhere.com/managed-file-transfer/encryption/open-pgp)</small>
</section>

<section>
## Quero, #comofaz

`apt install gnupg`
</section>

<section>
### Criando chaves

`gpg --gen-key`

* Crie sua chave com [2048 bits](https://wiki.gnupg.org/LargeKeys)
* Cria uma senha (passphrase) com as seguintes características:
  * deve ser longa
  * deve ter caracteres especiais
  * não deve ser um nome conhecido
  * deve ser muito difícil de adivinhar
* [Não inclua "Comment" em seu User ID](https://riseup.net/en/security/message-security/openpgp/best-practices)
</section>

<section>
### Exportando chaves

`gpg -a --export [ID] > [FILENAME]`

### Importando chaves

`gpg --import [FILENAME]`
</section>

<section>
### Servidores de chaves

Os grandes servidores sincronizam chaves entre si,
exemplos de servidores:

* [http://pgp.mit.edu](http://pgp.mit.edu)
* [http://pgp.surfnet.nl](http://pgp.surfnet.nl)
* [http://pgp.uni-mainz.de](http://pgp.uni-mainz.de)
</section>

<section>
### Publicando chave pública

`gpg --send-keys [ID]`
</section>


<section>
### Importando chaves

`gpg --recv-keys [ID]`

`gpg --search-keys [NAME]`
</section>

<section>
<img src="/files/weboftrust.png" />

<small>
fonte:
[https://cran.r-project.org/web/packages/gpg/vignettes/intro.html](https://cran.r-project.org/web/packages/gpg/vignettes/intro.html)
<br/>
slides sobre **web of trust**: [http://slides.com/mricon/pgp-web-of-trust](http://slides.com/mricon/pgp-web-of-trust)
</small>
</section>

<section>
_You should only sign a key as being authentic when you are ABSOLUTELY SURE that the key is really authentic!!!. So if you are positive you got the key yourself (like on a key signing party) or you got the key through other means and checked it (for instance by phone) using the fingerprint-mechanism. You should never sign a key based on any assumption._

<small>fonte: [https://www.dewinter.com/gnupg_howto/english/GPGMiniHowto-3.html](https://www.dewinter.com/gnupg_howto/english/GPGMiniHowto-3.html)</small>
</section>

<section>
### Assinando chaves

Após importar uma chave para o chaveiro local é possível
determinar o grau de confiabilidade que temos no dono dela.

`gpg --edit-key [ID]`
</section>


<section>
#### Exemplo
Você pode dizer que confia plenamente nas chaves que <b style="color:red">Ana</b> assina.
Assim, quando você receber a chave de <b style="color:green">Beto</b>,
que foi assinada por <b style="color:red">Ana</b>,
terá motivos para confiar nessa chave, mesmo não conhecendo <b style="color:green">Beto</b>.

<small>
fonte:
[http://eriberto.pro.br/wiki/index.php?title=Usando_o_GnuPG](http://eriberto.pro.br/wiki/index.php?title=Usando_o_GnuPG)
</small>
</section>

<section>
#### Níveis de confiabilidade

* <small>**Unknown**: Não se sabe como a pessoa em questão procede ao assinar uma chave. Não se deve confiar nas assinaturas dessa pessoa em chaves alheias.</small>

* <small>**None**: Esta pessoa costuma assinar chaves sem certificar-se de que elas realmente são da pessoa que diz possuí-las. Não se deve confiar nas assinaturas dessa pessoa em chaves alheias.</small>

* <small>**Marginal**: Esta pessoa assina chaves de forma correta (faz as verificações físicas necessárias). É possível confiar nessa pessoa, caso seja extremamente necessário.</small>

* <small>**Full**: O usuário conhece muito bem sistemas criptográficos, é extremamente confiável e responsável. É possível pensar em aceitar algo de outras chaves que tenham sido assinadas por essa pessoa.</small>
</section>

<section>
### mão na massa

Demonstração prática usando `gnupg` via linha de comando

#### rtfm (leia o manual)

`man gpg`
</section>

<section>
**gnupg.vim**: Plugin for transparent editing of gpg encrypted files

<small>_arquivos com extensão ".gpg", ".pgp" ou ".asc" serão automaticamente reconhecidos_</small>

<small>
fonte:
[https://www.vim.org/scripts/script.php?script_id=3645](https://www.vim.org/scripts/script.php?script_id=3645)
</small>

#### Instalação

1. `sudo apt install vim-scripts`
1. `sudo apt install vim-addon-manager`
1. `vim-addons install gnupg`
</section>

<section>
## Festa
<img style="width: 60%; box-shadow: 0 0 15px black" src="https://i.imgur.com/YGpRUrY.gif" />

**key signing party**
</section>

<section>
Antes da festa de assinatura de chaves:

1. Criar um par de chaves e publicar a chave pública
1. Documento com nome e foto, idealmente documento oficial
1. Impressão com nome completo, email e fingerprint, ou cartão de visita

<small>
The Keysigning Party HOWTO: 
[http://www.cryptnet.net/fdp/crypto/keysigning_party/en/keysigning_party.html](http://www.cryptnet.net/fdp/crypto/keysigning_party/en/keysigning_party.html)
</small>
</section>

<section>
Durante a festa de assinatura de chaves:

* Verificar as informações pessoais, nome, documentos, fingerprint, etc
* Garantir que a pessoa é realmente dona da chave

<small>os servidores de chaves sabem lidar com varios envios da mesma chave somando as assinaturas</small>
</section>

<section>
Após a festa de assinatura de chaves:

* De posse da impressão contendo nome, email e fingerprint importar a chave
* Assinar a chave pública
* Enviar a chave pública assinada de cada pessoa para o servidor de chaves
</section>

<section>
Palestra: <br/>
Criptografia e assinatura digital com GnuPG

<iframe width="560" height="315" src="https://www.youtube.com/embed/JYJRbyH0YI8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<small>
Boa referência sobre
criptografia simétrica,
criptografia assimétrica,
assinatura digital,
autoridade certificadora e
exemplos práticos com o GnuPG.
</small>

[https://www.youtube.com/watch?v=JYJRbyH0YI8](https://www.youtube.com/watch?v=JYJRbyH0YI8)
</section>

<section>
Palestra: <br/>
Assinatura de chaves na MiniDebConf

<iframe width="560" height="315" src="https://www.youtube.com/embed/d4Zkg3o4jj0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<small>
Exemplo de festa de assinatura de chaves realizada pela comunidade Debian na MiniDebConf Curitiba 2018.
</small>

[https://www.youtube.com/watch?v=d4Zkg3o4jj0](https://www.youtube.com/watch?v=d4Zkg3o4jj0)
</section>

<section data-background="#c4a000">
<section>
{% include slides_obrigado.html %}
</section>
<section>
### Histórico de apresentações

<small>Onde e quando esta apresentação foi realizada</small>

<ul style="font-size: 24px">
  <li>23 Julho 2018, UnG Gama - FGA, MiniLappisConf</li>
</ul>
</section>
</section>
