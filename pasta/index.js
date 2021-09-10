const array = [0, 1, 2, 3, 4, 5];
//apenas visualizando o arary
// console.log(`meus arrays = ${array}`)

const array2 = [0, 1, 2, 3, 4, 5];
//adicionando o valor "66" no array2
array2.push(66);
console.log(array2);

const array3 = [0, 1, 2, 3, 4, 5];
//buscando o número 3 e trocando ele por "6"
array3[3] = 6;
console.log(array3);

const array4 = [1, 2, 3, 4, 5];
/*mostra quantos números tem no array4*/
console.log(array4.length);

const array5 = {
  nome: "userAll",
  color: "blue",
};
console.log(Object.entries(array5));
// Object.values || Object.keys || Object.freeze \\

const array6 = ["b", "a", "d", "e", "f", "c"];
//organiza o array a,b,c,d,e,f
array6.sort();
console.log(array6);

const array7 = ["joâo", "pedro", "lucas"];
array7.pop(); // remove o último elemento
array7.shift(); // remove o primeiro elemento
array7.unshift("user"); // adiciona na indice "0"

//concat
const nomeH = ["augusto", "pedro"];
const nameM = ["julia", "rosa"];
const todos = nomeH.concat(nameM);
console.log(todos);

const array = [0, 1, 2, 3, 4, 5];

function Idade(array) {
  return array.map((ar) => ar + 2);
}
function Busca(array) {
  return array.filter((p) => {
    return p === 2;
  });
}
console.log(Idade(array));
console.log(Busca(array));
