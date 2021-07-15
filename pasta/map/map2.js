const carros =[
    '{"nome" : "volks" , "valor" : "240k"}',
    '{"nome" : "ferrari"  , "valor" : "300k"}',
    '{"nome" : "mercedes" , "valor" : "100k"}'
]
//retornar um array apenas os preços

const paraObjet = json =>JSON.parse(json)
const apenasPreco = carros =>carros.valor
const resultado = carros.map(paraObjet).map(apenasPreco)
console.log(resultado)


/*map*/
const obj = [1,2,3]
const novoobj = obj.map((e)=>{
    return e*2
})
console.log(novoobj)