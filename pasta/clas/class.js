// class Person {
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
//     /*função na class*/
//     calcAge(){
//         console.log(this.age*2)
//     }
// }
// const kid = new Person('carlos',10)
// kid.calcAge()

function getDadosToClass() {
  const array = [1, 2, 3, 0, 5];
  const valueUserPushToArray = 4;

  array.push(valueUserPushToArray);
  console.log(array);

  //ajustando o array
  const arraySort = array.sort();
  console.log(arraySort);

  //alterando o array
  const contaArray = array.map((p) => {
    return p / 2;
  });
  console.log(contaArray);
}
getDadosToClass();
