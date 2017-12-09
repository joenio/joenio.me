---
title: Sustentabilidade técnica de software acadêmico - Uma reflexão sobre o domínio de análise estática
theme: serif
---

<section>
#### Sustentabilidade técnica de software acadêmico:

### Uma reflexão sobre o domínio de análise estática

</section>

<section>
#### Sustentabilidade técnica de software acadêmico: Uma reflexão sobre o domínio de análise estática

<small>_apresentação para banca examinadora da defesa de mestrado do Programa de Pós-graduação em Ciência da Computação da Universidade Federal da Bahia - UFBA_</small>

Joenio Marques da Costa

Orientadora: Profa. Dra. Christina von Flach G. Chavez<br/>
Co-orientador: Prof. Dr. Paulo Roberto Miranda Meirelles

<small>Salvador-Bahia, 19 de Dezembro de 2017</small>
</section>


<section>
### A Ciência depende de software

À medida que o software se torna uma tecnologia generalizada em praticamente
todos os aspectos da condição humana, também é inserido firmemente no meio
acadêmico, software analisa dados, simula o mundo real, e visualiza resultados.

<small>
GOBLE, C. Better software, better research. IEEE Internet Computing, IEEE, v.
18, n. 5, p. 4–8, 2014.
</small>
</section>


<section>
### Motivação

O software acadêmico sofre de desordem caótica disfuncional
(DCD):

Existência de muitos projetos com poucos usuários;
ciclos de vida curtos que terminam em paralelo ao financiamento inicial;
comunidades desconectadas e paralelas;
incompatibilidades entre projetos;
tentativas aparentemente não coordenadas de "reiniciar" tudo (_re-boots_).

<small>
HOWISON, J. et al. Understanding the scientific software ecosystem and its
impact: Current and future measures. Research Evaluation, v. 24, n. 4, p.
454–470, 2015. Disponível em: http://dx.doi.org/10.1093/reseval/rvv014i.
</small>
</section>


<section>
### Objetivo

Analisar os _projetos de software acadêmico de análise estática e sua sustentabilidade técnica_
com o propósito de _caracterizar_
com respeito a _publicização, reconhecimento e ciclo de vida_
na perspectiva do _cientista -- desenvolvedor ou usuário -- de software acadêmico_
no contexto das _conferências de Engenharia de Software ASE e SCAM_.
</section>


<section>
### Questão de pesquisa

**Questão:** Como a desordem caótica disfuncional (DCD) pode explicar a
sustentabilidade técnica dos projetos do ecossistema de software acadêmico de
análise estática em termos de publicização, reconhecimento e estágio de
evolução?
</section>


<section>
### Software acadêmico

Software acadêmico (_academic software_) é todo software usado para
coletar, processar ou analisar resultados de pesquisas com intenção de
publicação na literatura acadêmica (periódicos, revistas, conferências,
monografias, livros ou teses), incluindo desde protótipos escritos pelos
próprios cientistas, a produtos completos desenvolvidos profissionalmente.

<small>
ALLEN, A. et al. Engineering academic software (dagstuhl perspectives workshop
16252). In: Dagstuhl Manifestos. [S.l.]: Schloss Dagstuhl-Leibniz-Zentrum fuer
Informatik, 2017. v. 6, n. 1.
</small>
</section>


<section>
### Análise estática

Análise estática é a atividade de obter informações acerca de um programa a
partir do seu código-fonte, tem suas origens nos estudos e desenvolvimentos de
compiladores

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
### Sustentabilidade de software

Sustentabilidade é um tema multidisciplinar, sistêmico e com múltiplas
dimensões:

* Individual
* Social
* Econômica
* Ambiental
* Técnica

<small>
BECKER, C. et al. The karlskrona manifesto for sustainability design. CoRR,
abs/1410.6968, 2014. Disponı́vel em: hhttp://arxiv.org/abs/1410.6968i.
</small>
</section>


<section>
### Sustentabilidade técnica de software

A dimensão técnica diz respeito a capacidade do software de perdurar e de
continuar sendo suportado ao longo do tempo, implicando em qualidades de
longevidade e manutenção.

<small>
VENTERS, C. C. et al. Software sustainability: The modern tower of babel. In:
CEUR Workshop Proceedings. [S.l.: s.n.], 2014. v. 1216, p. 7–12.
</small>
</section>


<section>
### Ecossistema de software acadêmico

<img src="files/scientific-reputation-diagram.png" style="box-shadow:0px 0px 5px gray;background:white;padding:10px" />

<small>
HOWISON, J.; HERBSLEB, J. D. Scientific software production: incentives and
collaboration. In: Proceedings of the ACM 2011 conference on Computer supported
cooperative work. [S.l.: s.n.], 2011. p. 513–522.
<small>
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

<img src="files/formula-acc.png" style="box-shadow:0px 0px 5px gray" />

<img src="files/ci-cj.png" style="box-shadow:0px 0px 5px gray; background-color:white; padding:5px 5px 0; vertical-align:middle" /> <span style="color:#777">indica acesso à atributos ou métodos</span>
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

<img src="files/formula-cbo.png" style="box-shadow: 0px 0px 5px gray" />

<img src="files/ci-cj.png" style="box-shadow:0px 0px 5px gray; background-color:white; padding:5px 5px 0; vertical-align:middle" /> <span style="color:#777">indica acesso à atributos ou métodos</span>
</section>

<section>
### LCOM4<br/>ausência da coesão em métodos

_mede os métodos e atributos acessados dentro de uma mesma classe_

calculado através dos componentes fracamente conectados de um grafo não-orientado
</section>

<section>
### SC<br/>complexidade estrutural

_mede a complexidade estrutural de uma classe_

<img src="files/formula-sc.png" style="box-shadow: 0px 0px 5px gray" />
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
<img src="files/analizo.png" style="box-shadow: 0px 0px 5px gray; border-radius: 5px" />
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

<img src="files/revisao-estruturada-scam.png" style="box-shadow: 0px 0px 5px gray" />
</section>

<section>
### 23 ferramentas selecionadas

<img src="files/ferramentas-selecionadas.png" style="box-shadow: 0px 0px 5px gray" />
</section>

<section>
# Análise exploratória
</section>

<section>
### Percentis da métrica ACC

<img src="files/percentis-acc.png" style="box-shadow: 0px 0px 5px gray" />
</section>

<section>
### Média não é representativa

<table><tr><td>
<img src="files/histograma-acc.png" style="box-shadow: 0px 0px 5px gray; width:100%" />
</td><td>
<img src="files/curva-normal.png" style="box-shadow: 0px 0px 5px gray" />
</td></tr></table>

<small>
Lanza e Marinescu(2006) Michele Lanza e Radu Marinescu. Object-Oriented Metrics in Practice:
Using Software Metrics to Characterize, Evaluate and Improve the Design of Object-Oriented
Systems. Hardcover.
</small>
</section>

<section>
#### Métricas ACC e CBO no percentil 90

<img src="files/tabela-metricas.png" style="box-shadow: 0px 0px 5px gray" />
</section>

<section>
<img src="files/grafico-acc-cbo.png" style="box-shadow: 0px 0px 5px gray" />
</section>

<section>
### Evolução do Analizo

em 18 de Fevereiro de 2016 lançamos, no contexto deste trabalho,
a versão 1.19.0 da ferramenta Analizo
</section>

<section>
### Cronograma

<img src="files/cronograma-qualificacao.png" />
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
