const person = new Promise((resolve)=>{
    resolve({
        cor:'branco',
        altura:'1.70'
    })
})
person.then(valorConta=>{
    console.log(valorConta.altura/2)
})
person.then(valor=>{
    console.log(valor.altura)
})
person.then((valor2)=>{
    console.log(valor2.cor.toUpperCase())
})
