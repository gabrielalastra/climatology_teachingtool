#UNIVERSIDADE DE SAO PAULO
#LABORATORIO DE CLIMATOLOGIA E BIOGEOGRAFIA
#PROFA DRA MARIA ELISA SIQUEIRA
#GABRIELA LASTRA

#Esse programa desenvolve dois mapas alinhados horizontalmente
#calculando a media e o desvio padrao em relacao a media
# entre 1997-1998
#no banco de dados de Temperatura Superficial dos Oceanos

#Os dados de reanalise numerica
#da Temperatura Superficial dos Oceanos
#esta disponivel no site NOAA/NASA
#https://psl.noaa.gov/data/gridded/data.ncep.reanalysis.html

#comandos iniciais
'reinit'
'set display color white'
'c'

#abrindo arquivo de Temperatura Superficial dos Oceanos
'sdfopen sst.mon.mean.nc'

#definindo variaveis de media e desvio padrao para 1997-98  t=1273 e t=1296
'define media1=ave(sst, t=1273,t=1296)'
'define desvp=sqrt(ave(pow(sst-media1,2),t=1273,t=1296))'


#plot desvio padrao
#definindo coordenandas para o plot
'set parea 0.5 5.5 0 8.5'
#tirando linhas da projecao
'set grads off'
'set grids off'
#mapa preenchido
'set gxout shaded'
#intervalo entre coordenandas
'set xlint 60'
'set ylint 60'
'd desvp'
#titulo
'draw title Desvio Padrao'
#legenda
'xcbar 0.8 5.5 2.1 2.3'
'draw string 6.0 2.3 (`ao`nC)'

#saindo desse recorte
'set parea off'

#plot media
#definindo coordenadas para o plot
'set parea 5.9 10.9 0 8.5'
'set grads off'
'set grids off'
'set gxout shaded'
'set xlint 60'
'set ylint 60'
'd media1'
'draw title Media'
'xcbar 6.2 10.9 2.1 2.3'
'draw string 6.0 2.3 (`ao`nc)'
'set parea off'


#definindo a string cor preta =1; alinhamento centro=c; espessura=10; rotacao 0
'set string 1 c 10 0'
#definindo tamanho da string horizontal e vertical
'set strsiz 0.35 0.35'
#coordenadas do titulo
'draw string 5.2 7.5 TSM em 1997/98'

#salvando
'printim media_desvp_sst.png'
