---
title: Analizo
---

<section>
<img src='/slides/files/analizo.png' />

uma ferramenta livre e extensível para análise estática de código-fonte
</section>

<section>
<<<<<<< HEAD
=======
#### **Caracterização da complexidade estrutural em ferramentas de análise estática de código-fonte**

Joenio Marques da Costa

<span style="color:#777">Orientadora:</span> <u>Christina von Flach G. Chavez</u><br/>
<span style="color:#777">Co-orientador:</span> <u>Paulo Roberto Miranda Meirelles</u>
</section>

<section>
>>>>>>> master
# Introdução

* Suporte a múltiplas linguagens
* Software livre
* Extensível
* Capacidade de lidar com código-fonte não-compilável
</section>

<section>
<section>
<<<<<<< HEAD
# Trabalhos relacionados
</section>

<section>
<small>
AMARAL, V. Análise de evolucao de projetos de software livre através de
matrizes de evolucao. Undergraduation course conclusion project, Universidade
Federal da Bahia, 2009.
</small>

<small>
COSTA, J. Extração de informações de dependência entre módulos de
programas c/c++. Undergraduation course conclusion project, Universidade
Católica do Salvador, 2009.
</small>

<small>
JúNIOR, M. R. P. Estudo de métricas de código fonte no sistema android e
seus aplicativos. p. 82, 2015. Disponı́vel em: hhttps://fga.unb.br/tcc/software/
tcc-2015.1-engenharia-de-software/marcos-ronaldo-pereira-junior/v3-tcc.pdfi.

<small>
MEIRELLES, P. et al. A study of the relationships between source code
metrics and attractiveness in free software projects. In: Software Engineering
(SBES), 2010 Brazilian Symposium on. [S.l.: s.n.], 2010. p. 11–20.
</small>

<small>
MEIRELLES, P.; KON, F.; JR, C. S. Semi-automatic evaluation of free
software projects: A source code perspective. Salvador, Brazil, p. 42, 2011.
</small>
</section>

<section>
<small>
MORAIS, C.; MEIRELLES, P.; KON, F. Kalibro: Uma ferramenta de
configuraçao e interpretaçao de métricas de código-fonte. Undergraduation
course conclusion project, Universidade de Sao Paulo, 2009.
</small>

<small>
TERCEIRO, A.; CHAVEZ, C. Structural complexity evolution in free software
projects: A case study. In: QACOS-OSSPL 2009: Proceedings of the Joint
Workshop on Quality and Architectural Concerns in Open Source Software
(QACOS) and Open Source Software and Product Lines (OSSPL). [S.l.: s.n.],
2009.
</small>

<small>
TERCEIRO, A. et al. Understanding structural complexity evolution: A
quantitative analysis. In: Software Maintenance and Reengineering (CSMR),
2012 16th European Conference on. [S.l.: s.n.], 2012. p. 85–94.
</small>

<small>
TERCEIRO, A.; RIOS, L. R.; CHAVEZ, C. An empirical study on the
structural complexity introduced by core and peripheral developers in free
software projects. In: IEEE. Software Engineering (SBES), 2010 Brazilian
Symposium on. [S.l.], 2010. p. 21–29.
</small>
</section>
=======
## Histórico

* TERCEIRO, A.; CHAVEZ, C. Structural complexity evolution in free software
projects: A case study. In: QACOS-OSSPL 2009: Proceedings of the Joint
Workshop on Quality and Architectural Concerns in Open Source Software
(QACOS) and Open Source Software and Product Lines (OSSPL). [S.l.: s.n.],
2009.

</section>

<section>
* AMARAL, V. Análise de evolucao de projetos de software livre através de
matrizes de evolucao. Undergraduation course conclusion project, Universidade
Federal da Bahia, 2009.

* COSTA, J. Extração de informações de dependência entre módulos de
programas c/c++. Undergraduation course conclusion project, Universidade
Católica do Salvador, 2009.
</section>

<section>
* TERCEIRO, A.; RIOS, L. R.; CHAVEZ, C. An empirical study on the
structural complexity introduced by core and peripheral developers in free
software projects. In: IEEE. Software Engineering (SBES), 2010 Brazilian
Symposium on. [S.l.], 2010. p. 21–29.

* TERCEIRO, A. et al. Understanding structural complexity evolution: A
quantitative analysis. In: Software Maintenance and Reengineering (CSMR),
2012 16th European Conference on. [S.l.: s.n.], 2012. p. 85–94.
</section>

<section>
* MORAIS, C.; MEIRELLES, P.; KON, F. Kalibro: Uma ferramenta de
configuraçao e interpretaçao de métricas de código-fonte. Undergraduation
course conclusion project, Universidade de Sao Paulo, 2009.

* MEIRELLES, P. et al. A study of the relationships between source code
metrics and attractiveness in free software projects. In: Software Engineering
(SBES), 2010 Brazilian Symposium on. [S.l.: s.n.], 2010. p. 11–20.

* MEIRELLES, P.; KON, F.; JR, C. S. Semi-automatic evaluation of free
software projects: A source code perspective. Salvador, Brazil, p. 42, 2011.
</section>

<section>
* JúNIOR, M. R. P. Estudo de métricas de código fonte no sistema android e
seus aplicativos. p. 82, 2015. Disponı́vel em: hhttps://fga.unb.br/tcc/software/
tcc-2015.1-engenharia-de-software/marcos-ronaldo-pereira-junior/v3-tcc.pdfi.
</section>
</section>

<section>
mostrar trends de commits, evolucao, numero de contribuidores, cobertura de testes, etc...
>>>>>>> master
</section>

<section>
<section>
<img src='/slides/files/analizo-architecture.png' />
</section>

<section>
<img src='/slides/files/analizo-metrics-architecture.png' />
</section>
</section>

<section>
<<<<<<< HEAD
=======
mostrar doxyparse, sloccount e comunicação entre eles e analizo
</section>

<section>
>>>>>>> master
<section>
# Funcionalidades

* `metrics`
* `metrics-batch`
* `metrics-history`
* `graph`
* `tree-evolution`
* `dsm`
</section>

<section>
`analizo metrics --list`

```
acc - Afferent Connections per Class
accm - Average Cyclomatic Complexity per Method
amloc - Average Method Lines of Code
anpm - Average Number of Parameters per Method
cbo - Coupling Between Objects
dit - Depth of Inheritance Tree
lcom4 - Lack of Cohesion of Methods
loc - Lines of Code
mmloc - Max Method LOC
noa - Number of Attributes
noc - Number of Children
nom - Number of Methods
npa - Number of Public Attributes
npm - Number of Public Methods
sc - Structural Complexity
```
</section>

<section>
`analizo graph [...]`

<img src='/slides/files/analizo-graph.png' style='width: 60%; box-shadow: 0 0 6px gray'/>
</section>

<section>
`analizo dsm [...]`

<img src='/slides/files/analizo-dsm.png' style='width: 60%; box-shadow: 0 0 6px gray'/>
</section>

<section>
`analizo tree-evolution [...]`

<img src='/slides/files/analizo-evolution-matrix.png' style='width: 70%; box-shadow: 0 0 6px gray'/>
</section>
</section>

<section>
<<<<<<< HEAD
=======
como instalar?
</section>

<section>
como utilizar? interface de linha de comando...
</section>

<section>
>>>>>>> master
http://www.analizo.org

<img src='/slides/files/screenshots/analizo-site.png' style='box-shadow: 0 0 6px gray' />
</section>

<section data-background="#c4a000">
<section>
{% include slides_obrigado.html %}
</section>
<section>
### Histórico de apresentações

<small>Onde e quando esta apresentação foi realizada</small>

<ul style="font-size: 24px">
  <li>30 Setembro 2016, DCC UFBA, evento DCC Demo Day 2016</li>
</ul>
</section>
</section>
