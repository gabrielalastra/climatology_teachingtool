#UNIVERSIDADE DE SAO PAULO
#LABORATORIO DE CLIMATOLOGIA E BIOGEOGRAFIA
#PROFA DRA MARIA ELISA SIQUEIRA
#GABRIELA LASTRA

#Esse script considera os dados de Temperatura do Ar Continental
#na America do Sul em janeiro de 1970
#E os dados de Temperatura Superficial dos Oceanos
#para o globo em projecao cilidrica/ projecao de mercator
#e salva os dois mapas separadamente em PNG

#Os dados de reanalise numerica da Temperatura do Ar Continental
#e da Temperatura Superficial dos Oceanos
#esta disponivel no site NOAA/NASA
#https://psl.noaa.gov/data/gridded/data.ncep.reanalysis.html

#Comandos iniciais
#reiniciando
'reinit'
#fundo branco
'set display color white'
'c'

#abrindo dados de temperatura do ar
'sdfopen air.mon.mean.nc'

#definindo coordenadas da America do Sul
'set lat -60 15'
'set lon -85 -30'

#definindo tempo em janeiro de 1970
'set t 265'

#definindo eixos lat e lon
'set xlint 20'
'set ylint 20'

#modelo de grafico preenchido
'set gxout shaded'

#exibir variavel georreferenciada
'd air'

#titulos e barra de cores
'draw title Temp. Superficial em 1970'

#se nao especificar a funcao encontra o encaixe
'xcbar'

#salvando mapa da america latina
'printim air.americalatina.1970.png '

#limpando o display
'c'
#limpando o banco de dados
'reinit'
#display branco
'set display color white'
'c'

#abrindo arquivo de temperatura superficial dos oceanos
'sdfopen sst.mon.mean.nc'

#para um grafico horizontal com legendas
#e necessario definir uma area para o grafico e outra para legenda
#selecionando area xmin xmax ymin ymax
'set parea 1.2 10.2 2.3 7.0'

#grafico preenchido
'set gxout shaded'

#recorte temporal em janeiro de 1970
'set t 949'

#distancia entre os eixos
'set xlint 60'
'set ylint 60'

#display da variavel
'd sst'

#titulos
'draw title Temperatura Superficial dos Oceanos janeiro/1970'
'draw xlab longitude'
'draw ylab latitude'

#saindo da area do mapa
'set parea off'
#barra de cores
'xcbar -dir h 1.6 1.4'
'draw string 1.0 1.4 (`ao`nC)'

#salvar o mapa
'printim sst.global.1970.png'