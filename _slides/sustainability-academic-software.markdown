---
title: On the Sustainability of Academic Software - The Case of Static Analysis Tools
theme: simple
---

<!-- -------------------------------- -->

<section>
### On the Sustainability of Academic Software: The Case of Static Analysis Tools

</section>

<!-- -------------------------------- -->

<section>
#### On the Sustainability of Academic Software: The Case of Static Analysis Tools

##### SBES 2018, September 17–21, 2018, Sao Carlos, Brazil

Joenio Marques da Costa<br/>
Dra. Christina von Flach G. Chavez<br/>
Dr. Paulo Roberto Miranda Meirelles
</section>

<!-- -------------------------------- -->

<section>
## Software Sustainability

human, social, economic, environmental, **technical**

<small class="cite">
Robert Goodland. 2002. **Sustainability: Human, Social, Economic and Environmental**.
</small>
</section>

<!-- -------------------------------- -->

<section>
### Software Technical Sustainability

Concerned with the long-term usage of software and its capacity to evolve with
changing conditions and requirements.

<small class="cite">
B. Penzenstadler and H. Femmer. 2013.
**A Generic Model for Sustainability with Process- and Product-specific Instances**.
</small>
</section>

<!-- -------------------------------- -->


<section>
### Academic Software

Software developed to collect, process, or analyze research results published
in the academic literature.

<small class="cite">
ALLEN, A. et al. 2017.
**Engineering academic software (dagstuhl perspectives workshop 16252)**.
</small>
</section>

<!-- -------------------------------- -->

<section>
<img src="/files/scientific-reputation-diagram-en.png" style="background: white" />

<small class="cite">
James Howison and James D. Herbsleb. 2011.
**Scientific software production: incentives and collaboration**.
</small>
</section>

<!-- -------------------------------- -->

<section>
## How measure Academic Software Sustainability?
</section>

<!-- -------------------------------- -->

<section>
Three studies:
1. Publicization
1. Stage in software life cycle
1. Recognition
</section>

<!-- -------------------------------- -->

<section>
#### Study 1

### Publicization of Academic Software

_url, license, source code, and download availability_
</section>

<!-- -------------------------------- -->

<section>
* 1873 papers from ASE and SCAM published until 2015
* 61 software publications
* 60 academic software projects of static analysis
</section>

<!-- -------------------------------- -->

<section>
Inclusion criterion and keywords

| Criteria                               | Keywords                      |
| -------------------------------------- | ----------------------------- |
| Mentions the project, software or tool | _tool_ or _framework_         |
| Makes software available for download  | _download_ or _available_     |
| Identifies project URL                 | _http_, _https_ or _ftp_      |
| Static analysis domain                 | _static analysis_ or _parser_ |

</section>

<!-- -------------------------------- -->

<section>
Inclusion criterion for extraction

| Criteria      | Explanation                                                       |
| ------------- | ----------------------------------------------------------------- |
| Identifiable  | Is it possible to identify a software project among the outputs of the article? |
| Available     | Can we find mention to the URL for download the software project? |

</section>

<!-- -------------------------------- -->

<section>
found 60 academic software projects among 61 software publications

<img src="/files/papers-and-tool-papers-selected-by-year-2axis.png" />
</section>

<!-- -------------------------------- -->

<section>
**Official online presence (RQ1.1)**

from 60 academic software for static analysis, 15 projects (25%) do not have an official online presence
</section>

<!-- -------------------------------- -->

<section>
**Sofware available for download (RQ1.2)**

<!-- Caracterização dos **60** projetos em relação a disponibilidade de download. 


| Download                   | Número | Proporção |
| -------------------------- | ------ | --------- |
| Disponível para download   | 36     | 60%       |
| Indisponível para download | 24     | 40%       |
-->

from 60 selected projects, 24 projects (40%) are not available for download

</section>

<!-- -------------------------------- -->

<section>
**Source code available (RQ1.3)**

from 36 projects available for download, 34 projects has their source code available

<!--
Caracterização dos **36** projetos disponíveis para download em relação à disponibilidade de código fonte.

| Código fonte                   | Número | Proporção |
| ------------------------------ | ------ | --------- |
| Disponibiliza código fonte     | 34     | ~94%      |
| Não disponibiliza código fonte | 2      | ~6%       |
-->

</section>

<!-- -------------------------------- -->

<section>
**Software license available (RQ1.4)**

from 34 projects with the source code available, 13 did not provide any
software license, and 21 used free software license

</section>

<!-- -------------------------------- -->

<section>
#### Study 2

### Life cycle of Academic Software

_evolution stage_

</section>

<!-- -------------------------------- -->

<section>
<img src="/files/staged-model-foss-cycle-en.png" style="box-shadow:0px 0px 2px gray;background:white" />

<small class="cite">
CAPILUPPI, A. et al. 2007.
**Adapting the staged model for software evolution to free/libre/open source software**.
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
**Evolution stage of academic software (RQ2.1)**

| Estágio de evolução                                 | Número | Proporção |
| --------------------------------------------------- | ------ | --------- |
| Inicial, descontinuado ou encerrado                 | 47     | 78%       |
| Evolução ou manutenção                              | 8      | 14%       |
| Indícios de estágio inicial, evoluçao ou manutenção | 5      | 8%        |

</section>

<!-- -------------------------------- -->

<section>
#### Study 3

### Recognition of Academic Software

_number and types of mentions_
</section>

<!-- -------------------------------- -->

<section>
A mention means any occurrence of the name of the academic software in a
scientific publication
</section>

<!-- -------------------------------- -->

<section>
<img width="100%" src="/files/study2-literature-review-big.png" style="background:white" />
</section>

<!-- -------------------------------- -->
<section>
**Mentions to academic software**

only 2 projects -- GUIZMO and protopurity -- were not found in searches carried
out in ACM and IEEE
</section>

<section>
**Uses of academic software**

there are 124 "usage" mentions to a set of 26 projects
</section>

<section>
**Contributions to academic software**

there are 43 "contribute" mentions to a set of 17 projects, that is, only 28%
of projects received source code contributions from studies after its initial
publication
</section>

<!-- -------------------------------- -->

<section>
Evolution of the recognition of academic software for static analysis published in ASE and SCAM

<img src="/files/mentions-type-by-year.png" style="box-shadow: 0px 0px 5px gray; border-radius: 5px; padding: 10px" />
</section>

<section>
Growth of 38% per year in the number of mentions

<img src="/files/mentions-trend-en.png" style="box-shadow: 0px 0px 5px gray; border-radius: 5px; padding: 10px; display: inline" />
</section>

<!-- -------------------------------- -->

<section>
Influence of the life cycle stage on the recognition of academic software
</section>

<!-- -------------------------------- -->

<section>
Academic software projects are not yet recognized by Science
as first-class citizens,
</section>

<section>
---

### Better Software, Better Research

---

> "Devemos reconhecer o software como instrumento experimental de primeira-classe na Ciência."

<small class="cite">
GOBLE, C. **Better software, better research**. IEEE Internet Computing, IEEE, v.
18, n. 5, p. 4–8, 2014.
</small>
</section>

<!-- -------------------------------- -->

<section>
### Future Work

* Why some tools in closedown stage continue to be cited?
* The results found regarding academic software recognition are similar to general software engineering publications?
</section>

<section data-background="#c4a000">
<section>
{% include slides_obrigado.html %}
</section>
<section>
### Histórico de apresentações

<small>Onde e quando esta apresentação foi realizada</small>

<ul style="font-size: 24px">
  <li>21 Setembro 2018, USP-ICMS, São Carlos, SP, CBSOFT SBES 2018</li>
</ul>
</section>
</section>
