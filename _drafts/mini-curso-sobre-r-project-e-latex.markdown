---
title: Curso sobre integração entre R-Project e LaTeX
tags: tecnologia r-project latex
---

Mini-curso realizado durante o **ENEDS - Encontro Nacional de Engenharia e
Desenvolvimento Social** - _"Por trás de cada tecnologia, há sempre uma
ideologia"_.

| Data do evento        | De 12 a 14 de Agosto 2015               |
| Data do mini-curso    | Dia 14 de Agosto 2015 às ??             |
| Onde                  | Universidade Federal da Bahia           |
| Público do mini-curso | Estudantes de graduação engenharia      |
| Site                  | [http://eneds2015.wix.com/eneds][eneds] |


### Resumo

> Este mini-curso tem como objetivo apresentar o R-Project e o LaTeX, uma
> linguagem de programação para cálculos estatísticos e criação de gráficos,
> largamente utilizado para realizar análises de dados em pesquisas
> científicas, e um sistema para elaboração e diagramação de textos de alta
> qualidade muito utilizado para escrever artigos científicos. Ambos são
> softwares livres e seguem princípios éticos que garantem liberdades
> essenciais aos seus usuários, estes princípios garantem transparência aos
> usuários e proporcionam transferência de tecnologia à toda a sociedade.

Softwares livres apresentados no mini-curso:

* [LaTeX][latex] - Ambiente para diagramação de textos de alta qualidade
* [R-Project][r-project] - Linguagem de programação para cálculo estatísticos
* [knitr][knitr] - Extensão para integrar R-Project e LaTeX

<!-- Sweave - http://www.statistik.lmu.de/~leisch/Sweave/ -->

Outras ferramentas utilizadas como apoio:

* Vim - editor de textos
* Make e Makefiles - automatização de comandos
* Terminal e linha de comando

Roteiro do mini-curso:

1. Filosofia, princípios e história do software livre
  * Princípios e questões filosóficas
  * História do projeto GNU, FSF, RMS, ...
  * Licenças de software, copyright, copyleft
  * Evolução do movimento do software livre
  * Modelo de produção aberto e distribuído de software
  * Vantagens técnicas e sociais do software livre
  * ...(algo aqui)...
  * Um retrato do software livre hoje
  * Exemplos notáveis de projetos de software livre
  * Exemplos locais de projetos de software livre
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

Instalação em Debian Linux:

Pacote para R Project e suas dependencias:

* r-recommended

Pacote para LaTeX e suas dependencias:

* texlive

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

## Referências

Referências utilizadas como base para preparar este mini-curso:

* [knitr-book][knitr-book] - Dynamic Documents with R and knitr

Dicas sobre integracao LaTeX + R em Linux:

* [Integração Project R e LATEX][integracao-project-r-e-latex]
* [Material do Mini Curso de Latex da JAI 2011][mini_curso_latex]

Tutorial muito bom sobre integrar Latex + R + Eclispe em Windows

* http://www.r-bloggers.com/getting-started-with-sweave-r-latex-eclipse-statet-texlipse/

Passo-a-passo sobre uso do R-Project via console utilizado no mini-curso:

* [An Introduction to R][a-sample-session] - Appendix A: A sample session

[eneds]: http://eneds2015.wix.com/eneds
[latex]: http://www.latex-project.org
[r-project]: http://www.r-project.org
[knitr]: http://yihui.name/knitr
[knitr-book]: http://github.com/yihui/knitr-book
[a-sample-session]: http://cran.r-project.org/doc/manuals/r-release/R-intro.html#A-sample-session
[integracao-project-r-e-latex]: http://softwarelivre.org/dmontieraragao/blog/integracao-project-r-e-latex
[mini_curso_latex]: http://github.com/dmarczal/mini_curso_latex
