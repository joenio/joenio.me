---
title: ENEDS | Mini-curso de integração entre R-Project e LaTeX
---

<div id="inicio" class="step" data-x="-1500" data-y="-1500" data-scale="20">
   <img src="files/eneds.png" width="200px" />
   <h2>ENEDS 2015</h2>
   <h3>Encontro Nacional de Engenharia e Desenvolvimento Social</h3>
   <h1>Introdução ao Software Livre e mini-curso de LaTeX e R-Project</h1>
   <h3>“Por trás de cada tecnologia, há sempre uma ideologia”</h3>
</div>

<div class="step" data-x="30000" data-y="-1500" data-scale="20">
  <p><strong>Joenio Costa</strong></p>
  <p>http://joenio.me</p>
  <br/>
  <ul>
    <li>Desenvolvedor de software (livre)</li>
    <li>Sócio/fundador da cooperativa Colivre</li>
    <li>Graduado em informática pela UCSal</li>
    <li>Mestrando na UFBA pelo PGCOMP</p>
  </ul>
</div>

<div class="step" data-x="60000" data-y="-1500" data-scale="20">
  <p><strong>Roteiro</strong></p>
  <ul>
    <li>Software livre</li>
    <li>LaTeX</li>
    <li>R-Project</li>
    <li>knitr</li>
  </ul>
</div>

<div class="step" data-x="90000" data-y="-1500" data-scale="20">
  <table><tr>
    <td style="width: 360px">
      <p><strong>Software livre</strong></p>
      <img src="files/gnu.png" />
    </td>
    <td>
      <ul class="font32">
        <li>Princípios e filosofia</li>
        <li>História</li>
        <li>Licenças de software</li>
        <li>Copyright, copyleft</li>
        <li>Histórico do software livre</li>
        <li>Desenvolvimento de SL</li>
        <li>Exemplos de softwares livres</li>
      </ul>
    </td>
  </tr></table>
</div>

<div class="step" data-x="120000" data-y="-1500" data-scale="20">
  <p><strong>Software livre</strong></p>
  <p>Princípios e questões filosóficas</p>
  <br/>
  <p style="font-size: 38px">"Por <em>software livre</em> devemos entender aquele software que
  respeita a liberdade e senso de comunidade dos usuários." [1]
  </p>
  <p style="font-size: 28px">
    <br/>
    [1] http://www.gnu.org/philosophy/free-sw.html
  </p>
</div>

<div class="step" data-x="150000" data-y="-1500" data-scale="20">
  <p><strong>Software livre</strong></p>
  <p>As quatro liberdades essenciais</p>
  <br/>
  <ul style="font-size: 32px">
    <li>A liberdade de executar o programa para qualquer fim</li>
    <li>A liberdade de estudar como funciona e adaptá-lo</li>
    <li>A liberdade de redistribuir cópias para ajudar o próximo</li>
    <li>A liberdade de distribuir cópias modificadas</li>
  </ul>
  <p style="font-size: 38px">
    <br/>
    “Permitir a distribuição de cópias é permitir a solidariedade social”
    -- Richard Stallman
  </p>
</div>

<div class="step" data-x="180000" data-y="-1500" data-scale="20">
  <p><strong>Software livre</strong></p>
  <p>Na prática o que tudo isto sinifica?</p>
  <br/>
  <p style="font-size: 38px">
    As quatro liberdades permitem que os usuários controlem o software e o
    que ele faz. Sem essas liberdades os usuários não controlam o software
    e passam a ser controlados por ele.
  </p>
  <br/>
  <p style="color: #555">
    Como isto acontece?
  </p>
</div>

<div class="step" data-x="210000" data-y="-1500" data-scale="20">
  <p><strong>Software "não-livre" é anti-ético</strong></p>
  <br/>
  <p style="font-size: 38px">
    Desenvolvedores de software <strong>não-livre</strong> ou software
    <strong>proprietário</strong> exercem controle sobre o software, e
    por meio dele, controlam os seus usuários, o que faz tais softwares
    serem um instrumento de poder injusto.
  </p>
</div>

<div class="step" data-x="240000" data-y="-1500" data-scale="20">
  <p><strong>História do software livre</strong></p>
  <br/>
  <ul>
    <li>No início (década de 60) o software era livre por "natureza"</li>
    <li>Em 1970 a IBM começou a vender seus softwares separados do hardware</li>
    <li>Em 1980 quase todo software era "proprietário"</li>
  </ul>
</div>

<div class="step" data-x="270000" data-y="-1500" data-scale="20">
  <p><strong>História do software livre</strong></p>
  <p>Nasce o Projeto GNU</p>
  <br/>
  <table style="text-align: center"><tr>
    <td style="width: 360px">
      <img src="files/gnu.png" />
      <p>1983, GNU</p>
    </td>
    <td style="font-size: 32px; vertical-align: top">
      <p><em>"uma maneira de trazer de volta o espírito cooperativo que
      prevalecia na comunidade de computação nos seus
      primórdios"</em></p>
      <br/>
      <p style="font-size: 22px">http://gnu.org/gnu/gnu-history.html</p>
    </td>
  </tr></table>
</div>

<div class="step" data-x="300000" data-y="-1500" data-scale="20">
  <p><strong>História do software livre</strong></p>
  <p>Nasce a Free Software Foundation</p>
  <br/>
  <table style="text-align: center"><tr>
    <td style="width: 360px">
      <img src="files/fsf.png" />
      <p>1985, FSF</p>
    </td>
    <td style="font-size: 32px; vertical-align: top">
      <p><em>"Fundação sem fins lucrativos criada para institucionalizar o
      Projeto GNU, bem como obter fundos para desenvolver e proteger o
      software livre"</em></p>
    </td>
  </tr></table>
</div>

<div class="step" data-x="330000" data-y="-1500" data-scale="20">
  <p><strong>História do software livre</strong></p>
  <p>GNU GPL e Copyleft</p>
  <br/>
  <p>Richard Stallman criou os mecanismos legais necessários para a
  existência do software livre</p>
</div>

<div class="step" data-x="360000" data-y="-1500" data-scale="20">
  <p><strong>Licenças de software</strong></p>
  <p>O que é licença de software?</p>
  <br/>
  <p>Definições expressas aos usuários de quais ações são autorizadas ou
  proibidas a respeito do uso do software</p>
</div>

<div class="step" data-x="390000" data-y="-1500" data-scale="20">
  <p><strong>Licenças de software</strong></p>
  <p>Software proprietário vs Software livre</p>
  <br/>
  <ul style="font-size: 40px">
    <li>Licença de software proprietário restringe todos os direitos ao autor do software</li>
    <li>Licença de software livre dá todos os direitos aos usuários do software</li>
    <li><em>Freeware não é software livre</em></li>
  </ul>
</div>

<div class="step" data-x="420000" data-y="-1500" data-scale="20">
  <p style="position: relative">
    <img src="files/gpl.png" width="260px" style="position: absolute; right: 0; top: 0" />
    <strong>Licenças de software</strong>
  </p>
  <p>Licenças do Projeto GNU</p>
  <br/>
  <ul style="font-size: 40px">
    <li>GNU GPL - General Public License</li>
    <li>GNU LGPL - Lesser General Public License</li>
    <li>GNU Affero GPL - General Public License</li>
    <li>GNU FDL - Free Documentation License</li>
  </ul>
</div>

<div class="step" data-x="450000" data-y="-1500" data-scale="20">
  <p><strong>Licenças de software</strong></p>
  <p>Só o GNU tem licenças livres?</p>
  <br/>
  <ul style="font-size: 40px">
    <li>A licença do Perl</li>
    <li>A Licença do X11</li>
    <li>A licença modificada do BSD</li>
    <li>A licença da Zlib</li>
  </ul>
  <br/>
  <p style="font-size: 22px">http://gnu.org/licenses/license-list.html</p>
</div>

<div class="step" data-x="480000" data-y="-1500" data-scale="20">
  <p style="position: relative">
    <img src="files/copyright.png" width="160px" style="position: absolute; right: 0; top: 0" />
    <strong>Copyright, copyleft</strong>
  </p>
  <p><em>Copyright - all rights reserved</em></p>
  <br/>
  <ul style="font-size: 38px">
    <li>O "direito de autor" ou copyright é a proteção de obras literárias e
    artísticas, se aplica também à software</li>
    <li>Não há qualquer formalidade para proteger a obra, o direito exclusivo
    nasce da criação</li>
  </ul>
</div>

<div class="step" data-x="510000" data-y="-1500" data-scale="20">
  <p style="position: relative">
    <img src="files/copyleft.png" width="160px" style="position: absolute; right: 0; top: 0" />
    <strong>Copyright, copyleft</strong>
  </p>
  <p><em>Copyleft - all rights reversed</em></p>
  <br/>
  <p style="font-size: 38px">Copyleft é uma forma de usar a legislação de
  proteção dos direitos autorais com o objetivo de retirar barreiras à
  utilização, difusão e modificação de uma obra criativa</p>
  <br/>
  <p style="font-size: 22px">http://pt.wikipedia.org/wiki/Copyleft</p>
  <p style="font-size: 22px">http://copyleft.org</p>
</div>

<div class="step" data-x="540000" data-y="-1500" data-scale="20">
  <p><strong>Documentário: InProprietário</strong></p>
  <p>O Mundo do Software Livre</p>
  <video controls>
    <source src="/videos/inproprietario.mp4" type"video/mp4">
  </video>
  <p style="font-size: 22px">Trabalho de conclusão do curso de Comunicação
  Social e Jornalismo de 2008 dos alunos: Daniel Pereira Bianchi e Johnata
  Rodrigo de Souza</p>
</div>

<div class="step" data-x="570000" data-y="-3000" data-scale="20">
  <p><strong>Histórico do software livre</strong></p>
</div>

<div class="step" data-x="570000" data-y="-1500" data-scale="20">
  <p>
    <table style="font-size: 36px; border-left: 2px solid #F99"><tr>
      <td>1983:&nbsp;</td><td style="font-size: 32px">Richard Stallman anuncia a criação do projeto GNU</td>
    </tr></table>
  </p>
</div>

<div class="step" data-x="570000" data-y="-500" data-scale="20">
  <p>
    <table style="font-size: 36px; border-left: 2px solid #F99"><tr>
      <td>1984:&nbsp;</td><td style="font-size: 32px">Stallman pede demissão para se dedicar ao GNU</td>
    </tr></table>
  </p>
</div>

<div class="step" data-x="570000" data-y="500" data-scale="20">
  <p>
    <table style="font-size: 36px; border-left: 2px solid #F99"><tr>
      <td>1985:&nbsp;</td><td style="font-size: 32px">Stallman funda a Free Software Foundation (FSF)</td>
    </tr></table>
  </p>
</div>

<div class="step" data-x="570000" data-y="1500" data-scale="20">
  <p>
    <table style="font-size: 36px; border-left: 2px solid #F99"><tr>
      <td>1987:&nbsp;</td><td style="font-size: 32px">A FSF vende cópias do softwares GNU ($$$)</td>
    </tr></table>
  </p>

</div>

<div class="step" data-x="570000" data-y="2500" data-scale="20">
  <p>
    <table style="font-size: 36px; border-left: 2px solid #F99"><tr>
      <td>1989:&nbsp;</td><td style="font-size: 32px">A FSF cria o conceito de copyleft e a licença GPL</td>
    </tr></table>
  </p>
</div>

<div class="step" data-x="570000" data-y="3500" data-scale="20">
  <p>
    <table style="font-size: 36px; border-left: 2px solid #F99"><tr>
      <td>1991:&nbsp;</td><td style="font-size: 32px">Linus Torvalds anuncia a criação do kernel Linux</td>
    </tr></table>
  </p>
</div>

<div class="step" data-x="570000" data-y="4500" data-scale="20">
  <p>
    <table style="font-size: 36px; border-left: 2px solid #F99"><tr>
      <td>1992:&nbsp;</td><td style="font-size: 32px">A força aérea dos EUA investe no compilador GNAT</td>
    </tr></table>
  </p>
</div>

<div class="step" data-x="570000" data-y="5500" data-scale="20">
  <p>
    <table style="font-size: 36px; border-left: 2px solid #F99"><tr>
      <td>1993:&nbsp;</td><td style="font-size: 32px">A SuSE é fundada com negócios em GNU/Linux</td>
    </tr></table>
  </p>
</div>

<div class="step" data-x="570000" data-y="6500" data-scale="20">
  <p>
    <table style="font-size: 36px; border-left: 2px solid #F99"><tr>
      <td>1994:&nbsp;</td><td style="font-size: 32px">O Debian e o Red Hat GNU/Linux são lançados</td>
    </tr></table>
  </p>
</div>

<div class="step" data-x="570000" data-y="7500" data-scale="20">
  <p>
    <table style="font-size: 36px; border-left: 2px solid #F99"><tr>
      <td>1995:&nbsp;</td><td style="font-size: 32px">O Red Hat GNU/Linux 2.0 é lançado</td>
    </tr></table>
  </p>
</div>

<div class="step" data-x="570000" data-y="8500" data-scale="20">
  <p>
    <table style="font-size: 36px; border-left: 2px solid #F99"><tr>
      <td>1996:&nbsp;</td><td style="font-size: 32px">O projeto KDE é anunciado</td>
    </tr></table>
  </p>
</div>

<div class="step" data-x="570000" data-y="9500" data-scale="20">
  <p>
    <table style="font-size: 36px; border-left: 2px solid #F99"><tr>
      <td>1997:&nbsp;</td><td style="font-size: 32px">O projeto GNOME é anunciado</td>
    </tr></table>
  </p>
</div>

<div class="step" data-x="570000" data-y="10500" data-scale="20">
  <p>
    <table style="font-size: 36px; border-left: 2px solid #F99"><tr>
      <td>1998:&nbsp;</td><td style="font-size: 32px">O Netscape Communicator é liberado como SL</td>
    </tr></table>
  </p>
</div>

<div class="step" data-x="570000" data-y="11500" data-scale="20">
  <p>
    <table style="font-size: 36px; border-left: 2px solid #F99"><tr>
      <td>1999:&nbsp;</td><td style="font-size: 32px">Dell, HP e SGI anunciam suporte ao GNU/Linux</td>
    </tr></table>
  </p>
</div>

<div class="step" data-x="570000" data-y="12500" data-scale="20">
  <p>
    <table style="font-size: 36px; border-left: 2px solid #F99"><tr>
      <td>2000:&nbsp;</td><td style="font-size: 32px">Sun libera o StartOffice sob licença LGPL</td>
    </tr></table>
  </p>
</div>

<div class="step" data-x="570000" data-y="13500" data-scale="20">
  <p>
    <table style="font-size: 36px; border-left: 2px solid #F99"><tr>
      <td>2001:&nbsp;</td><td style="font-size: 32px">IBM anuncia investimento de US$ 1 bilhão no Linux</td>
    </tr></table>
  </p>
</div>

<div class="step" data-x="570000" data-y="14500" data-scale="20">
  <p>
    <table style="font-size: 36px; border-left: 2px solid #F99"><tr>
      <td>2002:&nbsp;</td><td style="font-size: 32px">Criação das licenças Creative Commons</td>
    </tr></table>
  </p>
</div>

<div class="step" data-x="570000" data-y="15500" data-scale="20">
  <p>
    <table style="font-size: 36px; border-left: 2px solid #F99"><tr>
      <td>2003:&nbsp;</td><td style="font-size: 32px">Motorola inicia vendas de celulares com Linux</td>
    </tr></table>
  </p>
</div>

<div class="step" data-x="570000" data-y="16500" data-scale="20">
  <p>
    <table style="font-size: 36px; border-left: 2px solid #F99"><tr>
      <td>2004:&nbsp;</td><td style="font-size: 32px">Primeira versão do Ubuntu e do Firefox</td>
    </tr></table>
  </p>
</div>

<div class="step" data-x="570000" data-y="17500" data-scale="20">
  <p>
    <table style="font-size: 36px; border-left: 2px solid #F99"><tr>
      <td>2005:&nbsp;</td><td style="font-size: 32px">Sun Microsystems disponibiliza o Open Solaris</td>
    </tr></table>
  </p>
</div>

<div class="step" data-x="570000" data-y="18500" data-scale="20">
  <p>
    <table style="font-size: 36px; border-left: 2px solid #F99"><tr>
      <td>2006:&nbsp;</td><td style="font-size: 32px">Sun libera máquina virtual Java sob licença GPL</td>
    </tr></table>
  </p>
</div>

<div class="step" data-x="570000" data-y="19500" data-scale="20">
  <p>
    <table style="font-size: 36px; border-left: 2px solid #F99"><tr>
      <td>2007:&nbsp;</td><td style="font-size: 32px">A FSF lança a versão definitiva da GPL versão 3</td>
    </tr></table>
  </p>
</div>

<div class="step" data-x="570000" data-y="20500" data-scale="20">
  <p>
    <table style="font-size: 36px; border-left: 2px solid #F99"><tr>
      <td>2008:&nbsp;</td><td style="font-size: 32px">Nokia transforma o Symbian em software livre</td>
    </tr></table>
  </p>
</div>

<div class="step" data-x="570000" data-y="21500" data-scale="20">
  <p>
    <table style="font-size: 36px; border-left: 2px solid #F99"><tr>
      <td>2009:&nbsp;</td><td style="font-size: 32px">Oracle compra Sun por US$ 7,4 bilhões</td>
    </tr></table>
  </p>
</div>

<div class="step" data-x="570000" data-y="22500" data-scale="20">
  <p>
    <table style="font-size: 36px; border-left: 2px solid #F99"><tr>
      <td>2010:&nbsp;</td><td style="font-size: 32px">A Trolltech libera as bibliotecas Qt sob GPL</td>
    </tr></table>
  </p>
</div>

<div class="step" data-x="570000" data-y="23500" data-scale="20">
  <p>
    <table style="font-size: 36px; border-left: 2px solid #F99"><tr>
      <td>2011:&nbsp;</td><td style="font-size: 32px">Linus disponibiliza versão 2.6.38 do kernel Linux</td>
    </tr></table>
  </p>
</div>

<div class="step" data-x="600000" data-y="-1500" data-scale="20">
  <p><strong>Desenvolvimento de software livre</strong></p>
  <br/>
  <p>O movimento do software livre acabou criando novos paradigmas na
  produção de software</p>
  <br/>
  <ul style="font-size: 26px">
    <li>Equipes distribuídas e diversos tamanhos</li>
    <li>Trabalho voluntário + trabalho remunerado</li>
    <li>Comunicação síncrona e assíncrona via Internet</li>
    <li>Repositório de código distribuído e descentralizado</li>
  </ul>
</div>

<div class="step" data-x="630000" data-y="-1500" data-scale="20">
  <p><strong>Desenvolvimento de software livre</strong></p>
  <p>Ganhos sociais</p>
  <br/>
  <ul style="font-size: 42px">
    <li>Transferencia de tecnologia</li>
    <li>Transparência do processo de produção</li>
    <li>Oportunidades de negócio para todos</li>
    <li>Oportunidade de aprendizado</li>
    <li>Maior colaboração entre pessoas</li>
  </ul>
</div>

<div class="step" data-x="660000" data-y="-1500" data-scale="20">
  <p><strong>Exemplos de softwares livres</strong></p>
  <br/>
  <ul style="list-style: none; font-size: 38px; text-align: center">
    <li style="height: 240px; float: left; border: 1px solid #DDD; display: block; margin: 5px">
      <img width="150px" src="files/linux.png" /><p>Linux</p></li>
    <li style="height: 240px; float: left; border: 1px solid #DDD; display: block; margin: 5px">
      <img width="140px" src="files/debian.png" /><p>Debian</p></li>
    <li style="height: 240px; float: left; border: 1px solid #DDD; display: block; margin: 5px">
      <img width="130px" src="files/libreoffice.png" /><p>LibreOffice</p></li>
    <li style="height: 240px; float: left; border: 1px solid #DDD; display: block; margin: 5px">
      <img width="150px" src="files/firefox.png" /><p>Firefox</p></li>
    <li style="height: 240px; float: left; border: 1px solid #DDD; display: block; margin: 5px">
      <img width="150px" src="files/inkscape.png" /><p>Inkscape</p></li>
    <li style="height: 240px; float: left; border: 1px solid #DDD; display: block; margin: 5px">
      <img width="150px" src="files/gimp.png" /><p>Gimp</p></li>
    <li style="height: 240px; float: left; border: 1px solid #DDD; display: block; margin: 5px">
      <img width="150px" src="files/ardour.png" /><p>Ardour</p></li>
    <li style="height: 240px; float: left; border: 1px solid #DDD; display: block; margin: 5px">
      <img width="150px" src="files/vlc.png" /><p>VLC</p></li>
  </ul>
</div>

<div class="step" data-x="690000" data-y="-1500" data-scale="20">
  <p><strong>Exemplos de softwares livres</strong></p>
  <br/>
  <ul style="list-style: none; font-size: 38px; text-align: center">
    <li style="float: left; border: display: block; margin: 5px">
      <img width="180px" src="files/latex.png" /><p>LaTeX</p></li>
    <li style="float: left; border: display: block; margin: 5px">
      <img width="180px" src="files/r.png" /><p>R Project</p></li>
    <li style="float: left; border: display: block; margin: 5px">
      <img width="180px" src="files/knitr.png" /><p>knitr</p></li>
  </ul>
</div>

<div class="step" data-x="720000" data-y="-1500" data-scale="20">
  <p><strong>LaTeX</strong></p>
  <br/>
  <p style="font-size: 40px">O LaTeX é uma linguagem de marcação e um
  ambiente para diagramação de textos utilizado amplamente na produção de
  textos matemáticos e científicos devido a sua alta qualidade
  tipográfica</p>
  <br/>
  <p style="font-size: 22px">http://latex-project.org</p>
</div>

<div class="step" data-x="750000" data-y="-1500" data-scale="20">
  <p><strong>LaTeX</strong></p>
  <br/>
  <ul style="font-size: 38px">
    <li>Desenvolvido na década de 80 por Leslie Lamport</li>
    <li>Possui abstrações para lidar facilmente com: Bibliografias,
      Citações, Formatos de páginas e Referência cruzada</li>
    <li>O usuário é encorajado a trabalhar com conceitos mais lógicos,
    como: capítulos, seções, etc</li>
  </ul>
</div>

<div class="step" data-x="780000" data-y="-1500" data-scale="20">
  <p><strong>LaTeX</strong></p>
  <p>Exemplo 1</p>
  <br/>
  <img src="files/screenshot-documentos.png" />
</div>

<div class="step" data-x="787000" data-y="-1500" data-scale="20">
  <p style="font-size: 36px">Criar nova pasta</p>
  <br/>
  <img src="files/screenshot-criar-pasta.png" />
</div>

<div class="step" data-x="799000" data-y="-1500" data-scale="20">
  <p style="font-size: 36px">Digite: exemplo1</p>
  <br/>
  <img src="files/screenshot-nomear-pasta.png" />
</div>

<div class="step" data-x="809900" data-y="-1500" data-scale="20">
  <p style="font-size: 36px">Pasta exemplo1 criada</p>
  <br/>
  <img src="files/screenshot-pasta-exemplo1.png" />
</div>

<div class="step" data-x="821000" data-y="-1500" data-scale="20">
  <p style="font-size: 36px">Abra a pasta e crie novo arquivo</p>
  <br/>
  <img src="files/screenshot-criar-ficheiro.png" />
</div>

<div class="step" data-x="832700" data-y="-1500" data-scale="20">
  <p style="font-size: 36px">Digite: artigo1.tex</p>
  <br/>
  <img src="files/screenshot-nomear-ficheiro.png" />
</div>

<div class="step" data-x="843500" data-y="-1500" data-scale="20">
  <p style="font-size: 36px">Arquivo artigo1.tex criado</p>
  <br/>
  <img src="files/screenshot-artigo1.png" />
</div>

<div class="step" data-x="854500" data-y="-1500" data-scale="20">
  <p style="font-size: 36px">Abra o arquivo artigo1.tex</p>
  <br/>
  <img src="files/screenshot-gedit-artigo1.png" />
</div>

<div class="step" data-x="867200" data-y="-1500" data-scale="20">
  <p style="font-size: 36px">Crie novo arquivo: Makefile</p>
  <br/>
  <img src="files/screenshot-nomear-makefile.png" />
</div>

<div class="step" data-x="878200" data-y="-1500" data-scale="20">
  <p style="font-size: 36px">Abra o arquivo Makefile</p>
  <br/>
  <img src="files/screenshot-gedit-makefile.png" />
</div>

<div class="step" data-x="890900" data-y="-1500" data-scale="20">
  <p style="font-size: 36px">Salve, feche os arquivos,<br/>e abra o terminal</p>
  <br/>
  <img src="files/screenshot-abrir-terminal.png" />
</div>

<div class="step" data-x="900000" data-y="-1500" data-scale="20">
  <p style="font-size: 36px">Digite o comando make no terminal</p>
  <br/>
  <img src="files/screenshot-terminal-make.png" />
</div>

<div class="step" data-x="912000" data-y="-1500" data-scale="20">
  <p style="font-size: 36px">Modifique o arquivo Makefile</p>
  <br/>
  <img src="files/screenshot-gedit-makefile-v2.png" />
</div>

<div class="step" data-x="780000" data-y="12000" data-scale="20">
  <p><strong>LaTeX</strong></p>
  <p>Exemplo 2</p>
  <br/>
  <img src="files/screenshot-documentos.png" />
</div>

<div class="step" data-x="787000" data-y="12000" data-scale="20">
  <p style="font-size: 36px">Criar nova pasta</p>
  <br/>
  <img src="files/screenshot-criar-pasta.png" />
</div>

<div class="step" data-x="799000" data-y="12000" data-scale="20">
  <p style="font-size: 36px">Digite: exemplo2</p>
  <br/>
  <img src="files/screenshot-nomear-pasta-2.png" />
</div>

<div class="step" data-x="809900" data-y="12000" data-scale="20">
  <p style="font-size: 36px">Pasta exemplo2 criada</p>
  <br/>
  <img src="files/screenshot-pasta-exemplo2.png" />
</div>

<div class="step" data-x="821000" data-y="12000" data-scale="20">
  <p style="font-size: 36px">Abra a pasta e crie novo arquivo</p>
  <br/>
  <img src="files/screenshot-criar-ficheiro.png" />
</div>

<div class="step" data-x="832700" data-y="12000" data-scale="20">
  <p style="font-size: 36px">Digite: artigo2.tex</p>
  <br/>
  <img src="files/screenshot-nomear-ficheiro-2.png" />
</div>

<div class="step" data-x="843500" data-y="12000" data-scale="20">
  <p style="font-size: 36px">Arquivo artigo2.tex criado</p>
  <br/>
  <img src="files/screenshot-artigo2.png" />
</div>

<div class="step" data-x="854500" data-y="12000" data-scale="20">
  <p style="font-size: 36px">Abra o arquivo artigo2.tex</p>
  <br/>
  <img src="files/screenshot-gedit-artigo2.png" />
</div>

<div class="step" data-x="867200" data-y="12000" data-scale="20">
  <p style="font-size: 36px">Crie novo arquivo: Makefile</p>
  <br/>
  <img src="files/screenshot-nomear-makefile.png" />
</div>

<div class="step" data-x="878200" data-y="12000" data-scale="20">
  <p style="font-size: 36px">Abra o arquivo Makefile</p>
  <br/>
  <img src="files/screenshot-exemplo2-gedit-makefile.png" />
</div>

<div class="step" data-x="890900" data-y="12000" data-scale="20">
  <p style="font-size: 36px">Salve, feche os arquivos,<br/>e abra o terminal</p>
  <br/>
  <img src="files/screenshot-abrir-terminal.png" />
</div>

<div class="step" data-x="900000" data-y="12000" data-scale="20">
  <p style="font-size: 36px">Digite o comando make no terminal</p>
  <br/>
  <img src="files/screenshot-terminal-make.png" />
</div>

<div class="step" data-x="900000" data-y="30000" data-scale="20">
  <p><strong>LaTeX e normas ABNT</strong></p>
  <p>Pacote abnTeX2</p>
  <br/>
  <p style="font-size: 36px">O LaTeX tem a capacidade de formatar o
  documento final seguindo normas de formatação específicas através de
  classes, para as normas ABNT utiliza-se a suíte abnTeX2</p>
  <br/>
  <p style="font-size: 22px">http://www.abntex.net.br</p>
</div>

<div class="step" data-x="870000" data-y="30000" data-scale="20">
  <p><strong>GNU make e Makefiles</strong></p>
  <br/>
  <p style="font-size: 36px">Make é uma ferramenta para automatizar a
  compilação e construção de programas</p>
  <br/>
  <p style="font-size: 22px">http://www.gnu.org/software/make</p>
</div>

<div class="step" data-x="840000" data-y="30000" data-scale="20">
  <p><strong>LaTeX</strong></p>
  <p>Regras de formatação</p>
  <br/>
  <ul style="font-size: 42px">
    <li>Negrito e Itálico</li>
    <li>Lista de itens</li>
    <li>Tabelas</li>
    <li>Imagens</li>
  </ul>
</div>

<div class="step" data-x="810000" data-y="30000" data-scale="20">
  <p><strong>LaTeX e BibLaTeX</strong></p>
  <p>Referências bibliográficas</p>
  <br/>
 style="font-size: 36px">
liographystyle{ieeetr}

m ipsum\cite{Mafra2006}

liography{bibliografia}
e>
</div>

<div class="step" data-x="780000" data-y="30000" data-scale="20">
  <p><strong>R Project</strong></p>
  <br/>
  <ul>
    <li>É uma linguagem e um ambiente de desenvolvimento integrado para cálculos estatísticos e gráficos</li>
    <li>Possui alguma semelhança com o MATLAB (proprietário)</li>
  </ul>
</div>

<div class="step" data-x="750000" data-y="30000" data-scale="20">
  <p><strong>R Project</strong></p>
  <br/>
  <img src="files/r-terminal.png" />
</div>

<div class="step" data-x="720000" data-y="30000" data-scale="20">
  <p><strong>R Project</strong></p>
  <br/>
  <img src="files/r-barplot.png" />
</div>

<div class="step" data-x="690000" data-y="30000" data-scale="20">
  <p><strong>knitr:</strong> R Project + LaTeX</p>
  <p>Exemplo 3</p>
  <br/>
  <img src="files/screenshot-exemplo3.png" />
</div>

<div class="step" data-x="677000" data-y="30000" data-scale="20">
  <p><strong>knitr:</strong> R Project + LaTeX</p>
  <p>Arquivo exemplo3.Rnw</p>
  <br/>
  <img src="files/screenshot-gedit-artigo3.png" />
</div>

<div class="step" data-x="664000" data-y="30000" data-scale="20">
  <p><strong>knitr:</strong> R Project + LaTeX</p>
  <p>Makefile</p>
  <br/>
  <img src="files/screenshot-exemplo3-makefile.png" />
</div>

<div id="fim" class="step" data-x="261500" data-y="-300" data-scale="8">
   <p>Obrigado!</p>
   <h3>http://joenio.me</h3>
   <h3>joenio@colivre.coop.br</h3>
   <small>esta apresentação foi feita com o software livre impress.js</small>
</div>
