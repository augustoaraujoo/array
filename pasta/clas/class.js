class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }
    /*função na class*/
    calcAge(){
        console.log(this.age*2)
    }
}
const kid = new Person('carlos',10)
kid.calcAge()

const jovem = new Person('pedro',23)
jovem.calcAge()
console.log(kid,jovem)