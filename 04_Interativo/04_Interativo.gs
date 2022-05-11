#UNIVERSIDADE DE SAO PAULO
#LABORATORIO DE CLIMATOLOGIA E BIOGEOGRAFIA
#PROFA DRA MARIA ELISA SIQUEIRA
#GABRIELA LASTRA

#Esse programa interativo resulta na Temperatura Superficial nos Oceanos para
#os valores de lat e lon que o usuario desejar
#no periodo da decada de 1970

#Os dados de reanalise numerica da Temperatura do Ar Continental
#e da Temperatura Superficial dos Oceanos
#esta disponivel no site NOAA/NASA
#https://psl.noaa.gov/data/gridded/data.ncep.reanalysis.html

#comandos iniciais
'reinit'
'set display color white'
'c'

#abrindo banco de dados
'sdfopen sst.mon.mean.nc'

#aplicando recorte temporal para decada de 70 com t=949 e t=1309
'set t 949 1309'

#opcoes que apareceram antes da pergunta
say '-> LAT LON sugeridos'
say ' '
say 'mapa global lat -90 90 lon 0 360'
say 'mapa europa lat 25 90 lon -30 60'
say 'mapa america do norte lat 15 95 lon -170 -15'
say 'mapa america central lat 3 27 lon -120 -50'
say 'mapa america do sul lat -60 15 lon -85 -30'
say 'mapa africa lat -40 40 lon -20 55'
say 'mapa asia lat -20 90 lon 20 180'
say 'mapa oceania lat -60 0 lon 100 180'
say ' '
#processo interativo para fazer questionamentos ao usuario via terminal grads
prompt 'quais latitudes?'
#carrega a informacao vinda do usuario e define as lat inicial e final
pull minlat maxlat

#questionamento ao usuario para lon
prompt 'quais longitudes?'
#definindo lon incial e final
pull minlon maxlon

#aplicando os recortes
'set lat 'minlat%''%maxlat
'set lon 'minlon%''%maxlon

#display
#projecao em mapa preenchido
'set gxout shaded'
#distancia entre as coordenadas
'set xlint 60'
'set ylint 60'
'd sst'

#salvando mapa
'printim sst.gif '
