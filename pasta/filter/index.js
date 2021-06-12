
const produto = [
    {nome: 'celular',preco:2990,fragil:true ,venda:'ok'},
    {nome: 'moto',preco:2000,fragil:true , venda: 'ok'},
    {nome: 'carro',preco:2210,fragil:true ,venda:'nao'},
    {nome: 'teclado',preco:390,fragil:true,venda: 'ok'},
    {nome: 'calça',preco:590,fragil:false,venda: 'nao'},
    {nome: 'pc',preco:9990,fragil:false,venda: 'ok'},
    {nome: 'relogio',preco:1990,fragil:true,venda: 'nao'},
    {nome: 'nootbook',preco:3690,fragil:true,venda: 'ok'},
    {nome: 'mousse',preco:390,fragil:false,venda: 'estoque'},
    {nome: 'caneca',preco:990,fragil:false,venda: 'estoque'},
    {nome: 'lapis',preco:310,fragil:false,venda: 'estoque'}


]
//filtrando produtos \\
//mostrando produtos que não foram vendidos
console.log(produto.filter(function(p){
       return p.venda === 'nao'
}))

// || const de vendasOk filtrando apenas os produtos vendidos ||
const vendaOk = produto=> produto.venda === 'ok'
console.log(produto.filter(vendaOk))
/*


*/
