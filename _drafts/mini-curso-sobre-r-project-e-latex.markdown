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

Por "software livre" devemos entender aquele software que respeita a liberdade
e senso de comunidade dos usuários. Grosso modo, os usuários possuem a
liberdade de executar, copiar, distribuir, estudar, mudar e melhorar o
software. Assim sendo, “software livre” é uma questão de liberdade, não de
preço. Para entender o conceito, pense em “liberdade de expressão”, não em
“cerveja grátis”

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
* Eventualmente contando com contribuição de voluntários
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

O LaTeX é uma linguagem de marcação e um ambiente para diagramação de textos
utilizado amplamente na produção de textos matemáticos e científicos devido a
sua alta qualidade tipográfica.

Foi desenvolvido na década de 80 por Leslie Lamport e possui abstrações para
lidar facilmente com bibliografias, citações, formatos de páginas e referência
cruzada. A ideia central do LaTeX é distanciar o autor o máximo possível da
apresentação visual, pois a constante preocupação com a
formatação desvia o pensamento do conteúdo escrito.

Ao invés de trabalhar com ideias visuais, o usuário é encorajado a trabalhar
com conceitos mais lógicos — e, consequentemente, mais independentes da
apresentação — como capítulos, seções, ênfase e tabelas, sem contudo impedir o
usuário da liberdade de indicar, expressamente, declarações de formatação.

### Ambiente de trabalho e ferramentas para LaTeX

<!--
Para Windows: [Miktex][miktex] e [TeXnicCenter][texniccenter]
-->

Em sistemas GNU/Linux o [TeX Live][texlive] fornece todas as ferramentas
necessárias para trabalhar com elaboração de textos em LaTeX.

<pre class="terminal">
<code>
# apt-get install texlive texlive-lang-portuguese
</code>
</pre>

Além do `texlive` é necessário ter algum editor de texto para escrever os
documentos.

### Escrevendo um simples artigo científico seguindo regras ABNT

O LaTeX tem a capacidade de formatar o documento final seguindo normas de
formatação específicas através de classes, para as normas ABNT utiliza-se a
suíte [abnTeX2][abntex], composta por classes e pacotes de citação para
formatação de estilos bibliográficos. Está disponível em versões recentes tanto
do [TeX Live][texlive] quanto do [MiKTeX][miktex], em Debian ele esta
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

Para gerar o documento PDF vamos utilizar o `make` para automatizar a sua
construção.

Make é uma ferramenta para controlar criação de executáveis e outros arquivos
de programas a partir de códigos fontes. Toda a informação de como construir
programar é mantida em arquivos chamados `makefile`, este arquivo lista como
construir programas seguindo passo-a-passo instruções previamente elaboradas.

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

Vamos ver algumas das marcações mais comuns utilizadas no LaTeX:

#### Como marcar fonte como negrito?

<table>
<tr>
<td class='noborder'>
{% highlight latex %}
Use a marcação correta e seu {\bf texto ficará negrito}.
{% endhighlight %}
</td>
<td class='noborder'>
<img src='/samples/latex-exemplo/negrito.png' />
</td>
</tr>
</table>

#### Como marcar fonte como itálico?

<table>
<tr>
<td class='noborder'>
{% highlight latex %}
Use a marcação correta e seu {\it texto ficará itálico}.
{% endhighlight %}
</td>
<td class='noborder'>
<img src='/samples/latex-exemplo/italico.png' />
</td>
</tr>
</table>

#### Como criar parágrafos?

<table>
<tr>
<td class='noborder'>
{% highlight latex %}
Textos separados por linhas em branco.

Serão interpretados como parágrafos.
{% endhighlight %}
</td>
<td class='noborder'>
</td>
</tr>
</table>

#### Como criar lista de itens?

<table>
<tr>
<td class='noborder'>
{% highlight latex %}
\begin{itemize}
  \item Placerat erat, non tristique elit urna et turpis
  \item Quisque mi metus, ornare sit amet fermentum et
  \item Tincidunt et orci
  \item Fusce eget orci a orci congue vestibulum
\end{itemize}
{% endhighlight %}
</td>
<td class='noborder'>
<img src='/samples/latex-exemplo/itemize.png' />
</td>
</tr>
</table>

#### Como criar tabelas?

<table>
<tr>
<td class='noborder'>
{% highlight latex %}
\begin{tabular}{ l c r }
  1 & 2 & 3 \\
  4 & 5 & 6 \\
  7 & 8 & 9 \\
\end{tabular}
{% endhighlight %}
</td>
<td class='noborder'>
<img src='/samples/latex-exemplo/tabular.png' />
</td>
</tr>
</table>

#### Como incluir imagens?

<table>
<tr>
<td class='noborder'>
{% highlight latex %}
\begin{figure}[h]
\center
\includegraphics[scale=0.3]{heckert_gnu_small.png}
\caption{GNU small}
\end{figure}
{% endhighlight %}
</td>
<td class='noborder'>
<img src='/samples/graphics-exemplo/includegraphics.png' />
</td>
</tr>
</table>

#### Como citar referências bibliográficas?

<table>
<tr>
<td class='noborder'>
{% highlight latex %}
\bibliographystyle{ieeetr}

Lorem ipsum dolor\cite{Travassos2002} ...

\bibliography{bibliografia}
{% endhighlight %}
</td>
<td class='noborder'>
<img src='/samples/biblatex-exemplo/bibliografia.png' />
</td>
</tr>
</table>

#### Codificação e acentuação

<table>
<tr>
<td class='noborder'>
{% highlight latex %}
\documentclass{article}
\usepackage[utf8]{inputenx}
{% endhighlight %}
</td>
<td class='noborder'>
</td>
</tr>
</table>

#### Como criar um sumário?

<table>
<tr>
<td class='noborder'>
{% highlight latex %}
\tableofcontents
{% endhighlight %}
</td>
<td class='noborder'>
<img src='/samples/latex-exemplo/tableofcontents.png' />
</td>
</tr>
</table>

#### Como gerar sumário com a lista de figuras?

<table>
<tr>
<td class='noborder'>
{% highlight latex %}
\listoffigures
{% endhighlight %}
</td>
<td class='noborder'>
<img src='/samples/listof-exemplo/listoffigures.png' />
</td>
</tr>
</table>

#### Como gerar sumário com lista de tabelas?

<table>
<tr>
<td class='noborder'>
{% highlight latex %}
\listoftables
{% endhighlight %}
</td>
<td class='noborder'>
<img src='/samples/listof-exemplo/listoftables.png' />
</td>
</tr>
</table>

#### Idioma e regras gramaticais em português

<table>
<tr>
<td class='noborder'>
{% highlight latex %}
\usepackage[brazil]{babel}

\tableofcontents
\listoffigures
\listoftables
{% endhighlight %}
</td>
<td class='noborder'>
<img src='/samples/babel-exemplo/babel.png' />
</td>
</tr>
</table>

#### Como elaborar fórmulas matemáticas?

<table>
<tr>
<td class='noborder'>
{% highlight latex %}
$z=\sqrt{x^2+y^2}$
{% endhighlight %}
</td>
<td class='noborder'>
<img src='/samples/match-exemplo/match.png' />
</td>
</tr>
</table>

## R-Project

### Introdução

R é uma linguagem e um ambiente de desenvolvimento integrado para cálculos estatísticos e gráficos,
Foi criada originalmente por Ross Ihaka e por Robert Gentleman no departamento de Estatística da universidade de Auckland, Nova Zelândia.

R é também altamente expansível com o uso dos pacotes, que são bibliotecas para funções específicas ou áreas de estudo específicas.
Um conjunto de pacotes é incluído com a instalação de R, com muito outros disponíveis na rede de distribuição do R (em inglês CRAN).

A linguagem R é largamente usada entre estatísticos e data miners para desenvolver software de estatística e análise de dados.

Existem diversas interfaces gráficas para R, incluindo JGR, RKWard, SciViews-R, Rcmdr e, mais recentemente, RStudio.

### Ambiente de trabalho e ferramentas para R-Project

Instalação em Debian GNU/Linux pode ser feito instalando o pacote
`r-recommended`, este pacote fornece o R Project, suas dependencias e inúmeros
pacotes adicionais.

<pre class="terminal">
<code>
# apt-get install r-recommended
</code>
</pre>

<!--
Instalação em Windows faça download em:

* http://nbcgib.uesc.br/mirrors/cran/
-->

### Análise estatística de dados científicos

Seguir o [passo-a-passo][a-sample-session]...

#### Iniciar o console R

<pre class="terminal">
<code>
$ R
</code>
</pre>

Isto disponibiliza o console do ambiente R para interagirmos com a linguagem
através dos seus comandos.

#### Documentação e ajuda

{% highlight R %}
> help.start()
{% endhighlight %}

Abre o navegador apontando para a documentação da linguagem.

#### Gerando valores aleatórios

{% highlight R %}
> x <- rnorm(50)
> y <- rnorm(x)
{% endhighlight %}

Gera dois "pseudo-aleatório" vetores normais.

#### Gerar gráficos

{% highlight R %}
> plot(x, y)
{% endhighlight %}

Plota os pontos em um plano, uma janela com o gráfico abre automaticamente.

#### Listar objetos

{% highlight R %}
> ls()
{% endhighlight %}

Exibe os objetos R na espaço de trabalho "workspace".

#### Remover objetos do espaço de trabalho

{% highlight R %}
> rm(x, y)
{% endhighlight %}

Remove objetos não mais utilizados.

#### Gerando lista de valores / vetores

{% highlight R %}
> x <- 1:20
{% endhighlight %}

Cria um vedor (1, 2, ..., 20) e armazena na variável x.

#### Gera outro vetor alterando cada valor de x

{% highlight R %}
> w <- 1 + sqrt(x)/2
{% endhighlight %}

Um vetor 'peso' de desvios padrão.

#### Visualizando os dados em colunas

{% highlight R %}
> dummy <- data.frame(x = x, y = x + rnorm(x) * w)
> dummy
{% endhighlight %}

<!-- fix* -->

Cria um quadro de dados de 2 colunas, x e y, e exibe na tela.

#### Regressão linear simples

{% highlight R %}
> fm <- lm(y ~ x, data=dummy)
> summary(fm)
{% endhighlight %}

Executa uma regressão linear simples e exibe a análise. Com Y à esquerda do til
~, estamos modelando Y dependente X.

#### Regressão ponderada

{% highlight R %}
> fm1 <- lm(y ~ x, data=dummy, weight=1/w^2)
> summary(fm1)
{% endhighlight %}

Sabendo o desvio-padrão, podemos fazer uma regressão ponderada.

<!--
attach(dummy)
Make the columns in the data frame visible as variables.
-->

#### Regressão local não-paramétrica

{% highlight R %}
> lrf <- lowess(x, y)
{% endhighlight %}

Executa uma função de regressão local não-paramétrica.


#### Gráfico de pontos padrão

{% highlight R %}
> plot(x, y)
{% endhighlight %}

<!--
lines(x, lrf$y)
Add in the local regression.
-->

<!--
abline(0, 1, lty=3)
The true regression line: (intercept 0, slope 1).
-->

#### Linha de regressão não-ponderada

_Sem fechar a janela do gráfico gerada pelo plot()_

{% highlight R %}
> abline(coef(fm))
{% endhighlight %}

#### Linha de regressão ponderada

_Sem fechar a janela do gráfico gerada pelo plot()_

{% highlight R %}
> abline(coef(fm1), col = "red")
{% endhighlight %}

Weighted regression line.

detach()
Remove data frame from the search path.

#### Checar se há heteroscedasticidade

{% highlight R %}
> plot(fitted(fm), resid(fm),
     xlab="Fitted values",
     ylab="Residuals",
     main="Residuals vs Fitted")
{% endhighlight %}

Uma regressão padrão com gráfico para diagnóstico de heteroscedasticidade.

_Heteroscedasticidade é o fenômeno estatístico que ocorre quando o modelo de
hipótese matemático apresenta variâncias para Y e X(X1, X2, X3,..., Xn) não
iguais para todas as observações_ (fonte: [Wikipédia][heteroscedasticidade])

#### Verificar se há assimetrie

{% highlight R %}
> qqnorm(resid(fm), main="Residuals Rankit Plot")
{% endhighlight %}

Um gráfico para checar assimetria, curtose e valores discrepantes.

#### Limpar workspace

{% highlight R %}
> rm(fm, fm1, lrf, x, dummy)
{% endhighlight %}

<!--

#### Analisando conjunto de dados "morley"

A próxima sessão irá analisar dados do experimento clássico de Michelson para
medir a velocidade da luz. Este _dataset_ (conjunto de dados) está disponível no
objeto `morley`, mas iremos ler manualmente para ilustrar a função `read.table`.

{% highlight R %}
> filepath <- system.file("data", "morley.tab" , package="datasets")
> filepath
{% endhighlight %}

Pega o caminho completo do arquivo de dados.

{% highlight R %}
> file.show(filepath)
{% endhighlight %}

(opicional) Exibe o arquivo na tela.

{% highlight R %}
> mm <- read.table(filepath)
> mm
{% endhighlight %}

Lê os dados do experimento de Michelson em uma tabela de dados, exibe isto na
tela.

Existem cinco experimentos (representado pela couma Expt) e cada experimento
tem 20 execuções (coluna Run) e a coluna Speed representa a velocidade da luz,
adequadamente codificada.

{% highlight R %}
> mm$Expt <- factor(mm$Expt)
> mm$Run <- factor(mm$Run)
{% endhighlight %}

Altera Expt e Run em fatores e atribui às variáveis _mm$Expt_ e _mm$Run_.

{% highlight R %}
> attach(mm)
{% endhighlight %}

Make the data frame visible at position 3 (the default).

{% highlight R %}
> plot(Expt, Speed, main="Speed of Light Data", xlab="Experiment No.")
{% endhighlight %}

Compara os cinco experimentos usando _diagrama de caixas (box plot)_ simples.

{% highlight R %}
> fm <- aov(Speed ~ Run + Expt, data=mm)
> summary(fm)
{% endhighlight %}

Analyze as a randomized block, with ‘runs’ and ‘experiments’ as factors.

{% highlight R %}
> fm0 <- update(fm, . ~ . - Run)
> anova(fm0, fm)
{% endhighlight %}

Fit the sub-model omitting ‘runs’, and compare using a formal analysis of variance.

{% highlight R %}
> detach()
> rm(fm, fm0)
{% endhighlight %}

Clean up before moving on.

We now look at some more graphical features: contour and image plots.

{% highlight R %}
> x <- seq(-pi, pi, len=50)
> y <- x
{% endhighlight %}

x is a vector of 50 equally spaced values in the interval [-pi\, pi]. y is the same.

{% highlight R %}
> f <- outer(x, y, function(x, y) cos(y)/(1 + x^2))
{% endhighlight %}

f is a square matrix, with rows and columns indexed by x and y respectively, of values of the function cos(y)/(1 + x^2).

{% highlight R %}
> oldpar <- par(no.readonly = TRUE)
> par(pty="s")
{% endhighlight %}

Save the plotting parameters and set the plotting region to “square”.

{% highlight R %}
> contour(x, y, f)
> contour(x, y, f, nlevels=15, add=TRUE)
{% endhighlight %}

Make a contour map of f; add in more lines for more detail.

{% highlight R %}
> fa <- (f-t(f))/2
{% endhighlight %}

fa is the “asymmetric part” of f. (t() is transpose).

{% highlight R %}
> contour(x, y, fa, nlevels=15)
{% endhighlight %}

Make a contour plot, …

{% highlight R %}
> par(oldpar)
{% endhighlight %}

… and restore the old graphics parameters.

{% highlight R %}
> image(x, y, f)
{% endhighlight %}

Make some high density image plots, (of which you can get hardcopies if you wish), …

{% highlight R %}
> objects(); rm(x, y, f, fa)
{% endhighlight %}

… and clean up before moving on.

R can do complex arithmetic, also.

{% highlight R %}
> th <- seq(-pi, pi, len=100)
> z <- exp(1i*th)
{% endhighlight %}

1i is used for the complex number i.

{% highlight R %}
> par(pty="s")
> plot(z, type="l")
{% endhighlight %}

Plotting complex arguments means plot imaginary versus real parts. This should be a circle.

{% highlight R %}
> w <- rnorm(100) + rnorm(100)*1i
{% endhighlight %}

Suppose we want to sample points within the unit circle. One method would be to take complex numbers with standard normal real and imaginary parts …

{% highlight R %}
> w <- ifelse(Mod(w) > 1, 1/w, w)
{% endhighlight %}

… and to map any outside the circle onto their reciprocal.

{% highlight R %}
> plot(w, xlim=c(-1,1), ylim=c(-1,1), pch="+",xlab="x", ylab="y")
> lines(z)
{% endhighlight %}

All points are inside the unit circle, but the distribution is not uniform.

{% highlight R %}
> w <- sqrt(runif(100))*exp(2*pi*runif(100)*1i)
> plot(w, xlim=c(-1,1), ylim=c(-1,1), pch="+", xlab="x", ylab="y")
> lines(z)
{% endhighlight %}

The second method uses the uniform distribution. The points should now look more evenly spaced over the disc.

{% highlight R %}
> rm(th, w, z)
{% endhighlight %}

Clean up again.

{% highlight R %}
> q()
{% endhighlight %}

Quit the R program. You will be asked if you want to save the R workspace, and for an exploratory session like this, you probably do not want to save it.

-->

### Gerando gráficos com o R

(mostrar na linha de comando do R como gerar gráficos)

## knitr

### Juntando o LaTeX com o R-Project

O `knitr` é um pacote para o R com propósito de ser um motor transparente para
gerar relatórios dinâmicos, isto significa que o usuário tem acesso total
a todas as entradas e saídas disponívels no R (exemplo 1 + 2 produz 3 em um
terminal R e o knitr permite usuário decidir como irá definir 1 + 2 em seu
relatório). `knitr` tenta ser consistente com como funciona o terminal do R, ou
seja, todo código executado no terminal R, será executado da mesma forma pelo
`knitr`.

Para instalar o `knitr` no Linux:

<pre class="terminal">
<code>
# apt-get install r-cran-rcurl r-cran-rgl r-cran-xml
</code>
</pre>

<!--
* r-cran-codetools
* r-cran-evaluate
* r-cran-stringr
* r-cran-digest
-->

{% highlight R %}
> install.packages("knitr", dependencies = TRUE)
{% endhighlight %}

"a instalacao demora um pouco, compila um monte de coisas..."

Crie um arquivo chamado `exemplo.Rnw` com o seguinte conteúdo:

{% highlight latex %}
\documentclass{article}
\begin{document}
\title{Exemplo de artigo com graficos R}
\maketitle

\section{Lorem ipsum dolor sit amet}

We examine the relationship between speed and stopping
distance using a linear regression model:

$Y = \beta_0 + \beta_1 x + \epsilon$.

\subsection{Vivamus fermentum semper porta}

<<model-one, fig.width=4, fig.height=3, fig.align='center'>>=
par(mar = c(4, 4, 1, 1), mgp = c(2, 1, 0), cex = 0.8)
plot(cars, pch = 20, col = 'darkgray')
fit <- lm(dist ~ speed, data = cars)
abline(fit, lwd = 2)
@

\end{document}
{% endhighlight %}

A extensão Rnw é uma combinação de R + nw onde nw significa Noweb (= No + web).


Carrega biblioteca "knitr" no ambiente R:

{% highlight R %}
> library(knitr)
{% endhighlight %}

Gera arquivo `.tex` com figuras geradas pelo R:

{% highlight R %}
knit("exemplo.Rnw")
{% endhighlight %}

O comando acima irá traduzir o código R para comandos nativos do LaTeX, de forma que
o documento LaTeX poderá ser gerado normalmente como qualquer outro documento.

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
[heteroscedasticidade]: http://pt.wikipedia.org/wiki/Heteroscedasticidade
