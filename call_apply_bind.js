// 
const obj = {
    firstName :'Vivek',
    lastName : 'Verma',
    fullName : function (){
        return "The Full Name is :- " + this.firstName + this.lastName ; // Methods like call(), apply(), bind() can refer this to any object.
    }
}

const obj1 = {
    firstName:'Vipul',
    lastName:'Verma'
}

console.log(obj.fullName.call(obj));  // With Call() an object can use a method belonging to other object.

const person = {
fullName: function(city, country) {
  return this.firstName + " " + this.lastName + "," + city + "," + country;
}
}

const person1 = {
firstName:"John",
lastName: "Doe"
}

console.log(person.fullName.apply(person1, ["Oslo", "Norway"]));
 // Math.max.apply(null,[1,2,3]) // return 3;
// console.log(obj.fullName.apply(obj1)) 
// The call and apply method are the same just apply method takes the arguments in an array

// In the bind method an object can borrow a method from another object.
const persons = {
firstName:"John",
lastName: "Doe",
display: function () {
  let x = document.getElementById("demo");
  x.innerHTML = this.firstName + " " + this.lastName;
}
}

let display = persons.display.bind(persons);
setTimeout(display, 3000); // callback method.

// Implicit and Explicit binding

const alice = {
  name: "newalice",
  display: () => {
      console.log(this);
  }
}

const bob = {
  name:"new bob",
}

alice.display // imlicit call
alice.display.call(bob); // explicit call