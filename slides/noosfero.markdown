---
title: Noosfero
---

<section>
# Noosfero

<img src="files/noosfero.png" style="background:none;border:0;box-shadow:none" />

"Uma plataforma web livre para redes sociais e de economia solidária"
</section>

<section>
## O Noosfero é

* Livre (Afero GPL)
* Escrito em Ruby On Rails 3
* Migrando para o Rails 4
* Expansível (plugins)
* Customizável (temas, blocos, etc)
</section>

<section>
## O desenvolvimento ocorre em torno do gitlab

http://gitlab.com/noosfero/noosfero

* Issues
* Milestones
* Merge Requests

A metologia de desenvolvimento das equipes baseia-se em métodos ágeis e TDD
</section>

<section>
## A comunicação 

### Bate-papo via IRC na rede Freenode

* \#noosfero
* \#noosfero-br

### Listas de discussão

* noosfero-dev@listas.softwarelivre.org 
* noosfero-br@listas.softwarelivre.org
</section>

<section>
# Versões

#### Versões de funcionalidades novas

### 1.XX.0

#### Versões de manutenção

### 1.XX.(1-9)

#### Versão atual

### 1.2.0
</section>

<section data-background="#ffffff">
<img src="files/noosfero-development-cycle.svg" />
</section>

<section>
<table><tr>
<td style="vertical-align: top">

<h2>Manutenção e desenvolvimento</h2>

Dois branches:

<ul>
<li><b style="color:green">master</b> com o desenvolvimento de novas funcionalidades</li>
<li><b style="color:yellow">stable</b> com correções de bugs</li>
</ul>

</td>
<td><img src="files/git-tree.png" style="background:none;border:0;box-shadow:none" /></td>
</tr></table>
</section>

<section>
<section>
## Versão 0.1.0

### Foi a primeira versão lançada em Setembro de 2007

O Noosfero nasceu entre uma parceiria da Colivre com:

* Fórum Brasileiro de Economia Solidária
* Ynternet.org Fondation (Suiça)

<img src="files/fbes.jpg" />
<img src="files/ynternet-org.png" style="background: white" />
</section>
<section>
## Cirandas.net

#### Fórum Brasileiro de Economia Solidária

Objetivo: "Fortalecer os empreendimentos e divulgar a Economia Solidária"

## Zen3.net

#### Ynternet.org Fondation (Suiça)

Objetivo: "Plataforma para exercício pleno da 'cidadania digital' (netizenship)"
</section>
</section>

<section>
<section>
## Muita água rolou...

### E hoje atende

ASL, USP, Serpro, SGPR, Blogoosfero, OCEB, UNB, Qualipso, IPF, Kliceo, UCSal, MPOG
</section>

<section data-background="http://noosfero.org/pub/Development/Blogoosfero/blogoosfero.jpg">
<blockquote style="background: black">
# Blogoosfero

http://blogoosfero.cc
</blockquote>
</section>

<section data-background="http://noosfero.org/pub/Development/Cirandas/cirandas-home.jpg">
<blockquote style="background: black">
# FBES

http://cirandas.net
</blockquote>
</section>

<section data-background="http://noosfero.org/pub/Development/Portal%2bUnB-FGA/portal-fga-home-mini.png">
<blockquote style="background: black">
# UNB

http://fga.unb.br
</blockquote>
</section>

<section data-background="http://noosfero.org/pub/Development/Stoa/stoa.jpg">
<blockquote style="background: black">
# USP

https://social.stoa.usp.br
</blockquote>
</section>

<section data-background="http://noosfero.org/pub/Development/SoftwareLivre/SoftwareLivre.png">
<blockquote style="background: black">
# ASL

http://softwarelivre.org
</blockquote>
</section>

<section data-background="http://noosfero.org/pub/Development/UCSal/ucsal-home.jpg">
<blockquote style="background: black">
# UCSAL

http://www.ucsal.br
</blockquote>
</section>
</section>


<section>
### A comunidade Noosfero cresceu

"Estas instituições se tornam parceiras do projeto Noosfero e acabam
parte da comunidade de usuários e desenvolvedores"

<img src="files/noosfero-contributors-by-month.png" />

<small>http://www.openhub.net/p/noosfero</small>
</section>

<section>
### Principais funcionalidades do Noosfero

* Rede social
  * pessoas, comunidades e organizações
* CMS
  * pastas, artigos, RSS, imagens e arquivos
* Blog e notificação de comentários
* Compartilhamento de interesses
* Discussões temáticas
* Agenda de eventos
* Catálogo de serviços e produtos
</section>

<section>
## Arquitetura do Noosfero

* Environment
* Profile
  * Person
  * Community
  * Enterprise
* Article
  * TextileArticle
  * UploadedFile
  * Folder
  * Blog
* Block
  * MembersBlok
  * LinkListBlock
<!-- TODO: criar diagrama -->
</section>

<section data-background="#ffffff">
<table><tr>
<td style="vertical-align: top">
<h2>Multitenancy</h2>

Documentação sobre como instalar Noosfero com suporte a multitenancy:

INSTALL.multitenancy.md
</td>
<td>
<img src="http://noosfero.org/pub/Development/WebHome/noosfero-estrutura.svg" style="background:white; border:0; box-shadow:none" />
</td>
</tr></table>
</section>

<section>
### Criar um ambiente de denvolvimento

<pre><code class="bash">
~$ git clone https://gitlab.com/noosfero/noosfero.git
~$ cd noosfero
~$ ./script/quick-start
</code></pre>

Esta forma de instalação é adequada para ambientes de desenvolvimento ou testes

#### Recomendação utilizar Debian Wheezy
</section>

<section>
<section>
## Configuração de domínios

Edite o `/etc/hosts` e adicione a seguinte entrada:

`127.0.0.1 noosfero.ufba`
</section>

<section>
## Configuração de domínios

Abra o console do Noosfero e execute o seguinte código:

<pre><code class="ruby">
$ rails console

env = Environment.default
domain = Domain.new(:name => 'noosfero.ufba', :is_default => true)
env.domains << domain
</code></pre>
</section>

<section>
## Configuração de domínios

Reinicie o servidor de desenvolvimento

<pre><code class="bash">
$ ./script/development
</code></pre>

Este script inicia alguns serviços além do servidor Rails local:

* feed-updater
* delayed_job
* whenever
</section>

</section>

<section>
<section>
## Criar usuário administrador

Abra o console do Noosfero e execute o seguinte código:

<pre><code class="ruby">
env = Environment.default
admin = User.new({
  :login => "adminuser",
  :email => 'adminuser@localhost.localdomain',
  :password => 'admin',
  :password_confirmation => 'admin',
  :environment => env,
})
admin.save
admin.activate
env.add_admin(admin.person)
</code></pre>
</section>

<section>
## Criar usuário administrador

Acesse http://localhost:3000

<img src="files/screenshots/noosfero-login.png" />
</section>
</section>

<section>
# Análise dos logs

* production.log
* delayed_job.log
* production_spammers.log

<pre><code class="bash">
$ tail -f log/development.log
</code></pre>
</section>

<section>
Acompanhamento de excessões

gem install exception_notification -v 1.0.20090728

Em config/noosfero.yml
production:
  exception_recipients: [admin@example.com, you@example.com]
</section>

<section>
Awstats

Configuração do Awstats
</section>

<!--

Análise de logs rails log analizer

Monitoramento com New Relic

<div class="step slide" data-x="1000" data-y="0">
1. Instalação;
  * Instalação automatizada via pacote Debian, ambientes de produção
    * Registro e configuração de domínios
    * Definição e aplicação de temas de ambientes e comunidades
    * Configurações para envio de emails
</div>

<div class="step slide" data-x="2000" data-y="0">
1. Manutenção;
  * Atualização do Noosfero via pacote Debian
  * Atualização do Noosfero via repositório
  * Scripts noosfero-console, noosfero-plugins
</div>

<div class="step slide" data-x="3000" data-y="0">
1. Administração Noosfero;
  * Painel de controle do ambiente
  * Habilitar/desabilitar funcionalidades de ambiente
  * Instalação e ativação de chat
</div>

<div class="step slide" data-x="4000" data-y="0">
1. Monitoramento;
  * Plugin Google Analytics
  * Plugin Piwik
  * Exception Notification
</div>

<div class="step slide" data-x="5000" data-y="0">
1. Backup;
  * Dump do banco de dados
  * Arquivos de uploads de usuários
</div>

<div class="step slide" data-x="6000" data-y="0">
1. Resolvendo problemas
  * Pedindo ajuda da comunidade IRC Freenode #noosfero e #noosfero-br
  * Listas de discussão noosfero-br e noosfero-dev (ingles)
  * Comunidade Noosfero
  * Contribuindo com o Noosfero, merge-request
</div>

<div id="fim" class="step slide" data-x="14000" data-y="0" data-scale="10">
   <div class="centralizado">
   <h1>obrigado!</h1>
   <h3>http://joenio.me</h3>
   <h4>joenio@colivre.coop.br</h4>
   <h5>esta apresentação foi feita com o software livre impress.js</h5>
   <h5>background utilizado: http://subtlepatterns.com</h5>
   </div>
</div>

<iframe width="853" height="480" src="https://www.youtube.com/embed/tHJblnBnBg4" frameborder="0" allowfullscreen></iframe>

Teaser do Noosfero exibido durante a cerimônia de entrega de troféus para os
vencedores do 9º Prêmio Cooperativa do Ano promovido pelo Sistema OCB. 
A Colivre foi a vencedora na categoria "Inovação e Tecnologia".

Conheça o Cirandas.net: a rede social da Economia Solidári
https://www.youtube.com/watch?v=RI3ZU6bPxiI

Entrevista com o Professor Adriano Canabarro Teixeira sobre o Noosfero
https://www.youtube.com/watch?v=RwSVqekyzpo
-->
