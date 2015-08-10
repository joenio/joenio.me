# DOCUMENT VARIABLES

NAME= knitr-exemplo
CLEAN_FILES+= knitr-exemplo.tex *.sigla* *symbols* figure/* *.nav *.snm

# PROJECT VARIABLES

GZCAT= zcat
USE_PDFLATEX= true # directly generate .pdf files from the .tex
VIEWPDF= evince

include /usr/share/latex-mk/latex.gmk

knitr:
	Rscript knitr-exemplo.R

knitr-exemplo.tex: knitr
