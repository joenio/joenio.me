---
title: Relato sobre o Rails Summit (e CONISLI) 2008
lead: Post originalmente feito na rede SoftwareLivre Brasil.
---

![software livre brasil logo](/files/softwarelivre-brasil-post-image.png)

<div class="alert alert-warning">
Post originalmente feito na rede SoftwareLivre Brasil. Fonte:<br/>
http://softwarelivre.org/joenio/blog/relato-sobre-o-rails-summit-e-conisli-2008
</div>

 <p>Segue abaixo um relato do <a
 href="http://www.locaweb.com.br/railssummit/">Rails Summit</a> e <a
 href="http://www.conisli.org/">CONISLI</a> 2008 que ocorreram nos 15, 16 e 18,
 19 de Outubro respectivamente. Este relato foi enviado para a lista de
 discussão (interna) da <a href="http://www.colivre.coop.br/">Colivre</a> e <a
 href="http://people.softwarelivre.org/~terceiro/">Antonio Terceiro</a> disse
 que daria um belo post de Blog, então segue o relato:</p>
<p>&nbsp;</p>

<p>O evento começou com a apresentação de Gilberto Mautner co-fundador da <a
href="http://www.locaweb.com.br/">Locaweb</a>, Locaweb foi a organizadora do
evento. Ele falou sobre o inicio da Locaweb, a ampresa começou fazendo um
portal para agregar empresas de fabricação/costura de tecidos, a iniciativa foi
um fracasso mas depois disso ele tinha uma infra-estrutura de servidores e
começou a oferecer hospedagem para outros desenvolvedores e o negocio começou a
andar. A Locaweb hoje é uma grande empresa de hospedagem e oferece suporte a
ferramentes tanto livres quanto não-livres.<br> <br> Em seguida veio a palestra
de Chad Fowler (que eu gostei muito) o cara é músico profissional ( isso me fez
lembrar um <a href="http://kroger.lisp-br.org/">amigo músico que programa um
pouquinho em Lisp</a> :) ). Ele não falou muito sobre coisas técnicas, falou
muito sobre a crise economica e como as pessoas ficam assutadas com isso, ele
disse que ele nao se assusta mas muitos amigos dele estao assustados. Falou
sobre a importancia de fazer algo diferente e se destacar, exemplificou isto
mostrando alguns grandes músicos que em sua época foram tidos como loucos e
odiados por alguns mas eram verdadeiros genios e disse que Rails é uma dessas
coisas marcante e maravilhosa. Falou sobre a experiencia dele sobre ir morar na
India e sobre o seu livro "My Job Went to India" (ele está preparando uma nova
versão do livro). Ele também chamou os programadores Java de mediocres...<br>
<br> Tivemos entao a palestra dos caras da empresa Phusion (Ninh Bui e Hongli
Lai). Eles falaram sobre Passenger uma solução para colocar aplicações Rails em
produção, segundo eles é uma solução que escala. (Todos falaram sobre
escalabilidade do Rails no evento).<br> <br> Teve algumas palestras de
programadores Java que estão se envolvendo na counidade Ruby/Rails, esse
pessoal falou principalmente sobre JRuby e todos usaram o argumento que JRuby é
mais rápido que o compilador do oficial do Ruby porcausa das otimizações da
máquina virtual do Java, mesmo parecendo ser bastante parcial um cara chamado
Fabio Kung fez uma apresentação muito legal sobre as estrategias de compilação,
garbage collector, e outras coisas internas do compilador/interpretador Ruby e
JRuby. Apesar de tudo sobre o que nós (eu) achamos de Java parece ser bem
interessante a possibilidade de poder executar o <a
href="http://www.noosfero.com.br/">Noosfero</a> por exemplo em cima de um
servidor de aplicações Java. Um ponto que Fabio Kung destacou bastante durante
sua palestra é que a linguagem Java realmente é horrivel e cheio de burocracia
e não está evoluindo por causa disso mas a arquitetura Java é muito boa.<br>
<br> Uma palestra que achei super interessante (talvez uma das melhores pra
mim) foi George Guimaraes da empresa <a
href="http://pagestacker.com/">Pagestacker</a>, ele falou sobre Deploy de
aplicações Rails e citou o tema "Web operations" que é o assunto que trata de
técnicas de manter aplicacoes Web em producao. Uma das coisas que marcou foi
que Thin é melhor que Mongrel e mandou agente parar de usar Mongrel. Falou
sobre como calcular o numero ideal de instancias de servidores rails para
atender ao maior numero de requisicoes por segundo, ele demonstrou com graficos
que nao adianta crescer aleatoriamente, a partir de um numero de instancias o
numero de requisicoes por segundo começa a cair, no caso q ele apresentou o
melhor número pra ele foi 8, quando ele aumentou pra 9, 10, ... o desempenho
começou a cair. Indicou dois livros sobre planejamento "Guarrilla Cacity
Planning" e "The art of capacity planning", este segundo com menor enfase
matemática que o primeiro. Problema de desempenho nunca é resolvido ele apenas
é adiado, um dia o sistema vei precisar ser expandido novamente. O email do
cara é george@(NOSPAM)pacgestacker.com. O <a
href="http://pagestacker.com/">Pagestacker.com</a> foi inicialmente feito em 48
horas.<br> <br> Outra palestra interessante foi da empresa WebCO onde falaram
sobre o portal <a href="http://blogblogs.com.br/">blogblogs.com.br</a> (este
também foi feito inicialmente em algumas horas). Os caras disseram que estão
crescendo bastante e estão contratando feito loucos, e deixou email para
curriculo vagas@(NOSPAM)blogblogs.com.br. Eles estão desenvolvendo uma camada
de abstração para motores de busca chamada Sapien, eles usavam ferret e tiverem
problemas e estao mudando pra outra solução (nao lembro qual), e para não ter
que mudar a aplicação toda vez que precisar mudar de motor de busca eles estão
usando o Sapien (ainda não publicaram mas disseram q será software livre). O
email do cara é mlemos@(NOSPAM)webcointernet.com<br> <br> Bem, tiveram outras
palestras mas não me lembro muito bem, acho que essas foram as principais pra
mim, outra parte bacana do evento foi o Coffee Break e o Almoço que rolou
dentro do próprio evento e foi uma boa hora pra se integrar (mesmo sendo meio
anti-social) conheci 2 carinhas lá da Locaweb de uma equipe de desenvolvimento
lá dentro, eles tem várias pequenas equipes de desenvolvimento e utilizam
metodologia Scrum usando cartãozinho de baralho e tudo, eles disseram que a
Locaweb é uma empresa muito boa para se trabalhar e que é tudo bem tranquilo
lá.<br> <br> Sylvestre Mergulhao transcreveu (de forma bem livre) em seu blog
algumas das palestras do evento: <a
href="http://mergulhao.info/tags/railssummit">http://mergulhao.info/tags/railssummit</a></p>

<p>O <a href="http://www.conisli.org/">CONISLI</a> foi péssimo (infelizmente),
só assisti uma palestra do <a href="http://piterpunk.info02.com.br/">Piter
Punk</a> com o titulo "Fazendo as coisas funcionarem" foi bem interessante, ele
comprou um notebook CCE daqueles que vem com Satux e um monte de coisa não
funcionava, então ele deu varias dicas de como fazer funcionar, atualização de
Bios (ele disse que muitos problemas são simplesmente bug na bios, e disse que
em servidores a primeira coisa a se fazer é isso), corrigir bugs idiotas no
drivers (sim, os desenvolvedores de drivers do kernel cometem erros). Como
descobrir bugs de hardware (os desenvolvedores de hardware tb lançam coisas com
bugs).<br> <br> Tentei assistir uma palestra sobre Ubuntu mas depois que o cara
falou a frase: "Ah, e tem esse programa legal que a Sun liberou, o Sun xVM
VirtualBox" eu desisti e sai da sala.<br> <br> Além desta palestra rolou o <a
href="http://yapcbr.perl.org.br/2008/">YAPC::Brasil</a> (encontro brasileiro de
desenvolvedores Perl). Foi um evento bem informal com várias pequenas
apresentações sobre projetos pessoais dos membros da comunidade, Eden Cardim de
Ilheus estava por lá e ensinou como jogar <a
href="http://www.perl.org.br/Artigos/PerlGolf">Golf</a>, quem quiser jogar pode
ir em <a href="http://codegolf.com/">http://codegolf.com/</a> e jogar golf em
Perl, Ruby, Python ou PHP.</p>

<p>Foi isso!</p>
