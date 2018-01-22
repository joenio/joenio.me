---
title: Caracterização da complexidade estrutural em ferramentas de análise estática de código-fonte
theme: serif
---

<section>
### Caracterização da complexidade estrutural em ferramentas de análise estática de código-fonte
</section>

<section>
#### **Caracterização da complexidade estrutural em ferramentas de análise estática de código-fonte**

_apresentação para banca de qualificação de mestrado do
Programa de Pós-graduação em Ciência da Computação da
Universidade Federal da Bahia_

<span style="color:#777">Salvador-Ba, 08 de Julho de 2016</span>

Joenio Marques da Costa

<span style="color:#777">Orientadora:</span> <u>Christina von Flach G. Chavez</u><br/>
<span style="color:#777">Co-orientador:</span> <u>Paulo Roberto Miranda Meirelles</u>
</section>

<section>
a tecnologia de análise estática tem se desenvolvido rapidamente, mas a comparação e avaliação de técnicas e ferramentas não tem acompanhado tal velocidade

<small>
LI, P.; CUI, B. A comparative study on software vulnerability static analysis
techniques and tools. In: Information Theory and Information Security (ICITIS),
2010 IEEE International Conference on. [S.l.: s.n.], 2010. p. 521–524.
</small>

<small>
HARMAN, M. Why source code analysis and manipulation will always be important. In:
Source Code Analysis and Manipulation (SCAM), 2010 10th IEEE Working Conference
on. [S.l.: s.n.], 2010. p. 7–19.
</small>
</section>

<!--
<section>
### Motivação

_compreender a fundo o domínio de análise estática de código-fonte, suas
técnicas e limitações, compreender os aspectos de qualidade interna das
ferramentas existentes na indústria e na academia, a fim de ter
conhecimento suficiente para evoluir ferramentas deste domínio_
</section>
-->

<section>
## Objetivo

compreender as ferramentas de software para análise estática de código-fonte do
ponto de vista de sua manutenabilidade, a partir da análise de sua complexidade
estrutural, discutindo quais características arquiteturais explicam seus
atributos de qualidade interna
</section>

<section>
## Questão de pesquisa

**Q1:** Como a complexidade estrutural pode ser interpretada e explicada
para ferramentas de software do domı́nio de aplicação de análise estática
de código-fonte?
</section>

<section>
## Análise estática

análise estática de código-fonte é a atividade de obter informações acerca de
um programa a partir do seu código-fonte, tem suas origens nos estudos e
desenvolvimentos de compiladores

* Análise de performance
* Compreensão de programas
* Localizaçao de falhas
* Recuperação arquitetural
* Testes

<small>
CRUZ, D. d.; HENRIQUES, P. R.; PINTO, J. S. Code analysis: Past and present. 2009.
</small>
</section>

<section>
#### Anatomia da análise estática de código-fonte

<img src="/files/static-analysis-representation.png" style="box-shadow: 0px 0px 5px gray; background-color:white" />

  <aside class="notes">
    Temos uma suposiçao que o
    componente "Model Extraction"
    apresenta maior complexidade
    que os demais
  </aside>
</section>

<section>
### Representação intermediária

os formatos de representação intermediárias costumam ser aplicados em fins
específicos, por exemplo, a métrica de complexidade ciclomática de McCabe é
calculada através de um Grafo de Fluxo de Controle

<img src="/files/formula-cc.png" style="box-shadow: 0px 0px 5px gray" />

  <aside class="notes">
    Onde: *e* é o número de arestas;
    *n* é o número de nós; e *p* é o
    número de componentes fortemente
    conectados no grafo
  </aside>
</section>

<section data-background="files/backgrounds/tape.jpg" data-transition='zoom'>
<div class="box-white" style="text-shadow: 0px 0px 2px white; color:black; font-weight:bolder">
<h2 style="text-shadow: 0px 0px 2px white; color:black">Métricas de software</h2>

uma função cujas entradas são dados de software e cuja saı́da é um valor
numérico, que pode ser interpretado como o grau em que um software possui um
determinado atributo que afeta sua qualidade
</div>

<small style="text-shadow: 0px 0px 1px #999; font-weight: bold; color:black">
COMMITTEE, S. . S. E. S. et al. Ieee std 1061-1998—ieee standard for a software quality
metrics methodology. IEEE Computer Society, Tech. Rep, 1998.
</small>
</section>

<section data-background="files/backgrounds/tape.jpg" data-transition='zoom'>
<div class="box-white" style="text-shadow: 0px 0px 2px white; color:black; font-weight:bolder">
<h2 style="text-shadow: 0px 0px 2px white; color:black">Métricas de código-fonte</h2>

métricas de código-fonte cobrem aspectos de tamanho, complexidade e qualidade,
e podem indicar aspectos relevantes à manutenibilidade de um programa
</div>
</section>

<section data-background="files/backgrounds/tape.jpg" data-transition='zoom'>
<div class="box-white" style="text-shadow: 0px 0px 2px white; color:black; font-weight:bolder">
<h3 style="text-shadow: 0px 0px 2px white; color:black">Métricas de código-fonte coletadas</h3>

ACC, ACCM, AMLOC, ANPM, CBO, DIT, LCOM4, LOC, NOA, NOC, NOM, NPA, NPM, RFC, SC
</div>

<small style="text-shadow: 0px 0px 1px #999; font-weight: bold; color:black">
MEIRELLES, P. R. M. Monitoramento de métricas de código-fonte em projetos de
software livre. Tese (Doutorado) — Universidade de São Paulo, São Paulo, Brazil, 2013.
</small>
</section>

<section>
### ACC<br/>conexões aferentes de uma classe

_mede o número de classes que <abbr title="acessos à atributos ou métodos">acessam</abbr> a classe analisada_

<img src="/files/formula-acc.png" style="box-shadow:0px 0px 5px gray" />

<img src="/files/ci-cj.png" style="box-shadow:0px 0px 5px gray; background-color:white; padding:5px 5px 0; vertical-align:middle" /> <span style="color:#777">indica acesso à atributos ou métodos</span>
  <aside class="notes">
    Se o valor dessa métrica for
    grande, uma mudança na classe
    tem potencialmente mais efeitos
    colaterais, tornando mais
    difícil a manutenção
  </aside>
</section>

<section>
# Complexidade

quanto maior a complexidade de um sistema de software,
maior é o esforço para compreendê-lo, modificá-lo e evoluí-lo

<small>
Darcy, D. P. et al. The structural complexity of software: An experimental test. IEEE
Transactions on Software Engineering, v. 31, n. 11, p. 982–995, Nov. 2005. ISSN 0098-
5589.
</small>
</section>

<section>
## Sistemas complexos

sistemas complexos são sistemas compostos de várias partes que
interagem entre si com a habilidade de gerar novas qualidades
no comportamento coletivo

<small>
Mitchell, M. Complexity - A Guided Tour. [S.l.]: Oxford University Press, 2009.
</small>
</section>

<section>
### Sistemas de software como sistemas complexos

a partir da sua estrutura interna sistemas de software podem ser
caracterizados como um sistema complexo artificial
</section>

<section>
## Complexidade estrutural

uma medida da complexidade de software calculada em termos
do acoplamento (CBO) e coesão (LCOM4)
</section>

<section>
### CBO<br/>acoplamento entre objetos

_mede o número classes <abbr title="acessos à atributos ou métodos">acessadas</abbr> pela classe analisada_

<img src="/files/formula-cbo.png" style="box-shadow: 0px 0px 5px gray" />

<img src="/files/ci-cj.png" style="box-shadow:0px 0px 5px gray; background-color:white; padding:5px 5px 0; vertical-align:middle" /> <span style="color:#777">indica acesso à atributos ou métodos</span>
</section>

<section>
### LCOM4<br/>ausência da coesão em métodos

_mede os métodos e atributos acessados dentro de uma mesma classe_

calculado através dos componentes fracamente conectados de um grafo não-orientado
</section>

<section>
### SC<br/>complexidade estrutural

_mede a complexidade estrutural de uma classe_

<img src="/files/formula-sc.png" style="box-shadow: 0px 0px 5px gray" />
</section>

<section>
# Metodologia

1. Seleção e caracterização de ferramentas
1. Extração de métricas de código-fonte
1. Análise e interpretação dos valores das métricas
1. Cálculo do score de similaridade
</section>

<section>
## Hipóteses

* **H1:** É possível calcular valores de referência de métricas
    de código-fonte para ferramentas de análise estática a partir de um
    conjunto de softwares da academia e da indústria
* **H2:** Ferramentas de análise estática tendem a ter uma
    maior complexidade estrutural do que ferramentas de outros domínios de
    aplicação
* **H3:** Dentre as ferramentas de análise estática de
    código-fonte, aquelas desenvolvidas na indústria apresentam uma menor
    complexidade estrutural
</section>

<section>
### Seleção e coleta

a seleção de ferramentas será feita através de uma revisão estruturada para
ferramentas da academia e de uma busca livre para ferramentas da indústria

a análise de código-fonte e coleta de suas métricas será feita de forma
automatizada utilizando a ferramenta Analizo
</section>

<section>
## samate.nist.gov
</section>

<section>
## Revisão estruturada

um processo disciplinado para seleção de artigos a partir de
critérios bem definidos com o objetivo de encontrar ferramentas
de análise estática de código-fonte
</section>

<section>
### Caracterização das ferramentas

* Entrada - quais tipos de arquivos podem ser carregados na ferramenta
* Lançamentos (Releases) - quantos lançamentos por ano
* Linguagens suportadas - quais linguagens de programação a ferramenta suporta
* Tecnologia - quais tecnologias são usadas para procurar erros no código
* ...

<small>
NOVAK, J.; KRAJNC, A. et al. Taxonomy of static code analysis tools. In: IEEE.
MIPRO, 2010 Proceedings of the 33rd International Convention. [S.l.], 2010. p. 418–422.
</small>
</section>

<section>
<img src="/files/analizo.png" style="box-shadow: 0px 0px 5px gray; border-radius: 5px" />
<br/><span style="color:#555">http://analizo.org</span>

<small>
Terceiro, A. et al. Analizo: an extensible multi-language source code analysis and
visualization toolkit. In: CBSOFT-Ferramentas. [S.l.: s.n.], 2010.
</small>
</section>

<section>
### Interpretação dos valores de métricas

as métricas serão coletadas para cada módulo de cada ferramenta,
uma análise exploratória nos dará um entendimento inicial sobre
a natureza dos dados
</section>

<section>
## Resultados preliminares

✔ 315 artigos do SCAM avaliados e 9 ferramentas selecionadas

✔ 54 ferramentas da indústria avaliadas e 14 selecionadas

✔ 23 ferramentas analisadas de forma automatizada para coleta de métricas de código-fonte

✔ início da análise exploratória dos dados

✔ evolução inicial da ferramenta Analizo
</section>

<section>
### Revisão estruturada do SCAM

<img src="/files/revisao-estruturada-scam.png" style="box-shadow: 0px 0px 5px gray" />
</section>

<section>
### 23 ferramentas selecionadas

<img src="/files/ferramentas-selecionadas.png" style="box-shadow: 0px 0px 5px gray" />
</section>

<section>
# Análise exploratória
</section>

<section>
### Percentis da métrica ACC

<img src="/files/percentis-acc.png" style="box-shadow: 0px 0px 5px gray" />
</section>

<section>
### Média não é representativa

<table><tr><td>
<img src="/files/histograma-acc.png" style="box-shadow: 0px 0px 5px gray; width:100%" />
</td><td>
<img src="/files/curva-normal.png" style="box-shadow: 0px 0px 5px gray" />
</td></tr></table>

<small>
Lanza e Marinescu(2006) Michele Lanza e Radu Marinescu. Object-Oriented Metrics in Practice:
Using Software Metrics to Characterize, Evaluate and Improve the Design of Object-Oriented
Systems. Hardcover.
</small>
</section>

<section>
#### Métricas ACC e CBO no percentil 90

<img src="/files/tabela-metricas.png" style="box-shadow: 0px 0px 5px gray" />
</section>

<section>
<img src="/files/grafico-acc-cbo.png" style="box-shadow: 0px 0px 5px gray" />
</section>

<section>
### Evolução do Analizo

em 18 de Fevereiro de 2016 lançamos, no contexto deste trabalho,
a versão 1.19.0 da ferramenta Analizo
</section>

<section>
### Cronograma

<img src="/files/cronograma-qualificacao.png" />
</section>

<section data-background="#c4a000">
<section>
{% include slides_obrigado.html %}
</section>
<section>
### Créditos

<small>Imagens utilizadas nesta apresentação</small>

<ul style="font-size: 24px">
  <li>http://www.flickr.com/photos/odahumanity/4290838678</li>
</ul>
</section>
<section>
### Histórico de apresentações

<small>Onde e quando esta apresentação foi realizada</small>

<ul style="font-size: 24px">
  <li>12 Julho 2016, UFBA DCC, Salvador, prévia da qualificação</li>
</ul>
</section>
</section>
