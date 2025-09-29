const Persons = function (name) {
    this.name = name;
  }

  const Persons2 =function(name, age) {
    Persons.call(this, name); 
    this.age = age;
  }


Persons.prototype.greet = function(){
    console.log(`Hello ${this.name}`)
}



Persons2.prototype = Object.create(Persons.prototype);

Persons2.prototype.constructor = Persons2;

let x = new Persons2("Ahmed",22)
x.greet()

