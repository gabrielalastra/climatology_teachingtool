#UNIVERSIDADE DE SAO PAULO
#LABORATORIO DE CLIMATOLOGIA E BIOGEOGRAFIA
#PROFA DRA MARIA ELISA SIQUEIRA
#GABRIELA LASTRA


#Esse script calcula a anomalia da temperatura superficial dos oceanos
#na decada de 1970 em relacao a media global do seculo XX
#e a anomalia durante o evento El Nino em  1997-1998
#imprimindo tambem a media global do seculo XX
#gerando tres arquivos em extensao png

#Os primeiros comandos garantem que o programa nao execute outro simultaneamente e troca o fundo do display para branco
'reinit'
'set display color white'
'c'

#abrindo o banco de dados
'sdfopen sst.mon.mean.nc'

#Calculando a media dos anos 70, que comeca com o tempo=949 e termina em t=1069
'define media70=ave(sst,t=949,t=1069)'

#calculando a media global do seculo, que comeca com t=109 e termina em t=1309
'define mediaXX=ave(sst,t=109,t=1309)'

#Anomalia da decada de 70 em relacao a media do seculo
'define anom70=media70-mediaXX'

#Anomalia durante o El Nino 1997-98, que comeca com t=1273 e termina em t=1296
'define mediaEN=ave(sst, t=1273,t=1296)'
'define anomEN=mediaEN-mediaXX'

#Escolhendo os detalhes da visualizacao
#grafico preenchido
'set gxout shaded'
#com intervalos de coordenadas de 60graus
'set xlint 60'
'set ylint 60'

#display anomalia na decada de 70
'd anom70'
'xcbar'
'draw string 1.2 0.75 (`ao`nC)'
#titulo
'draw title Anomalia da TSM na decada de 70 em relacao a media do secXX'
#salvando o mapa em png
'printim sst.anomalia70.png'
#limpando o display para novo plot
'c'

#display media
'd mediaXX'
'xcbar'
'draw string 0.8 0.75 (`ao`nC)'
#titulo
'draw title Media Global da TSM no seculo XX'
#salvando em png
'printim sst.mediaXX.png'
#limpando o display
'c'

#display anomalia El Nino
'd anomEN'
'xcbar'
'draw string 0.8 0.75 (`ao`nC)'
#titulo
'draw title Anomalia da TSM durante 1997-1998\em relacao a media do secXX'
#salvando em png
'printim sst.anomaliaEN.png'


