    const aprovados = ['joao','pedro','carlos']

/*percorrendo o array e listando ele com forEach*/
// esses 3 parametros opcionais 
    aprovados.forEach(function(nome,indice){
        console.log(`(${indice+0})  ${nome} `)
    })
    aprovados.forEach(nome=>console.log(`nome do aluno [${nome}]`))

