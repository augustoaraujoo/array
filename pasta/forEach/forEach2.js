const jogadores = ['augusto','pedro','carla','lucas','arthur','josé','antony']

jogadores.forEach(function(nome,indice,array){
    console.log(`(${indice+0})  ${nome} `)
    console.log(array)
})

jogadores.forEach(nome=>console.log(`seu nome é ${nome}`.replace('é','É')))
//console.log(nome.replace('objeto que será removido','objeto que irá substituir'))
//mostrando os  nomes
 