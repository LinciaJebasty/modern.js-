
const objName = new Object()//object constructor syntax
const objName2 = {} //Obiect literal syntax

//const personFirstName = 'Lincia'
//const personlastName = 'jebasty'
//const personAge = '27'
//const personFavColor = 'red'

const person ={
    firstName:'Lincia',
    lastName:'Jebasty',
    age:27,
    isAlive:true,
    parent:{
        father: 'Appa',
        mother: 'Amma',
   },
    //fullName: function () {
        //return this.firstName +''+ this.lastName
     //   return`${this.firstName} ${this.lastName}`;
   // },
   fullName(){

    return`${this.firstName} ${this.lastName}`;
    },
}

person.favColor = 'red'

//object merging
const personMethods ={
    YearOfBirth() {
        return new Date().getFullYear()-this.age

    },
    favNumbers: [2,4,6,8],
    get favNumbersCount(){
        return this.favNumbers.length
    },
}
//object merging
Object.assign(person,personMethods)

//spread operator
const finalObj = {...person,...personMethods}

//object cloning
const objCopied = Object.assign({},person)

//console.log(objCopied)
//Delete
delete person.age

function getFullName(firstName,lastName){
    return{
        firstName,
        lastName,
    }
}

console.log(person,person.favNumbersCount)











