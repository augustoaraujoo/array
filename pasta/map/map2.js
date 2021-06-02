const carros =[
    '{"nome" : "volks" , "valor" : "240k"}',
    '{"nome" : "ferrari"  , "valor" : "300k"}',
    '{"nome" : "mercedes" , "valor" : "1k"}'
]
//retornar um array apenas os preços

const paraObjet = json =>JSON.parse(json)
const apenasPreco = carros =>carros.valor
const resultado = carros.map(paraObjet).map(apenasPreco)
console.log(resultado)
