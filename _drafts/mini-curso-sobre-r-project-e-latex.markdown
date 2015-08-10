---
title: Curso sobre integração entre R-Project e LaTeX
tags: tecnologia r-project latex
---

Mini-curso realizado durante o **ENEDS - Encontro Nacional de Engenharia e
Desenvolvimento Social** - _"Por trás de cada tecnologia, há sempre uma
ideologia"_.

| Data do evento     | De 12 a 14 de Agosto 2015                             |
| Data do mini-curso | Dia 14 de Agosto 2015 às ??                           |
| Local              | Universidade Federal da Bahia                         |
| Público alvo       | Estudantes de graduação e profissionais de engenharia |
| Site               | [http://eneds2015.wix.com/eneds][eneds]               |

## Resumo

> Este mini-curso tem como objetivo apresentar o R-Project e o LaTeX, uma
> linguagem de programação para cálculos estatísticos e criação de gráficos,
> largamente utilizado para realizar análises de dados em pesquisas
> científicas, e um sistema para elaboração e diagramação de textos de alta
> qualidade muito utilizado para escrever artigos científicos. Ambos são
> softwares livres e seguem princípios éticos que garantem liberdades
> essenciais aos seus usuários, estes princípios garantem transparência aos
> usuários e proporcionam transferência de tecnologia à toda a sociedade.

### Softwares livres apresentados

* [LaTeX][latex] - Ambiente para diagramação de textos de alta qualidade
* [R-Project][r-project] - Linguagem de programação para cálculo estatísticos
* [knitr][knitr] - Extensão para integrar R-Project e LaTeX

### Outros softwares livres utilizadas

* [Editor de textos Vim][vim]
* [Make e Makefiles][make]
* [Terminal e linha de comando][bash]

## Roteiro

1. Filosofia, princípios e história do software livre
  * Princípios e questões filosóficas
  * História do projeto GNU e da FSF
  * Licenças de software, copyright, copyleft
  * Evolução do movimento do software livre
  * Modelo de produção aberto e distribuído de software
  * Exemplos notáveis de projetos de software livre
1. LaTeX
  * Introdução
  * Ambiente de trabalho e ferramentas para LaTeX
  * Escrevendo um simples artigo científico seguindo regras ABNT
1. R-Project
  * Introdução
  * Ambiente de trabalho e ferramentas para R-Project
  * Análise estatística de dados científicos
  * Gerando gráficos com o R
1. knitr
  * Juntando o LaTeX com o R-Project

## Filosofia, princípios e história do software livre

### Princípios e questões filosóficas

Softwares livres são programas de computador que permitem adaptações ou
modificações de forma espontânea sem que haja necessidade de solicitar
permissões ao seu autor original, ou proprietário. Oferecem aos usuários a
liberdade de: executar, copiar, distribuir, estudar, mudar e melhorar o
software.

O princípio básico compartilhado por todos que desenvolvem ou contribuem com
software livre é a **liberdade** dos usuários, a liberdade de controlar a
execução, adaptação e processamento de dados às suas necessidades, bem como,
a liberdade social para cooperar ativamente com outros usuários e
desenvolvedores, caso assim deseje.

Isto é garantido através da definição das quatro liberdades essenciais:

* Liberdade 0: A liberdade de executar o programa para qualquer fim
* Liberdade 1: A liberdade de estudar como o programa funciona e adaptá-lo
  * _(acesso ao código-fonte é um pré-requisito)_
* Liberdade 2: A liberdade de redistribuir cópias de modo que possa ajudar ao próximo
* Liberdade 3: A liberdade de distribuir cópias de versões modificadas a outros
  * _(acesso ao código-fonte é um pré-requisito)_

Estas liberdades não podem ser suprimidas, o software livre é uma questão de
liberdade, não de preço. Solidariedade social das comunidades: "permitir
distribuições de cópias é permitir a solidariedade social"

### História do projeto GNU e da FSF

Na década de 60 não era comum do ponto de vista comercial a ideia do software
como algo separado do hardware, ele era, naturalmente, entregue junto com o
código-fonte. Assim, no início de tudo, para aqueles que tinham acesso à
tecnologia, o software era livre.

Mas no decorrer da década de 60 conforme os sistemas operacionais e
compiladores evoluíam, os custos manufatureiros de software aumentavam
dramaticamente. Uma pequena indústria de software começou a se formar e evoluiu
ao ponto de eliminar a cultura da distribuição de código junto ao hardware, o
software passou então a ser comercializado como produto de prateleira.

Richard Stallman, um membro desta antiga comunidade de compartilhamento de
software, preocupado com a liberdade dos usuários de sistemas computacionais,
iniciou a criação do que veio a se tornar o [Projeto GNU][gnu]. E em 1980 foram
criados os primeiros projetos organizados de forma consciente para serem
software livre, assim como foram estabelecidos os fundamentos éticos, legais e
financeiros desse movimento.

Richard Stallman criou um mecanismo legal a fim de garantir que, além daqueles que
receberiam os programas diretamente do Projeto GNU, todos os demais pudessem
desfrutar os direitos de copiar, redistribuir e modificar o software.

Esta foi a razão pela qual ele elaborou a Licença GPL. Além disso, para
institucionalizar o Projeto GNU, bem como obter fundos para desenvolver e
proteger o software livre, de acordo com os princípios éticos que ele publicou
no Manifesto GNU, Stallman fundou a Free Software Foundation (FSF). Dessa
forma, definitivamente nomeado, nasce o Movimento do Software Livre.

### Licenças de software, copyright, copyleft

Licenças de software são definições expressas aos usuários de um certo software
de quais ações são autorizadas ou proibidas a respeito do uso do software em
sí.

O "direito de autor", ou copyright é à proteção das obras literárias e
artísticas, Não há qualquer formalidade para proteger a obra, o direito
exclusivo nasce da criação da obra.

Permite ao autor o direito exclusivo de utilizar, usufruir e dispor da obra
literária, artística ou científica, dependendo de autorização prévia e expressa
do mesmo, para que a obra seja utilizada, por quaisquer modalidades, dentre
elas a reprodução parcial ou integral.

O direito autoral cria exclusividade de todos os direitos da obra. Reproducao,
transmissao, derivacao, venda, emprestimo, etc...

Licenças como a GPL contêm um conceito adicional, conhecido como copyleft. Ao
contrário de copyright, em copyleft o autor cede alguns direitos. Por isto o
termo left. Na prática isto significa que o autor continua sendo o dono, mas
sua obra pode ser utilizada/modificada/distribuída por outras pessoas,
respeitando termos específicos de licença. software livre protegido por uma
licença que ofereça copyleft, se distribuído, deverá ser sob a mesma licença,
ou seja, repassando os direitos.

Associando os conceitos de copyleft e software livre, programas e serviços
derivados de um código livre devem obrigatoriamente permanecer com uma licença
livre.

### Evolução do movimento do software livre

* 1983: Richard Stallman anuncia a criação do projeto GNU
* 1984: Richard Stallman pede demissão para se dedicar ao Projeto GNU
* 1985: Richard Stallman funda a Free Software Foundation (FSF)
* 1987: A FSF vende cópias do softwares GNU para arrecadar dinheiro
* 1989: A FSF cria o conceito de copyleft e a licença GPL
* 1991: Linus Torvalds anuncia a criação do Linux
* 1992: A força aérea dos EUA investe no desenvolvimento do GNAT (um compilador ADA)
* 1993: A empresa SuSE é fundada com negócios baseados em GNU/Linux
* 1994: O Debian GNU/Linux e o Red Hat Linux são lançados
* 1995: O Red Hat Linux 2.0 é lançado
* 1996: O projeto KDE é anunciado
* 1997: O projeto GNOME é anunciado
* 1998: Netscape Communications Corporation libera o Netscape Communicator como software livre
* 1999: Dell, HP e SGI anunciam que irão dar suporte a GNU/Linux em seus computadores
* 2000: Sun libera o código-fonte do StartOffice sob licença LGPL
* 2001: IBM anuncia investimento de US$ 1 bilhão no Linux
* 2002: Criação das licenças Creative Commons voltadas para obras intelectuais (não software)
* 2003: Motorola inicia vendas do primeiro telefone celular com Linux
* 2004: Primeira versão do Ubuntu e do Firefox são lançadas
* 2005: Sun Microsystems disponibiliza o Open Solaris
* 2006: Sun libera a sua máquina virtual Java sob licença GPL
* 2007: A FSF lança a versão definitiva da GPL versão 3
* 2008: Nokia anuncia transformação do Symbian em software livre
* 2009: Oracle compra Sun Microsystems por US$ 7,4 bilhões
* 2010: A Trolltech torna as bibliotecas Qt disponíveis sob a GPL
* 2011: Linus Torvalds disponibiliza a versão 2.6.38 do kernel do Linux

### Modelo de produção aberto e distribuído de software

O movimento do software livre acabou criando um novo paradigma de produção de
software baseado em princípios até então pouco ou nunca vistos, como:

* Grandes equipes de desenvolvedores espalhados pelo globo
* Equipes formadas por empresas ou desenvolvedores inividuais
* Eventualmente contando con contribuição de voluntários
* Comunicação ocorrendo principalmente via Internet, emails, chat, etc
* Repositórios de código-fonte distribuídos e descentralizados

Além dos aspectos comerciais e técnicos trazidos por este modelo, existem
ganhos sociais, como:

* Transferencia de tecnologia
* Transparência do processo de produção
* Oportunidades de negócio para todos
* Oportunidade de aprendizado
* Potencialização da colaboração entre pessoas

### Exemplos notáveis de projetos de software livre

* O Kernel Linux
* Ditribuição GNU/Linux Debian
* Pacote de escritório LibreOffice
* Navegador de internet Firefox
* Sistema de controle de versões GIT
* Linguagens de programação: Perl, Ruby e Python
* Editor de imagens vetorial Inkscape
* Ilustrador gráfico Gimp
* Editor de áudio profissional Ardour
* Banco de dados MySQL
* Cliente de email Thunderbird

## LaTeX

### Introdução

LaTeX é um ambiente para diagramação de textos utilizado amplamente na produção de
textos matemáticos e científicos, devido a sua alta qualidade tipográfica.

Possui abstrações para
lidar com bibliografias, citações, formatos de páginas, referência cruzada e
tudo mais que não seja relacionado ao conteúdo do documento em si.

O LaTeX foi desenvolvido na década de 80, por Leslie Lamport.

A ideia central do LaTeX é distanciar o autor o máximo possível da apresentação
visual da informação, pois a constante preocupação com a formatação desvia o
pensamento do conteúdo escrito.

Ao invés de trabalhar com ideias visuais, o usuário é encorajado a trabalhar
com conceitos mais lógicos — e, consequentemente, mais independentes da
apresentação — como capítulos, seções, ênfase e tabelas, sem contudo impedir o
usuário da liberdade de indicar, expressamente, declarações de formatação.

É uma linguagem de marcação

Não é um editor WYSIWYG

Facilita referencias bibliográficas

Facilita trabalhar com índices

### Ambiente de trabalho e ferramentas para LaTeX

Para Windows: [Miktex][miktex] e [TeXnicCenter][texniccenter]

Para GNU/Linux: [TeX Live][texlive] e qualquer editor de texto

<pre class="terminal">
<code>
# apt-get install texlive
</code>
</pre>

### Escrevendo um simples artigo científico seguindo regras ABNT

O LaTeX tem a capacidade de formatar o documento final seguindo normas de
formatação específicas através de classes, para as normas ABNT utiliza-se a
suíte [abnTeX2][abntex], composta por uma classe, por pacotes de citação e de
formatação de estilos bibliográficos.  Está disponível em versões recentes
tanto do [TeX Live][texlive] quanto do [MiKTeX][miktex], em Debian ele esta
disponível no pacote `texlive-publishers`

<pre class="terminal">
<code>
# apt-get install texlive-publishers
</code>
</pre>

Exemplo simples de artigo LaTeX usando a classe `abntex2`:

{% highlight latex %}
\documentclass{abntex2}

\begin{document}

\title{Simples exemplo de artigo sob as normas ABNT}

\author{Joenio Costa}

\maketitle

\section{Lorem ipsum dolor sit amet}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam
lectus.  Sed sit amet ipsum mauris. Maecenas congue ligula ac quam
viverra nec consectetur ante hendrerit.

\subsection{Vivamus fermentum semper porta}

Vivamus fermentum semper porta. Nunc diam velit, adipiscing ut tristique
vitae, sagittis vel odio. Maecenas convallis ullamcorper ultricies.
Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis
velit, id fringilla sem nunc vel mi.

\section{Suspendisse lectus leo}

Suspendisse lectus leo, consectetur in tempor sit amet, placerat quis
neque.  Etiam luctus porttitor lorem, sed suscipit est rutrum non. Curabitur
lobortis nisl a enim congue semper.

\end{document}
{% endhighlight %}

Para gerar o documento PDF vamos utilizar o `make` para automatizar a sua construção:

<pre class="terminal">
<code>
# apt-get install latex-mk
</code>
</pre>

Crie um arquivo chamado `Makefile`:

{% highlight make %}
NAME= abntex2-exemplo
CLEAN_FILES+= abntex2-exemplo.sigla* *symbols* imagens/*~ *.nav *.snm

GZCAT= zcat
USE_PDFLATEX= true # directly generate .pdf files from the .tex
VIEWPDF= evince

include /usr/share/latex-mk/latex.gmk
{% endhighlight %}

Execute o comando para compilar o arquivo _.tex_ e gerar o resultado final em PDF:

<pre class="terminal">
<code>
$ make
</code>
</pre>

Mostrar como criar:

* Negrito
* Itálico
* Citar referência
* Parágrafos
* Listas
* Tabelas
* Imagens

## R-Project

### Introdução

R é uma linguagem e um ambiente de desenvolvimento integrado, para cálculos estatísticos e gráficos.

Foi criada originalmente por Ross Ihaka e por Robert Gentleman no departamento de Estatística da universidade de Auckland, Nova Zelândia.

R é uma linguagem e ambiente similar ao S - pode ser considerado uma implementação distinta do S; embora com importantes diferenças, muitos códigos escritos para o S rodam inalterados no R. A implementação comercial de S é S-PLUS.

O código fonte do R está disponível sob a licença GNU GPL e as versões binárias pré-compiladas são fornecidas para Windows, Macintosh, e muitos sistemas operacionais Unix/Linux.

R é também altamente expansível com o uso dos pacotes, que são bibliotecas para funções específicas ou áreas de estudo específicas.

Um conjunto de pacotes é incluído com a instalação de R, com muito outros disponíveis na rede de distribuição do R (em inglês CRAN).

A linguagem R é largamente usada entre estatísticos e data miners para desenvolver software de estatística6 7 e análise de dados.7 Inquéritos e levantamentos de data miners mostram que a popularidade do R aumentou substancialmente nos últimos anos.8 

Existem diversas GUI para R, incluindo JGR, RKWard, SciViews-R, Rcmdr e, mais recentemente, RStudio.

Muitos editores oferecem recursos que facilitam o trabalho com o R: Emacs, Vim, jEdit, Kate, Tinn-R GUI/Editor, entre outros. Existem plug-ins para uso com a IDE Eclipse e Vim.

Software construído de modo colaborativo, com novos pacotes e GUIs incluídos a cada intervalo de tempo, antecipando-se até a alguns outros pacotes proprietários, como o complemento com o teste de Scott-Knott para a Análise de Variâncias ANOVA.

### Ambiente de trabalho e ferramentas para R-Project

Instalação em Debian Linux:

Pacote para R Project e suas dependencias `r-recommended`:

<pre class="terminal">
<code>
# apt-get install r-recommended
</code>
</pre>

Instalação em Windows faça download em:

* http://nbcgib.uesc.br/mirrors/cran/

### Análise estatística de dados científicos

Seguir o [passo-a-passo][a-sample-session]...

### Gerando gráficos com o R

(mostrar na linha de comando do R como gerar gráficos)

## knitr

### Juntando o LaTeX com o R-Project

Para instalar o `knitr` no Linux:

<pre class="terminal">
<code>
# apt-get install r-cran-rcurl r-cran-rgl r-cran-xml
</code>
</pre>

{% highlight R %}
> install.packages("knitr", dependencies = TRUE)
{% endhighlight %}

"a instalacao demora um pouco, compila um monte de coisas..."

Carrega biblioteca "knitr" no ambiente R:

{% highlight R %}
> library(knitr)
{% endhighlight %}

Gera arquivo `.tex` com figuras geradas pelo R:

{% highlight R %}
knit("knitr-exemplo.Rnw")
{% endhighlight %}

## Referências

Referências utilizadas como base na preparação deste mini-curso:

* [knitr-book - Dynamic Documents with R and knitr][knitr-book]
* [Integração Project R e LATEX][integracao-project-r-e-latex]
* [Material do Mini Curso de Latex da JAI 2011][mini_curso_latex]
* [Getting Started with Sweave: R, LaTeX, Eclipse, StatET, & TeXlipse][getting-started-with-sweave]
* [An Introduction to R - Appendix A: A sample session][a-sample-session]
* [O que é o software livre?][free-sw]
* [Software livre][Software_livre]
* [InProprietário - O Mundo do Software Livre][inproprietario]
* [Direitos Autorais ou a Lei 9610/98 sem pânico :D][direitos-autorais]
* [História do software livre][historia-do-software-livre]
* [Curso de LaTeX - Aula Zero][curso-de-latex]
* [R (linguagem de programação)][r]
* [Direito autoral][direito-autoral]

[eneds]: http://eneds2015.wix.com/eneds
[latex]: http://www.latex-project.org
[r-project]: http://www.r-project.org
[knitr]: http://yihui.name/knitr
[knitr-book]: http://github.com/yihui/knitr-book
[a-sample-session]: http://cran.r-project.org/doc/manuals/r-release/R-intro.html#A-sample-session
[integracao-project-r-e-latex]: http://softwarelivre.org/dmontieraragao/blog/integracao-project-r-e-latex
[mini_curso_latex]: http://github.com/dmarczal/mini_curso_latex
[free-sw]: http://www.gnu.org/philosophy/free-sw.html
[Software_livre]: http://pt.wikipedia.org/wiki/Software_livre
[inproprietario]: http://www.youtube.com/watch?v=7Yy0tFOKfQg
[direitos-autorais]: http://www.youtube.com/watch?v=CORG5aJRI_w
[historia-do-software-livre]: http://pt.wikipedia.org/wiki/Hist%C3%B3ria_do_software_livre
[miktex]: http://miktex.org
[texniccenter]: http://www.texniccenter.org
[curso-de-latex]: http://www.youtube.com/watch?v=SaVO8rrttDY
[texlive]: http://www.tug.org/texlive
[abntex]: http://www.abntex.net.br
[r]: http://pt.wikipedia.org/wiki/R_(linguagem_de_programa%C3%A7%C3%A3o)
[vim]: http://www.vim.org
[make]: http://www.gnu.org/software/make
[bash]: http://www.gnu.org/software/bash
[gnu]: http://www.gnu.org
[direito-autoral]: http://pt.wikipedia.org/wiki/Direito_autoral
[getting-started-with-sweave]: http://www.r-bloggers.com/getting-started-with-sweave-r-latex-eclipse-statet-texlipse
