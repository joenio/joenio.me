---
title: Sustentabilidade técnica de software acadêmico
theme: simple
---


<section>
### Sustentabilidade técnica de software acadêmico no domínio de ferramentas de análise estática de código-fonte

</section>

<!-- -------------------------------- -->

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

<!-- -------------------------------- -->

<section>
### Agenda

1. Conceitos, motivação e contextualização
1. Objetivos, estratégia e questão de pesquisa
1. Estudos realizados e seus resultados
1. Síntese de resultados e conclusões
1. Recomendações aos desenvolvedores de software acadêmico
</section>

<!-- -------------------------------- -->

<section>
### Software acadêmico

Todo software usado para coletar, processar ou analisar resultados de pesquisas
com intenção de publicação na literatura acadêmica, incluindo desde protótipos
escritos pelos próprios cientistas, a produtos completos desenvolvidos
profissionalmente.

<small class="cite">
ALLEN, A. et al. **Engineering academic software (dagstuhl perspectives workshop
16252)**. In: Dagstuhl Manifestos. [S.l.]: Schloss Dagstuhl-Leibniz-Zentrum fuer
Informatik, 2017.
</small>
</section>

<!-- -------------------------------- -->

<section>
#### Modelos de desenvolvimento de software acadêmico

* Software como serviço de suporte
* Software para crédito acadêmico
  * Software Incidental
  * Prática de software paralela
  * Um subcampo de software

<small class="cite">
HOWISON, J.; HERBSLEB, J. D. **Scientific software production: incentives and
collaboration**. In: Proceedings of the ACM 2011 conference on Computer supported
cooperative work. [S.l.: s.n.], 2011.
</small>
</section>

<!-- -------------------------------- -->

<section>
#### Modelo de processo de software acadêmico

<img src="files/process-model-scientific-software.png" />

<small class="cite">
HOWISON, J. et al. **Understanding the scientific software ecosystem and its
impact: Current and future measures**. Research Evaluation, v. 24, n. 4, p.
454–470, 2015.
</small>
</section>

<!-- -------------------------------- -->

<section>
#### Incentivos de reputação e práticas de software acadêmico

<img src="files/scientific-reputation-diagram.png" style="background: white" />

<small class="cite">
HOWISON, J.; HERBSLEB, J. D. **Scientific software production: incentives and
collaboration**. In: Proceedings of the ACM 2011 conference on Computer supported
cooperative work. [S.l.: s.n.], 2011.
</small>
</section>

<!-- -------------------------------- -->

<section>
**Ecossistema de Software** (_Software Ecosystem_) - SECO é interação entre
diversos atores numa plataforma tecnológica comum, resultando em novas soluções
de software ou novos serviços.

<small class="cite">
MANIKAS, K.; HANSEN, K. M. **Software ecosystems–a systematic literature
review**. Journal of Systems and Software, Elsevier, v. 86, n. 5, p.
1294–1306, 2013.
</small>
</section>

<!-- -------------------------------- -->

<section>
> 56% dos pesquisadores de todas as áreas do Reino Unido desenvolvem software acadêmico.
<small class="cite">
HETTRICK, S. et al. **UK Research Software Survey 2014**. 2014.
</small>
</section>

<!-- -------------------------------- -->

<section>
> 90% dos pesquisadores na astronomia desenvolvem suas próprias ferramentas de software.
<small class="cite">
MOMCHEVA, I.; TOLLERUD, E. **Software use in astronomy: an informal
survey**. arXiv preprint arXiv:1507.03989, 2015.
</small>
</section>

<!-- -------------------------------- -->

<section>
> Muitas pesquisas não mencionam sequer o uso de software acadêmico em suas publicações.
<small class="cite">
HOWISON, J.; BULLARD, J. **Software in the scientific literature: Problems with
seeing, finding, and using software mentioned in the biology literature**.
Journal of the Association for Information Science and Technology, v. 67, n. 9,
p. 2137–2155, 2016.
</section>

<!-- -------------------------------- -->

<section>
> Grande parte dos pesquisadores não sabem o quão confiável seus projetos de software são.
<small class="cite">
MERALI, Z. **Computational science: Error, why scientific programming does not
compute**. Nature, Nature Publishing Group, v. 467, n. 7317, p. 775–777, oct
2010.
</section>

<!-- -------------------------------- -->

<section>
O software acadêmico sofre de um fenômeno conhecido por **Desordem Caótica Disfuncional**
(_"dysfunctional chaotic churn"_) - DCD.

<small class="cite">
HOWISON, J. et al. **Understanding the scientific software ecosystem and its
impact: Current and future measures**. Research Evaluation, v. 24, n. 4, p.
454–470, 2015.
</small>
</section>

<!-- -------------------------------- -->

<section>
#### Desordem Caótica Disfuncional (DCD):

1. Existência de muitos projetos com poucos usuários;
1. Projetos com ciclos de vida curtos que se encerram junto ao financiamento inicial;
1. Comunidades de usuários desconectadas e paralelas;
1. Incompatibilidades entre os projetos de maneira persistente e imutável;
1. Tentativas constantes e aparentemente não coordenadas de "reiniciar" tudo (_re-boots_).
</section>

<!-- -------------------------------- -->

<section>
---

#### Manifesto from Dagstuhl Perspectives Workshop 16252

### Engineering Academic Software

---

> "A qualidade e a **sustentabilidade** do software acadêmico deve ser avaliado tanto à _priori_ quanto à _posteriori_."

<small class="cite">
ALLEN, A. et al. **Engineering academic software (dagstuhl perspectives workshop
16252)**. In: Dagstuhl Manifestos. [S.l.]: Schloss Dagstuhl-Leibniz-Zentrum fuer
Informatik, 2017.
</small>
</section>

<!-- -------------------------------- -->

<section>
# Sustentabilidade

individual - social - econômica - ambiental - **técnica**

<small class="cite">
BECKER, C. et al. **The karlskrona manifesto for sustainability design**. CoRR,
abs/1410.6968, 2014.
</small>
</section>

<!-- -------------------------------- -->

<section>
### Sustentabilidade técnica de software

A dimensão técnica diz respeito a capacidade do software de perdurar e de
continuar sendo suportado ao longo do tempo, implicando em qualidades de
longevidade e manutenção.

</section>

<!-- -------------------------------- -->

<section>
## Como medir sustentabilidade de software?

## Qual perspectiva usar?

<!-- sustentabilidade como um princípio a ser seguido, um requisito não-funcional, como uma propriedade emergente -->
<small class="cite">
VENTERS, C. C. et al. **Software sustainability: The modern tower of babel**. In:
CEUR Workshop Proceedings. [S.l.: s.n.], 2014.
</small>
</section>

<!-- -------------------------------- -->

<!--

<section>
### Objetivo

Analisar os projetos de software acadêmico de análise estática e sua
sustentabilidade técnica com o propósito de caracterizar com respeito a
publicização, reconhecimento e ciclo de vida na perspectiva do cientista de
software acadêmico no contexto das conferências de Engenharia de Software ASE e
SCAM.
</section>
-->


<section>
### Questão de pesquisa

Como a DCD pode explicar a **sustentabilidade** técnica dos projetos do
ecossistema de software acadêmico de análise estática em termos de
publicização, reconhecimento e estágio de evolução?
</section>

<!-- -------------------------------- -->

<section>
### Estratégia de pesquisa

Estudo de caso exploratório, características:

* Foco num fenômeno, organização ou sistema em particular;
* Baixo nível de generalização e alto realismo do contexto;
* Sem intervenção do pesquisador no ambiente.

<small class="cite">
STOL, K.-J.; FITZGERALD, B. **A holistic overview of software engineering
research strategies**. In: 3rd International Workshop on Conducting Empirical
Studies in Industry.  [S.l.: s.n.], 2015.
</small>
</section>

<!-- -------------------------------- -->

<!--
<section>
### Métricas

* **Publicização:** número de projetos disponíveis para download, com código fonte disponível, tipo de licença.
* **Reconhecimento:** número de citações, número de menções, número de usos e contribuições.
* **Ciclo de vida:** número total de lançamentos, data e número de versão de cada lançamento, variação no número de módulos do código fonte.
</section>
-->

<section>
<img src="files/estrategia-pesquisa.png" style="background:white;padding:10px" />
</section>

<!-- -------------------------------- -->

<section>
#### Estudo 1:

### Publicização de software acadêmico de análise estática
</section>

<!-- -------------------------------- -->

<section>
### Análise estática

Análise estática é a atividade de obter informações acerca de um programa a
partir do seu código-fonte, tem suas origens nos estudos e desenvolvimentos de
compiladores.

<small class="cite">
CRUZ, D. d.; HENRIQUES, P. R.; PINTO, J. S. **Code analysis: Past and present**. 2009.
</small>
</section>

<!-- -------------------------------- -->

<section>
<img src="files/estudo1-etapas.png" width="60%" style="background:white" />
</section>

<!-- -------------------------------- -->

<section>
Revisão de literatura nas conferências ASE e SCAM

<img src="files/revisao-literatura.png"  width="80%" style="background:white" />
</section>

<!-- -------------------------------- -->

<section>
Escopo

* Publicações das conferências ASE e SCAM
* Incluindo todas as ediçoes até 2015
  * 25 edições da conferência ASE
  * 15 edições da conferência SCAM
</section>

<!-- -------------------------------- -->

<section>
Triagem automática

| Critério               | String                    |
| ---------------------- | ------------------------- |
| Menciona projeto       | _tool_ ou _framework_     |
| Disponibiliza download | _download_ ou _available_ |
| Análise estática       | _http_, _https_ ou _ftp_  |

</section>

<!-- -------------------------------- -->

<section>
Extração

| Critério      | Explicação                                                        |
| ------------- | ----------------------------------------------------------------- |
| Identificável | É possível identificar software entre as contribuições do artigo? |
| Disponível    | Podemos encontrar menção a URL do software para download?         |

</section>

<!-- -------------------------------- -->

<section>
#### Resultados da revisão de literatura do estudo 1

<img src="files/artigos-com-software-por-ano.png" />

**61 artigos** com publicação de **60 projetos** de software acadêmico de análise estática.
</section>

<!-- -------------------------------- -->

<section>
✓ Nome, URL, Artigo, Conferência, Ano

✗ Descrição, Acesso, Distribuição, Licença, Código fonte
</section>

<!-- -------------------------------- -->

<section>
Caracterização dos **60** projetos em relação a disponibilidade de download.

| Disponibilidade            | Número | Proporção |
| -------------------------- | ------ | --------- |
| Disponível para download   | 36     | 60%       |
| Indisponível para download | 24     | 40%       |

</section>

<!-- -------------------------------- -->

<section>
Caracterização dos **36** projetos disponíveis para download em relação à disponibilidade de código fonte.

| Disponibilidade                | Número | Proporção |
| ------------------------------ | ------ | --------- |
| Disponibiliza código fonte     | 34     | ~94%      |
| Não disponibiliza código fonte | 2      | ~6%       |

</section>

<!-- -------------------------------- -->

<section>
Caracterização dos **34** projetos com código fonte disponível em relação ao uso de licenças de software livre.

| Uso de licenças livres            | Número | Proporção |
| --------------------------------- | ------ | --------- |
| Utiliza licença de software livre | 21     | ~62%      |
| Não adota licença alguma          | 13     | ~38%      |

</section>

<!-- -------------------------------- -->

<section>
Caracterização em relação à linguagem de programação.

<img src="files/linguagens.png" />
</section>

<!-- -------------------------------- -->

<section>
#### Estudo 2:

### Reconhecimento de software acadêmico de análise estática
</section>

<!-- -------------------------------- -->

<section>
### Menção

O número e tipo de menção foi utilizado como _proxy_ para medir o grau
de reconhecimento ao software acadêmico.
</section>

<!-- -------------------------------- -->

<section>
Revisão de literatura nas bases ACM e IEEE

<img width="90%" src="files/estudo2-revisao-literatura.png" style="background:white" />
</section>

<!-- -------------------------------- -->

<section>
Busca

| String de busca para o software s6                       |
| -------------------------------------------------------- |
| content.ftsec:(+civl +concurrency +intermediate +verification +language) |
| ('concurrency intermediate verification') AND CIVL |

...
</section>

<!-- -------------------------------- -->

<section>
Triagem

Inspeção manual dos artigos em busca de ocorrências ao nome do projeto (menção) em todo o conteúdo.
</section>

<!-- -------------------------------- -->

<section>
Keywording

| ID | Artigo | Anotação                           |
| -- | ------ | ---------------------------------- |
| s3 | p250   | Cita o software como exemplo de ferramenta para recomendação de API numa tabela comparativa. |
| s3 | p546   | Nenhuma referência ao nome do software encontrado no texto. |
| s3 | p799   | Cita o software como trabalho relacionado. |

</section>

<!-- -------------------------------- -->

<section>
Extração

Cada menção foi classificada a partir do esquema para classificação de menções elaborado na fase de Keywording.
</section>

<!-- -------------------------------- -->

<section>
<img width="100%" src="files/estudo2-revisao-literatura-resultados.png" style="background:white" />
</section>

<!-- -------------------------------- -->

<!--
<section>
### Resultados do estudo 2

| Como os projetos são mencionados        | Número | Proporção |
| --------------------------------------- | ------ | --------- |
| Mencionado apenas na publicação inicial | 13     | ~22%      |
| Mencionado em outros estudos            | 47     | ~78%      |

</section>
-->

<!-- -------------------------------- -->

<section>
| Tipo de menção                          | Número | Proporção |
| --------------------------------------- | ------ | --------- |
| Mencionado apenas na publicação inicial | 14     | ~23%      |
| Utilizado apenas na publicação inicial  | 16     | ~27%      |
| Utilizado em outros estudos             | 12     | 20%       |
| Recebe contribuição de outros estudos   | 18     | 30%       |

</section>

<!-- -------------------------------- -->

<section>
#### Estudo 3:

### Ciclo de vida de software acadêmico de análise estática

</section>

<!-- -------------------------------- -->

<section>
#### Ciclo de vida de software

<img src="files/staged-model-foss-cycle.png" style="box-shadow:0px 0px 2px gray;background:white" />

<small class="cite">
CAPILUPPI, A. et al. **Adapting the staged model for software evolution to
free/libre/open source software**. In: Ninth international workshop on Principles
of software evolution: in conjunction with the 6th ESEC/FSE joint meeting.
[S.l.: s.n.], 2007.
</small>
</section>

<!-- -------------------------------- -->

<section>
* Número de lançamentos de cada projeto
* Número de versão, data e URL para código fonte de cada lançamento
* Download de todos(*) os lançamentos com código fonte disponível
  * (*) Apenas aqueles escritos em C, C++ ou Java
</section>

<!-- -------------------------------- -->

<section>
<img src="files/analizo.png" style="box-shadow: 0px 0px 5px gray; border-radius: 5px" />
<br/>
[analizo.org](http://analizo.org)

<small class="cite">
Terceiro, A. et al. **Analizo: an extensible multi-language source code
analysis and visualization toolkit**. In: CBSOFT-Ferramentas. [S.l.: s.n.],
2010.
</small>
</section>

<!-- -------------------------------- -->

<!--
<section>
<img src="files/estagios-evolucao-ciclo-de-vida.png" width="80%" style="box-shadow: 0px 0px 5px gray; border-radius: 5px; padding: 10px" />
</section>
-->


<section>
<!-- 206 lançamentos (releases) com código fonte foram analisados -->

| Projetos                                                   | Estágio                 |
| ------------------------------------------------------ --- | ----------------------- |
| Sem informação sobre lançamentos                           | Desenvolvimento inicial |
| Com apenas um lançamento                                   | Desenvolvimento inicial |
| Indisponível para download                                 | Encerrado               |
| Tornaram-se indisponíveis durante a realização da pesquisa | Descontinuado           |

</section>

<!-- -------------------------------- -->

<section>
Os demais projetos com informações sobre lançamento e código fonte disponível
foram analisados para coleta das seguintes métricas:

* Número de módulos
* Número de linhas de código fonte (eloc)
</section>

<!-- -------------------------------- -->

<section>
Resultados do estudo 3 sobre o ciclo de vida dos projetos de software acadêmico de análise estática.

<!--* 3% (61) artigos, entre 1873, publicam software acadêmico de análise estática com indicação de URL-->
<!--* entre os 61 artigos encontramos 60 projetos de software acadêmico de análise estática-->

| Estágio de evolução                                 | Número | Proporção |
| --------------------------------------------------- | ------ | --------- |
| Inicial, descontinuado ou encerrado                 | 47     | 78%       |
| Evolução ou manutenção                              | 8      | 14%       |
| Indícios de estágio inicial, evoluçao ou manutenção | 5      | 8%        |

</section>

<!-- -------------------------------- -->

<section>
### Síntese de resultados

</section>

<!-- -------------------------------- -->

<section>
O reconhecimento ao software acadêmico de análise estática vem crescendo

<img src="files/mentions-trend.png" style="box-shadow: 0px 0px 5px gray; border-radius: 5px; padding: 10px" />
</section>

<!-- -------------------------------- -->

<section>
Os projetos com licenças de software livre possuem maior reconhecimento

<img width="80%" src="files/license-vs-mentions.png" style="box-shadow: 0px 0px 5px gray; border-radius: 5px; padding: 15px" />
</section>

<!-- -------------------------------- -->

<section>
O crescimento médio no número de módulos confirma a lei de "Crescimento Contínuo" do software

<img width="65%" src="files/modules-evolution-average.png" style="box-shadow: 0px 0px 5px gray; border-radius: 5px" />
</section>

<!-- -------------------------------- -->

<section>
**80 artigos** apresentam fortes indícios de serem impossíveis de reproduzir
uma vez que fazem menção (**uso ou contribuição**) a projetos em estágio
**Encerrado**.
</section>

<!-- -------------------------------- -->

<section>
**Questão:** Como a desordem caótica disfuncional (DCD) pode explicar a
sustentabilidade técnica dos projetos do ecossistema de software acadêmico de
análise estática em termos de publicização, reconhecimento e estágio de
evolução?
</section>

<!-- -------------------------------- -->

<section>
* **C1:** Existência de muitos projetos com poucos usuários;
* **C2:** Projetos com ciclos de vida curtos que se encerram junto ao financiamento inicial;
* **C3:** Comunidades de usuários desconectadas e paralelas;
* **C4:** Incompatibilidades entre os projetos de maneira persistente e imutável;
* **C5:** Tentativas constantes e aparentemente não coordenadas de "reiniciar" tudo (_re-boots_).
</section>

<!-- -------------------------------- -->

<section>
### DCD C1:

## Existência de muitos projetos com poucos usuários

50% é mencionado ou utilizado apenas na publicação inicial.
</section>

<!-- -------------------------------- -->

<section>
### DCD C2:

## Projetos com ciclos de vida curtos que se encerram junto ao ~~financiamento~~ inicial

78% está em estágio inicial de desenvolvimento, descontinuado ou encerrado.
</section>

<!-- -------------------------------- -->

<!--
<section>
### Contribuições

* Um catálogo de projetos de software acadêmico para serem utilizados em outras pesquisas
* Amadurecimento no debate sobre sustentabilidade de software
* Alerta sobre os problemas causados pela indisponibilidade dos códigos produzidos nas pesquisas
* Um framework para avaliação do fenômeno DCD em um domínio de aplicação específico
</section>
-->

<!-- -------------------------------- -->

<!--
<section>
### Trabalhos futuros

* Atualizar o perído da revisão de literatura do estudo 1 para seleção de projetos
* Selecionar projetos de software acadêmico em outras conferências importantes
* Caracterizar outras dimensões do software na visão de usuário e engenheiros de software
* Incluir na revisão de literatura jornais específicos para software, exemplos, JOSS, JORS e SoftwareX
</section>
-->

<!-- -------------------------------- -->

<section>
<img src="files/code-is-science-model-1.png" style=";background:white;margin:0" />
<br/>
[www.codeisscience.com](http://www.codeisscience.com)

<small>[sciencecodemanifesto.org](http://sciencecodemanifesto.org)</small>

<small>
GOBLE, C. **Better software, better research**. IEEE Internet Computing, IEEE, v.
18, n. 5, p. 4–8, 2014.
</small>
</section>

<!-- -------------------------------- -->

<section>
### Recomendações

* Tornar o código fonte do software público o mais cedo possível
* Fazer o software fácil de ser encontrado e citado fornecendo metadados
* Adotar uma licença de software e respeitar as licenças dos outros projetos
* Definir processos claros e transparentes de contribuição, governança e comunicação

<small>
JIMéNEZ, R. C. et al. **Four simple recommendations to encourage best practices
in research software**. F1000Research, v. 6, p. 876, jun. 2017.
</small>
</section>

<!-- -------------------------------- -->

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
