---
title: Sustentabilidade técnica de software acadêmico
theme: simple
---


<section>
### Sustentabilidade técnica de software acadêmico no domínio de ferramentas de análise estática de código-fonte

</section>


<section>
#### Sustentabilidade técnica de software acadêmico no domínio de ferramentas de análise estática de código-fonte

<small>
_Apresentação para banca examinadora da defesa de mestrado do Programa de
Pós-graduação em Ciência da Computação da Universidade Federal da Bahia,
Salvador-Bahia, 19 de Dezembro de 2017._
</small>

Joenio Marques da Costa

Orientadora: Dra. Christina von Flach G. Chavez<br/>
Co-orientador: Dr. Paulo Roberto Miranda Meirelles
</section>


<section>
<!-- ### A Ciência depende de software -->

<img src="files/code-is-science-model-1.png" style=";background:white;margin:0" />
<br/>
[http://www.codeisscience.com](http://www.codeisscience.com)

<small>[http://sciencecodemanifesto.org](http://sciencecodemanifesto.org)</small>

<!--À medida que o software se torna uma tecnologia generalizada em praticamente
todos os aspectos da condição humana, também é inserido firmemente no meio
acadêmico, software analisa dados, simula o mundo real, e visualiza resultados.-->

<small>
GOBLE, C. Better software, better research. IEEE Internet Computing, IEEE, v.
18, n. 5, p. 4–8, 2014.
</small>
</section>


<section>
### Motivação

O software acadêmico sofre de um fenômeno conhecido por desordem caótica disfuncional
(_"dysfunctional chaotic churn"_) - DCD.

<small>
HOWISON, J. et al. Understanding the scientific software ecosystem and its
impact: Current and future measures. Research Evaluation, v. 24, n. 4, p.
454–470, 2015. Disponível em: http://dx.doi.org/10.1093/reseval/rvv014i.
</small>
</section>


<section>
#### Desordem caótica disfuncional (DCD):

* Existência de muitos projetos com poucos usuários;
* Projetos com ciclos de vida curtos que se encerram junto ao financiamento inicial;
* Comunidades de usuários desconectadas e paralelas;
* Incompatibilidades entre os projetos de maneira persistente e imutável;
* Tentativas constantes e aparentemente não coordenadas de "reiniciar" tudo (_re-boots_).
</section>


<section>
### Objetivo

Analisar os projetos de software acadêmico de análise estática e sua
sustentabilidade técnica com o propósito de caracterizar com respeito a
publicização, reconhecimento e ciclo de vida na perspectiva do cientista de
software acadêmico no contexto das conferências de Engenharia de Software ASE e
SCAM.
</section>


<section>
### Questão de pesquisa

**Questão:** Como a desordem caótica disfuncional (DCD) pode explicar a
sustentabilidade técnica dos projetos do ecossistema de software acadêmico de
análise estática em termos de publicização, reconhecimento e estágio de
evolução?
</section>


<section>
### Métricas

* Publicização: ...
* Reconhecimento: ...
* Ciclo de vida: ...
</section>


<section>
### Estratégia de pesquisa

Estudo de caso exploratório, características:

* Foco num fenômeno, organização ou sistema em particular;
* Baixo nível de generalização e alto realismo do contexto;
* Sem intervenção do pesquisador no ambiente.

<small>
STOL, K.-J.; FITZGERALD, B. A holistic overview of software engineering
research strategies. In: 3rd International Workshop on Conducting Empirical
Studies in Industry.  [S.l.: s.n.], 2015. p. 8.
</small>
</section>

<!--
<section>
<img src="files/research-strategies.png" />
</section>
-->

<section>

<img src="files/estrategia-pesquisa.png" style="background:white;padding:10px" />

</section>


<section>
### Software acadêmico

Todo software usado para coletar, processar ou analisar resultados de pesquisas
com intenção de publicação na literatura acadêmica, incluindo desde protótipos
escritos pelos próprios cientistas, a produtos completos desenvolvidos
profissionalmente.

<small>
ALLEN, A. et al. Engineering academic software (dagstuhl perspectives workshop
16252). In: Dagstuhl Manifestos. [S.l.]: Schloss Dagstuhl-Leibniz-Zentrum fuer
Informatik, 2017. v. 6, n. 1.
</small>
</section>


<section>
#### Modelo de processo de software acadêmico

<img src="files/process-model-scientific-software.png" style="box-shadow: 0px 0px 5px gray" />

<small>
HOWISON, J. et al. Understanding the scientific software ecosystem and its
impact: Current and future measures. Research Evaluation, v. 24, n. 4, p.
454–470, 2015. Disponível em: http://dx.doi.org/10.1093/reseval/rvv014i.
</small>
</section>


<section>
#### Visão dos incentivos de reputação e práticas de software acadêmico

<img src="files/scientific-reputation-diagram.png" style="box-shadow:0px 0px 2px gray;background:white;padding:10px" />

<small>
HOWISON, J.; HERBSLEB, J. D. Scientific software production: incentives and
collaboration. In: Proceedings of the ACM 2011 conference on Computer supported
cooperative work. [S.l.: s.n.], 2011. p. 513–522.
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
#### Ciclo de vida de software

<img src="files/staged-model-foss-cycle.png" style="box-shadow:0px 0px 2px gray;background:white" />

<small>
CAPILUPPI, A. et al. Adapting the staged model for software evolution to
free/libre/open source software. In: Ninth international workshop on Principles
of software evolution: in conjunction with the 6th ESEC/FSE joint meeting.
[S.l.: s.n.], 2007. p. 79–82.
</small>
</section>


<section>
### Análise estática

Análise estática é a atividade de obter informações acerca de um programa a
partir do seu código-fonte, tem suas origens nos estudos e desenvolvimentos de
compiladores.

<!--* Análise de performance
* Compreensão de programas
* Localizaçao de falhas
* Recuperação arquitetural
* Testes-->

<small>
CRUZ, D. d.; HENRIQUES, P. R.; PINTO, J. S. Code analysis: Past and present. 2009.
</small>
</section>


<section>
### Estudo 1: Publicização

<img src="files/estudo1-etapas.png" width="70%" style="background:white" />
</section>


<section>
### Resultados do estudo 1

* 60 projetos de software acadêmico
* 40% indisponível para download
* 56% disponibiliza código fonte
* 35% utiliza licença de software livre
</section>


<section>
### Estudo 2: Reconhecimento

<img src="files/estudo2-revisao-literatura.png" style="background:white" />
</section>


<section>
### Resultados do estudo 2

* 429 menções
* 46% Cita
* 29% Usa
* 25% Contribui
  * 14% menções do paper inicial
  * 10% menções posterior
</section>


<section>
### Estudo 3: Ciclo de vida

...
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
### Resultados do estudo 3

* 206 lançamentos (releases) com código fonte foram analisados
* ...
</section>


<section>
### Síntese de resultados

...
</section>


<section>
...
</section>


<section>
### Recomendações

...
</section>


<section>
### Conclusões

...
</section>


<section>
## DCD C1

...
</section>


<section>
## DCD C2

...
</section>


<section>
### Contribuições

...
</section>


<section>
### Trabalhos futuros

...
</section>


<section>
...
</section>


<section>
### Evolução do Analizo

em 18 de Fevereiro de 2016 lançamos, no contexto deste trabalho,
a versão 1.19.0 da ferramenta Analizo
</section>


<section data-background="#c4a000">
<section>
{% include slides_obrigado.html %}
</section>
<section>
### Histórico de apresentações

<small>Onde e quando esta apresentação foi realizada</small>

<ul style="font-size: 24px">
  <li>19 Dezembro 2017, UFBA DCC, Salvador, defesa</li>
</ul>
</section>
</section>
