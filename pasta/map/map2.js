const carrinho =[
    '{"nome" : "Caneta" , "valor" : 3.54}',
    '{"nome" : "Lápis"  , "valor" : 9.54}',
    '{"nome" : "Borracha" , "valor" : 10.54}'
]
//retornar um array apenas os preços

const paraObjet = json =>JSON.parse(json)
const apenasPreco = produto =>produto.valor
const resultado = carrinho.map(paraObjet).map(apenasPreco)
console.log(resultado)