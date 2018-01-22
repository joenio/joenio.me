---
title: ENEDS | Mini-curso de integração entre R-Project e LaTeX
---

<section>
   <img src="files/eneds.png" width="200px" />
   <h2>ENEDS 2015</h2>
   <h3>Encontro Nacional de Engenharia e Desenvolvimento Social</h3>
   <h1>Introdução ao Software Livre e mini-curso de LaTeX e R-Project</h1>
   <h3>“Por trás de cada tecnologia, há sempre uma ideologia”</h3>
</section>

<section>
  <p><strong>Joenio Costa</strong></p>
  <p>http://joenio.me</p>
  <br/>
  <ul>
    <li>Desenvolvedor de software (livre)</li>
    <li>Sócio/fundador da cooperativa Colivre</li>
    <li>Graduado em informática pela UCSal</li>
    <li>Mestrando na UFBA pelo PGCOMP</li>
  </ul>
</section>

<section>
## Roteiro
* LaTeX
* R-Project
* knitr
</section>

<section>
  <p><strong>LaTeX</strong></p>
  <br/>
  <p style="font-size: 40px">O LaTeX é uma linguagem de marcação e um
  ambiente para diagramação de textos utilizado amplamente na produção de
  textos matemáticos e científicos devido a sua alta qualidade
  tipográfica</p>
  <br/>
  <p style="font-size: 22px">http://latex-project.org</p>
</section>

<section>
  <p><strong>LaTeX</strong></p>
  <br/>
  <ul style="font-size: 38px">
    <li>Desenvolvido na década de 80 por Leslie Lamport</li>
    <li>Possui abstrações para lidar facilmente com: Bibliografias,
      Citações, Formatos de páginas e Referência cruzada</li>
    <li>O usuário é encorajado a trabalhar com conceitos mais lógicos,
    como: capítulos, seções, etc</li>
  </ul>
</section>

<section>
  <p><strong>LaTeX</strong></p>
  <p>Exemplo 1</p>
  <br/>
  <img src="files/screenshot-documentos.png" />
</section>

<section>
  <p style="font-size: 36px">Criar nova pasta</p>
  <br/>
  <img src="files/screenshot-criar-pasta.png" />
</section>

<section>
  <p style="font-size: 36px">Digite: exemplo1</p>
  <br/>
  <img src="files/screenshot-nomear-pasta.png" />
</section>

<section>
  <p style="font-size: 36px">Pasta exemplo1 criada</p>
  <br/>
  <img src="files/screenshot-pasta-exemplo1.png" />
</section>

<section>
  <p style="font-size: 36px">Abra a pasta e crie novo arquivo</p>
  <br/>
  <img src="files/screenshot-criar-ficheiro.png" />
</section>

<section>
  <p style="font-size: 36px">Digite: artigo1.tex</p>
  <br/>
  <img src="files/screenshot-nomear-ficheiro.png" />
</section>

<section>
  <p style="font-size: 36px">Arquivo artigo1.tex criado</p>
  <br/>
  <img src="files/screenshot-artigo1.png" />
</section>

<section>
  <p style="font-size: 36px">Abra o arquivo artigo1.tex</p>
  <br/>
  <img src="files/screenshot-gedit-artigo1.png" />
</section>

<section>
  <p style="font-size: 36px">Crie novo arquivo: Makefile</p>
  <br/>
  <img src="files/screenshot-nomear-makefile.png" />
</section>

<section>
  <p style="font-size: 36px">Abra o arquivo Makefile</p>
  <br/>
  <img src="files/screenshot-gedit-makefile.png" />
</section>

<section>
  <p style="font-size: 36px">Salve, feche os arquivos,<br/>e abra o terminal</p>
  <br/>
  <img src="files/screenshot-abrir-terminal.png" />
</section>

<section>
  <p style="font-size: 36px">Digite o comando make no terminal</p>
  <br/>
  <img src="files/screenshot-terminal-make.png" />
</section>

<section>
  <p style="font-size: 36px">Modifique o arquivo Makefile</p>
  <br/>
  <img src="files/screenshot-gedit-makefile-v2.png" />
</section>

<section>
  <p><strong>LaTeX</strong></p>
  <p>Exemplo 2</p>
  <br/>
  <img src="files/screenshot-documentos.png" />
</section>

<section>
  <p style="font-size: 36px">Criar nova pasta</p>
  <br/>
  <img src="files/screenshot-criar-pasta.png" />
</section>

<section>
  <p style="font-size: 36px">Digite: exemplo2</p>
  <br/>
  <img src="files/screenshot-nomear-pasta-2.png" />
</section>

<section>
  <p style="font-size: 36px">Pasta exemplo2 criada</p>
  <br/>
  <img src="files/screenshot-pasta-exemplo2.png" />
</section>

<section>
  <p style="font-size: 36px">Abra a pasta e crie novo arquivo</p>
  <br/>
  <img src="files/screenshot-criar-ficheiro.png" />
</section>

<section>
  <p style="font-size: 36px">Digite: artigo2.tex</p>
  <br/>
  <img src="files/screenshot-nomear-ficheiro-2.png" />
</section>

<section>
  <p style="font-size: 36px">Arquivo artigo2.tex criado</p>
  <br/>
  <img src="files/screenshot-artigo2.png" />
</section>

<section>
  <p style="font-size: 36px">Abra o arquivo artigo2.tex</p>
  <br/>
  <img src="files/screenshot-gedit-artigo2.png" />
</section>

<section>
  <p style="font-size: 36px">Crie novo arquivo: Makefile</p>
  <br/>
  <img src="files/screenshot-nomear-makefile.png" />
</section>

<section>
  <p style="font-size: 36px">Abra o arquivo Makefile</p>
  <br/>
  <img src="files/screenshot-exemplo2-gedit-makefile.png" />
</section>

<section>
  <p style="font-size: 36px">Salve, feche os arquivos,<br/>e abra o terminal</p>
  <br/>
  <img src="files/screenshot-abrir-terminal.png" />
</section>

<section>
  <p style="font-size: 36px">Digite o comando make no terminal</p>
  <br/>
  <img src="files/screenshot-terminal-make.png" />
</section>

<section>
  <p><strong>LaTeX e normas ABNT</strong></p>
  <p>Pacote abnTeX2</p>
  <br/>
  <p style="font-size: 36px">O LaTeX tem a capacidade de formatar o
  documento final seguindo normas de formatação específicas através de
  classes, para as normas ABNT utiliza-se a suíte abnTeX2</p>
  <br/>
  <p style="font-size: 22px">http://www.abntex.net.br</p>
</section>

<section>
  <p><strong>GNU make e Makefiles</strong></p>
  <br/>
  <p style="font-size: 36px">Make é uma ferramenta para automatizar a
  compilação e construção de programas</p>
  <br/>
  <p style="font-size: 22px">http://www.gnu.org/software/make</p>
</section>

<section>
  <p><strong>LaTeX</strong></p>
  <p>Regras de formatação</p>
  <br/>
  <ul style="font-size: 42px">
    <li>Negrito e Itálico</li>
    <li>Lista de itens</li>
    <li>Tabelas</li>
    <li>Imagens</li>
  </ul>
</section>

<section>
  <p><strong>LaTeX e BibLaTeX</strong></p>
  <p>Referências bibliográficas</p>
  <br/>
 style="font-size: 36px">
liographystyle{ieeetr}

m ipsum\cite{Mafra2006}

liography{bibliografia}
e>
</section>

<section>
  <p><strong>R Project</strong></p>
  <br/>
  <ul>
    <li>É uma linguagem e um ambiente de desenvolvimento integrado para cálculos estatísticos e gráficos</li>
    <li>Possui alguma semelhança com o MATLAB (proprietário)</li>
  </ul>
</section>

<section>
  <p><strong>R Project</strong></p>
  <br/>
  <img src="files/r-terminal.png" />
</section>

<section>
  <p><strong>R Project</strong></p>
  <br/>
  <img src="files/r-barplot.png" />
</section>

<section>
  <p><strong>knitr:</strong> R Project + LaTeX</p>
  <p>Exemplo 3</p>
  <br/>
  <img src="files/screenshot-exemplo3.png" />
</section>

<section>
  <p><strong>knitr:</strong> R Project + LaTeX</p>
  <p>Arquivo exemplo3.Rnw</p>
  <br/>
  <img src="files/screenshot-gedit-artigo3.png" />
</section>

<section>
  <p><strong>knitr:</strong> R Project + LaTeX</p>
  <p>Makefile</p>
  <br/>
  <img src="files/screenshot-exemplo3-makefile.png" />
</section>

<section>
   <p>Obrigado!</p>
   <h3>http://joenio.me</h3>
   <h3>joenio@colivre.coop.br</h3>
   <small>esta apresentação foi feita com o software livre impress.js</small>
</section>
