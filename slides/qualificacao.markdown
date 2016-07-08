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
## Objetivo

compreender as ferramentas de software para análise estática de código-fonte do
ponto de vista de sua manutenabilidade, a partir da análise de sua complexidade
estrutural, discutindo quais características arquiteturais explicam seus
atributos de qualidade interna
</section>

<section>
### Motivação

_compreender a fundo o domínio de análise estática de código-fonte, suas
técnicas e limitações, compreender os aspectos de qualidade interna das
ferramentas existentes na indústria e na academia, a fim de ter
conhecimento suficiente para evoluir ferramentas deste domínio_
</section>

<section>
## Análise estática

análise estática de código-fonte é a atividade de obter informações acerca
de um programa a partir do seu código-fonte

tem suas origens nos estudos e desenvolvimentos de compiladores

* Análise de performance
* Compreensão de programas
* Localizaçao de falhas
* Recuperação arquitetural
* Testes
</section>

<section>
#### Anatomia da análise estática de código-fonte

<img src="files/static-analysis-representation.png" style="box-shadow: 0px 0px 5px gray; background-color:white" />
</section>

<section>
**<u>Extração de dados</u>**<br/>
_este componente converte a sintaxe de um programa em uma sintaxe mais adequada
para análise posterior_

**<u>Representação intermediária</u>**<br/>
_este componente é responsável pela representação dos dados obtidos na etapa de
extração_

**<u>Análise</u>**<br/>
_componente responsável por interpretar os dados presentes na representação
intermediária_
</section>

<section>
### Representação intermediária

os formatos de representação intermediárias costumam ser aplicados em fins
específicos, por exemplo, a métrica de complexidade ciclomática de McCabe é
calculada através do Grafo de Fluxo de Controle
</section>

<section data-background="files/backgrounds/tape.jpg">
<div class="box-white" style="text-shadow: 0px 0px 2px white; color:black; font-weight:bolder">
<h2 style="text-shadow: 0px 0px 2px white; color:black">Métricas de software</h2>

uma função cujas entradas são dados de software e cuja saı́da é um valor
numérico, que pode ser interpretado como o grau em que um software possui um
determinado atributo que afeta sua qualidade
</div>
</section>

<section data-background="files/backgrounds/tape.jpg">
<div class="box-white" style="text-shadow: 0px 0px 2px white; color:black; font-weight:bolder">
<h2 style="text-shadow: 0px 0px 2px white; color:black">Métricas de código-fonte</h2>

métricas de código-fonte cobrem aspectos de tamanho, complexidade e qualidade,
e podem indicar aspectos relevantes à manutenibilidade de um programa
</div>
</section>

<section>
### ACC<br/>conexões aferentes de uma classe

_mede o número de classes que <abbr title="acessos à atributos ou métodos">acessam</abbr> a classe analisada_

<img src="files/formula-acc.png" style="box-shadow:0px 0px 5px gray" />

<img src="files/ci-cj.png" style="box-shadow:0px 0px 5px gray; background-color:white; padding:5px 5px 0; vertical-align:middle" /> <span style="color:#777">indica acesso à atributos ou métodos</span>
</section>

<section>
# Complexidade

quanto maior a complexidade de um sistema de software,
maior é o esforço para compreendê-lo, modificá-lo e evoluí-lo
</section>

<section>
## Sistemas complexos

sistemas complexos são sistemas compostos de várias partes que
interagem entre sí com a habilidade de gerar novas qualidades
no comportamento coletivo
</section>

<section>
## Complexidade estrutural

uma medida da complexidade de software calculada em termos do acoplamento (CBO)
e coesão (LCOM4) podem fornecer indicativos sobre o esforço necessário para
atividades de manutenção de sistemas de software
</section>

<section>
compreender o comportamento da complexidade estrutural em um certo domínio
de aplicação pode ser útil para auxiliar a tomada de decisão em atividades
de manutenção
</section>

<section>
### CBO<br/>acoplamento entre objetos

_mede o número classes <abbr title="acessos à atributos ou métodos">acessadas</abbr> pela classe analisada_

<img src="files/formula-cbo.png" style="box-shadow: 0px 0px 5px gray" />

<img src="files/ci-cj.png" style="box-shadow:0px 0px 5px gray; background-color:white; padding:5px 5px 0; vertical-align:middle" /> <span style="color:#777">indica acesso à atributos ou métodos</span>
</section>

<section>
#### Métricas ACC e CBO no percentil 90

<img src="files/tabela-metricas.png" style="box-shadow: 0px 0px 5px gray" />
</section>

<section>
<img src="files/grafico-acc-cbo.png" style="box-shadow: 0px 0px 5px gray" />
</section>

<section>
### Média não é representativa

<img src="files/histograma-acc.png" style="box-shadow: 0px 0px 5px gray; width:60%" />
</section>

<section>
### Exemplo de uma curva normal

<img src="files/curva-normal.png" style="box-shadow: 0px 0px 5px gray" />
</section>

<section>
### Metodologia do estudo

Seleção de ferramentas de análise-estática

Coleta de métricas de código-fonte das ferramentas

Análise e interpretação dos valores de métricas
</section>

<section>
### Seleção e coleta

a seleção de ferramentas será feita através de uma revisão estruturada
e de uma busca livre em fontes de ferramentas da indústria

a análise de código-fonte e coleta de suas métricas será feita de forma
automatizada utilizando a ferramenta Analizo
</section>

<section>
### Interpretação dos valores de métricas

as métricas serão coletadas para cada módulo de cada ferramenta, estes
valores serão distribuídos em percentis, a análise manual desta distribuição
irá nos dar um valor único para cada ferramenta
</section>

<section>
### Resultados esperados

Caracterização das ferramentas de análise estática selecionadas

Caracterização da complexidade estrutural de ferramentas neste domínio

Conjunto de intervalos de referência dos valores de métricas de código-fonte

Evolução de uma ferramenta de análise estática de código-fonte.
</section>

<section>
### Evolução do Analizo

a ferramenta Analizo será evoluída a fim de atender necessidades da nossa pesquisa,
um resultado preliminar neste sentido é o lançamento da versão 1.19.0 desta ferramenta
realizada no contexto deste estudo em 18 de Fevereiro de 2016
</section>

<section>
### Resultados preliminares

315 artigos da conferência SCAM foram avaliados e 9 ferramentas de análise estática de código-fonte foram selecionadas

54 ferramentas da indústria avaliada e destas 14 foram selecionadas para este estudo

23 ferramentas foram selecionadas e analisadas de forma automatizada para coleta de métricas de código-fonte
</section>

<section>
### Próximos passos

...
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
  <li>06 Julho 2016, FGA UnB, Brasília, prévia da apresentação no Lappis</li>
</ul>
</section>
</section>
