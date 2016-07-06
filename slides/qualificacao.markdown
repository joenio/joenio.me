---
title: Caracterização da complexidade estrutural em ferramentas de análise estática de código-fonte
---

<section>
### Caracterização da complexidade estrutural em ferramentas de análise estática de código-fonte
</section>

<section>
_Apresentação para banca de qualificação de mestrado do
Programa de Pós-graduação em Ciência da Computação da
Universidade Federal da Bahia_

Salvador-Ba, 08 de Julho de 2016

Joenio Marques da Costa

Orientadora: Profa. Dra. <u>Christina von Flach G. Chavez</u><br/>
Co-orientador: Prof. Dr. <u>Paulo Roberto Miranda Meirelles</u>
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
</section>

<section>
Análise estática de código-fonte costuma ser utilizada em diversas atividades
da engenharia de software

* Análise de performance
* Compreensão de programas
* Localizaçao de falhas
* Recuperação arquitetural
* Testes
</section>

<section data-background='white'>
#### Anatomia da análise estática de código-fonte

<img src="files/static-analysis-representation.png" />
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

os formatos de representação intermediárias costumam ser aplicadas em fins
específicos, por exemplo, ferramentas de análise estática para cálculo de
métricas de código-fonte podem fazer uso do Grafo de Fluxo de Controle
para calcular a métrica de complexidade ciclomática de McCabe
</section>

<section>
### Métricas de software

uma função cujas entradas são dados de software e cuja saı́da é um valor
numérico, que pode ser interpretado como o grau em que um software possui um
determinado atributo que afeta sua qualidade
</section>

<section>
### Métricas de código-fonte

métricas de código-fonte cobrem aspectos de tamanho, complexidade e qualidade,
e podem indicar aspectos relevantes à manutenibilidade de um programa
</section>

<section>
### Complexidade estrutural de programas

entre as inúmeras propostas para cálculo da complexidade estrutural, a
medida feita através do acoplamento (CBO) e coesão (LCOM4) podem fornecer
indicativos sobre o esforço necessário para atividades de manutenção
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

<section data-background='white'>
### Cronograma

<img src="files/cronograma-qualificacao.png" />
</section>

<section data-background="#c4a000">
<section>
### Obrigado!

joenio@joenio.me
</section>
<section>
### Histórico de apresentações

<small>Onde e quando esta apresentação foi realizada</small>

<ul style="font-size: 24px">
  <li>06 Julho 2016, FGA UnB, Brasília, prévia da apresentação no Lappis</li>
</ul>
</section>
</section>
