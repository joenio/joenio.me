---
title: Noosfero
---

<!--

http://jindra12.deviantart.com/art/Ocean-211965086

http://sparklestarcat.deviantart.com/art/Monument-keyboard-358167802
-->

<section data-background="http://orig03.deviantart.net/4647/f/2011/157/9/5/ocean_by_jindra12-d3i75b2.jpg">
# Noosfero

<img src="files/noosfero.png" />

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
<section>
## O desenvolvimento ocorre em torno do gitlab

http://gitlab.com/noosfero/noosfero

* Issues
* Milestones
* Merge Requests

A metologia de desenvolvimento das equipes baseia-se em métodos ágeis e TDD
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
<section>
<!-- 
<section data-background="http://orig06.deviantart.net/bb02/f/2014/171/5/e/transformation_v2_by_drazebot-d7n5x0h.jpg" data-background-size="100%">
http://drazebot.deviantart.com/art/Transformation-02-462170465 -->

# Versões

#### Versões de funcionalidades novas

### 1.XX.0

#### Versões de manutenção

### 1.XX.(1-9)

#### Versão atual

### 1.2.0

</section>
<section data-background="#ffffff">
<img src="files/noosfero-development-cycle.svg" class="stretch" />
</section>
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
<section data-background="files/backgrounds/waterfall.gif">
<div class="box-green">
## Muita água rolou...

### E hoje atende

ASL, USP, Serpro, SGPR, Blogoosfero, OCEB, UNB, Qualipso, IPF, Kliceo, UCSal, MPOG
</div>

<!-- fonte do background https://plus.google.com/+AkanshaGautam/posts/1ujxYtPgd3z -->
</section>

<section data-background="files/screenshots/blogoosfero.jpg" data-transition="convex">
<div class="box-gray">
# Blogoosfero

http://blogoosfero.cc
</div>
</section>

<section data-background="files/screenshots/cirandas.jpg" data-transition="convex">
<div class="box-gray">
# FBES

http://cirandas.net
</div>
</section>

<section data-background="files/screenshots/fga-unb.png" data-transition="convex">
<div class="box-gray">
# UNB

http://fga.unb.br
</div>
</section>

<section data-background="files/screenshots/stoa.jpg" data-transition="convex">
<div class="box-gray">
# USP

https://social.stoa.usp.br
</div>
</section>

<section data-background="files/screenshots/softwarelivre.png" data-transition="convex">
<div class="box-gray">
# ASL

http://softwarelivre.org
</div>
</section>

<section data-background="files/screenshots/ucsal.jpg" data-transition="convex">
<div class="box-gray">
# UCSAL

http://www.ucsal.br
</div>
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

<p class="fragment grow highlight-red">(em ambientes de desenvolvimento)</p>

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
<section>
## Instalação via pacote Debian

(recomendado para uso em ambientes de produção)

<span style="color:blue">http://download.noosfero.org/debian</span>

Os pacotes do Noosfero seguem, com um certo "delay", a versão estável do
Debian, hoje está em Debian Wheezy

<pre><code class="ruby">
# apt-get install postgresql
# apt-get install noosfero noosfero-apache
</code></pre>
</section>

<section>
### Criação do banco de dados

<img src="files/screenshots/noosfero-dbconfig.png" />

Cria um banco postgresql chamado "noosfero"
</section>

<section>
### Senha do postgresql

<img src="files/screenshots/noosfero-postgresql-password.png" />

<small>recomenda-se deixar em branco para que o sistema gere uma senha aleatória</small>
</section>

<section>
### Registro e configuração de domínios

<img src="files/screenshots/noosfero-domain.png" />

Digite: noosfero.ufba
</section>

<section>
### Configuração para envio de emails

<img src="files/screenshots/noosfero-mta.png" />
</section>

<section>
### Teste o acesso

Acesse: http://noosfero.ufba/

<img src="files/screenshots/noosfero.png" />
</section>
</section>

<section>
<section>
# Análise de logs

| **Produção**            | **Desenvolvimento**         |
| production.log          | development.log             |
| delayed_job.log         | development_delayed_job.log |
| production_spammers.log | development_spammers.log    |
| cron.log                | cron.log                    |

</section>

<section>
### Capturando ocorrências ao-vivo

## tail, grep, ...

<pre><code class="bash">
$ tail -f log/development.log
</code></pre>

<pre><code class="bash">
$ tail -f log/development.log | grep POST
</code></pre>
</section>

<section>
### Analisando performance

## request-log-analyzer

<span style="color:blue">http://request-log-analyzer.com</span>

Ferramenta de linha de comando para gerar relatório de performance a partir da
análise de logs, suporta vários formatos (Rails, Merb, DelayedJob, Apache,
NGINX, ...)
<img src="files/screenshots/request-log-analyzer.png" />
</section>

<section>
## request-log-analyzer

#### Instalando

<pre><code class="bash">
$ gem install request-log-analyzer
</code></pre>

Caso isto não funcione faça download em http://rubygems.org/gems/request-log-analyzer

<pre><code class="bash">
$ gem install request-log-analyzer-1.13.4.gem
</code></pre>

#### Executando

<pre><code class="bash">
$ request-log-analyzer log/production.log
</code></pre>

<small>Para gerar o relatório em HTML utilize os parâmetros: `--output html --file
production.html`</small>
</section>
</section>

<section>
<section>
## Backup e restore

Adicione <strong>`host: localhost`</strong> em /etc/noosfero/database.yml:

<pre><code class="yaml">
production:
  adapter: postgresql
  database: noosfero
  encoding: unicode
  username: noosfero
  password: rgF2j7vDbVUR
  host: localhost
</code></pre>

Logue como 'noosfero' e execute a task para gerar o backup:

<pre><code class="bash">
# su - noosfero
$ rake backup
</code></pre>

</section>

<section>
### rake backup

<pre><code class="bash">
noosfero@noosfero-debian-wheezy:~$ rake backup

mkdir -p tmp/backup
pg_dump -h localhost noosfero > tmp/backup/2015-08-19-12:12.sql
Senha: 
tar chaf tmp/backup/2015-08-19-12:12.tar.gz tmp/backup/2015-0...
rm -f tmp/backup/2015-08-19-12:12.sql
****************************************************
Backup in tmp/backup/2015-08-19-12:13.tar.gz !

To restore, use:
$ rake restore BACKUP=tmp/backup/2015-08-19-12:13.tar.gz
****************************************************
</code></pre>

<!-- **fix* -->

Isto cria um arquivo com o dump do banco e todos os arquivos do ambiente
Noosfero
</section>

<section>
### rake restore

<pre><code class="bash">
# su - noosfero
$ rake restore BACKUP=tmp/backup/2015-08-19-12:12.tar.gz

WARNING: backups should be restored to an empty database, otherwise
data from the backup may not be loaded properly.

You can remove the existing database and create a new one with:

$ sudo -u postgres dropdb -h localhost noosfero
$ sudo -u postgres createdb -h localhost noosfero --owner noosfero

Are you sure you want to continue (y/N)? 
</code></pre>

Mas antes: destrua o banco!

<pre><code class="bash">
# su - postgres
$ dropdb noosfero
$ createdb noosfero --owner noosfero
</code></pre>
<!-- rgF2j7vDbVUR -->
</section>

<section>
# Limitações

* Só é possível importar 1 ambiente
* Se a sua instancia Noosfero já possui ambientes não será possível restaurar outros

<br/>

### Ideia para superar esta limitação

"Usar `multitenancy` e evoluir a implementação das tasks `backup` e `restore`
para entender isto, assim teríamos um isolamento maior"
</section>

<section>
## Criando backup "na mão"

* Crie um dump do banco de dados
* Copie os arquivos
  * public/articles
  * public/image_uploads
  * public/thumbnails

<pre><code class="bash">
# su - postgres
$ pg_dump noosfero > noosfero_dump.sql
</code></pre>
</section>
</section>

<!--

faltando arquivo /usr/share/noosfero/etc/pound.cfg

-->
<section>
## Scripts de linha de comando

(para ambientes de produção)

### noosfero-console

<pre><code class="bash">
# noosfero-console
</code></pre>

### noosfero-runner

<pre><code class="bash">
# noosfero-runner "puts Environment.default.name"
</code></pre>

### noosfero-plugins

<pre><code class="bash">
# noosfero-plugins list
</code></pre>
</section>

<section>
<section data-background="files/backgrounds/varnish.png">
<div class="box-blue">

## Instalando varnish

Varnish Cache é um acelerador de aplicações web, também conhecido como proxy
reverso de cache HTTP

<span style="color:blue">http://www.varnish-cache.org</span>

Siga a documentação em `INSTALL.varnish.md` nos fontes do Noosfero
</div>
<!-- fonte do background: http://ayudawordpress.com/varnish-como-servicio-en-wordpress -->
</section>
<section data-background="files/backgrounds/varnish.png" data-transition="convex">
<div class="box-blue">

## Instalando varnish

<pre><code class="bash">
# apt-get install varnish
# apt-get install libapache2-mod-rpaf
</code></pre>

* Configure o Apache para escutar na porta `8080`
* Configure o Varnish para escutar na porta `80`
</div>
</section>
</section>

<section>
<section>
# Multitenancy

Multitenancy é um princípio em arquitetura de software onde um única instancia
de software rodando num servidor serve várias organizações, chamado tenants
(inquilino)

Com esta arquitetura o Noosfero isola os seguintes dados para cada Environment

* Uploaded files
* Database
* Solr index
* ActiveRecord#cache_key
* Feed updater
* Delayed Job Workers
</section>

<section>
## Vamos popular o banco com alguns dados de teste 

<p style="color:red">mas antes desabilite o envio de emails</p>

Adicione a linha abaixo ao arquivo `config/environments/production.rb`

<pre><code class="ruby">
  config.action_mailer.delivery_method = :file
</code></pre>
</section>

<section>
## Vamos popular o banco com alguns dados de teste 

#### script/sample-data

<pre><code class="bash">
# su - noosfero
$ RAILS_ENV=production ./script/sample-data

Creating categories: .........E...F....... done!
Creating regions: ........................ done!
Creating users: EEEEE....EEEEE............ done!
...
</code></pre>

Este script cria categorias, usuários, perfils de comunidades, empreendimentos,
artigos, textos, blogs, etc... com dados "aleatórios"
</section>

<section>
### Migrar uma instalação Noosfero para Multitenancy

Altere o arquivo `/etc/noosfero/database.yml`

<pre><code class="yaml">
ufba_production: &DEFAULT
  adapter: postgresql
  database: noosfero
  encoding: unicode
  username: noosfero
  password: 547fjsJA
  schema_search_path: public
  domains:
    - noosfero.ufba

production:
  <<: *DEFAULT
</code></pre>
<!-- *fix -->

</section>

<section>
### Migrar uma instalação Noosfero para Multitenancy

Criar um 'ambiente Rails' baseado em 'production' para o novo 'tenant' 'ufba_production'

<pre><code class="bash">
# cd ~noosfero
# RAILS_ENV=production rake multitenancy:create
</code></pre>

Mova os arquivos de usuários e uploads:

<pre><code class="bash">
# mkdir public/articles/public
# mv public/articles/0000 public/articles/public/

# mkdir public/image_uploads/public
# mv public/image_uploads/0000 public/image_uploads/public/

# mkdir public/thumbnails/public
# mv public/thumbnails/0000 public/thumbnails/public/
</code></pre>
<!--
 TODO/IDEIA: criar um script noosfero-rake para ser utilizado em produção,
como um alias para "RAILS_ENV=production rake ..." com isto eu executaria

noosfero-rake multinenancy:create
-->

</section>


<section>
## Evitando links quebrados

É possível que existam referências para conteúdos estáticos armazenados no
sistema de arquivos, então é importante configurar o servidor web para evitar
problemas

Adicione as seguintes linhas à configuração do Apache:

<pre><code class="apache">
RewriteRule ^/articles(.+) /articles/public$1
RewriteRule ^/image_uploads(.+) /image_uploads/public$1
RewriteRule ^/thumbnails(.+) /thumbnails/public$1
</code></pre>
</section>

<section>
## Adicionando novos inquilinos (tenants)

Adicione as configurações abaixo ao arquivo `/etc/noosfero/database.yml`

<pre><code class="yaml">
ripe_production:
  adapter: postgresql
  database: noosfero
  encoding: unicode
  username: noosfero
  password: 547fjsJA
  schema_search_path: ripe
  domains:
    - ripe.ufba
</code></pre>

Crie o `schema` do banco de dados

<pre><code class="yaml">
# su - postgres
$ psql noosfero -c "CREATE SCHEMA ripe AUTHORIZATION noosfero"
</code></pre>
</section>
<section>
Adicione o domínio ao Apache, edite o arquivo `/etc/apache2/sites-enabled/noosfero` e adicione o seguinte

<pre><code class="apache">
ServerAlias ripe.ufba
</code></pre>

Prepare o banco de dados

<pre><code class="bash">
# cd ~noosfero
# RAILS_ENV=production rake multitenancy:create
# RAILS_ENV=ripe_production rake db:schema:load
# RAILS_ENV=production rake db:migrate
</code></pre>
</section>
<section>
## Atualize as configurações do pound

Edite o arquivo `/etc/pound/pound.cfg`

<pre><code class="pound">
Service
  HeadRequire "Host:.*noosfero.ufba.*"
  Redirect "https://noosfero.ufba"
End
Service
  HeadRequire "Host:.*ripe.ufba.*"
  Redirect "https://ripe.ufba"
End
</code></pre>
</section>

<section>
## Novo ambiente pronto para ir "ao ar"

Remova os logs do novo ambiente para evitar problemas de permissão e reinicie o Noosfero, o Apache e o Pound

<pre><code class="bash">
# rm /usr/share/noosfero/log/ripe_*
# service noosfero restart
# service apache2 restart
# service pound restart
</code></pre>
</section>

<section>
### Cadastrando o novo ambiente (Environment) no banco de dados

<pre><code class="bash">
RAILS_ENV=production NOOSFERO_DOMAIN=ripe.ufba rake db:data:minimal
</code></pre>
</section>
</section>

<section>
## Recuperando backup em um novo ambiente com multitenancy

http://ratz.joenio.me/backup.tgz

</section>

<!--

<section>
* Instalar Noosfero com multitenancy
* Criar 3 ambientes diferentes, cada um com um domínio diferente
  * noosfero.ufba
  * ripe.ufba
  * netica.ufba
* Definir temas diferentes para cada ambiente
* Criar 1 usuário administrador em cada um dos ambientes
* Habilitar Piwik Plugin no servidor
* Habilitar o Piwik Plugin em cada um dos ambientes
</section>

<section>
</section>


 * Definição e aplicação de temas de ambientes e comunidades

Acompanhamento de excessões

gem install exception_notification -v 1.0.20090728

Em config/noosfero.yml
production:
  exception_recipients: [admin@example.com, you@example.com]

Awstats

Configuração do Awstats

Monitoramento com New Relic

1. Manutenção;
  * Atualização do Noosfero via pacote Debian
  * Atualização do Noosfero via repositório
1. Administração Noosfero;
  * Painel de controle do ambiente
  * Habilitar/desabilitar funcionalidades de ambiente
  * Instalação e ativação de chat
1. Monitoramento;
  * Plugin Google Analytics
  * Plugin Piwik
  * Ldap Plugin
  * Exception Notification
1. Resolvendo problemas
  * Pedindo ajuda da comunidade IRC Freenode #noosfero e #noosfero-br
  * Listas de discussão noosfero-br e noosfero-dev (ingles)
  * Comunidade Noosfero
  * Contribuindo com o Noosfero, merge-request

<iframe width="853" height="480" src="https://www.youtube.com/embed/tHJblnBnBg4" frameborder="0" allowfullscreen></iframe>
Teaser do Noosfero exibido durante a cerimônia de entrega de troféus para os
vencedores do 9º Prêmio Cooperativa do Ano promovido pelo Sistema OCB. 
A Colivre foi a vencedora na categoria "Inovação e Tecnologia".

Conheça o Cirandas.net: a rede social da Economia Solidári
https://www.youtube.com/watch?v=RI3ZU6bPxiI

Entrevista com o Professor Adriano Canabarro Teixeira sobre o Noosfero
https://www.youtube.com/watch?v=RwSVqekyzpo
-->
