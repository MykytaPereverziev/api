/*
class Car {
    constructor(name){
        this.name = name;
        this.getName();
    }
    getName(){
        return this.name;
    }
}
let audiAsCar = new Car('Audi');

class Cat {
    constructor(name){
        this.name = name;
        //this.getSay();
}
getSay(){
    console.log(this.name);
}
}
let cat = new Cat('Miay')

class Pers extends Cat{
    constructor(name){
    super(name);
    this.color = color;
    this.ishair = true;
    this.name = 'Barsik';
    }
    getPersMiay(){
        console.log('AMiayyy!');
    }
}
let pers = new Pers('Myrzik');

class Car {
    constructor(wheels, color, body){
        this.wheels = wheels;
        this.color = color;
        this.body = body;
    }
    getinfo(){
        console.log('it`s car');
    }
};
class Audi extends Car{
    constructor(wheels, color, body, city){
    super (wheels, color, body);   
    this.city = city;
    }
    //getnameofcity(){
        getinfo(){
        console.log('the best car in the world');
    }
};
let audi = new Audi('4', 'yelow', 'body', 'Berlin');

console.log(audi.getinfo());
*/
//get,set -er
class User{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
        this.fullName = '';
    }
    get fullNameS(){
        return this.surname + " " + this.name;
    }
    set fullNameS(fullname){ //в основном для перписывании методов
        let userArr = fullname.split(' ');
        this.user = userArr[1];
        this.surname = userArr[0];

        this.fullName = fullname;
        
    }
}
let user = new User('Vasia', 'Pupkin');

console.log(user.fullNameS);
console.log(user.fullNameS = "asd");

 user.fullnameS = 'Puskin Alexander'; 

