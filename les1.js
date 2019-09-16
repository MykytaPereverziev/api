//Создать 3 обьекта, в которых должно быть не меньше чем по 5 свойств в каждом. Создать новый обьект, который будет содержать все свойства каждого из трех обьектов.
/* let obj1 = {name: ''}; 
let obj2 = {color: ''}; 
let obj3 = {typeBody: ''}; 
let obj4 = {typeMotion: ''};
let obj5 = {typePatrol: ''};

const car = {
    name: 'BMW',
    color: 'blue',
    typeBody: 'sedan',
    typeMotion: 'all wheels drive',
    typePatrol: 'disel'
};

let newObject = {...obj3,...obj2}; 
console.log(newObject);

let getPropWithoutStr = function(obj){
    let valuesArr = Object.values(obj);
    let resultArr = valueArr.filter(item => typeof item !== 'string');
    return resultArr;
};

console.log(getPropWithoutStr(car));

/*Object.values(car).forEach(item => {
    console.log(item);
    if (name == typeof(name) {

    }
}
        );

 Cоздать функцию, которая вернет массив значений свойств обьекта полученного в первом задании const allPropObj = { name: 'Petya', email: 'example@mail.com', isHuman: true, sayHello: name => `Hello, ${name}`, } за исключением значений тип которых будет равен строке.
getPropWithoutStr(allPropObj) /// [true, function()];
Создать кастомную функцию которую можно вызвать из любого массива и которая будет возвращать объек, ключи и значения которого будут иметь тоже имя, что и их итерируемое значение. Подсказка
let arr = ['apple', 'banana', 'kiwi']; 
let returnedObject = arr.createObjFromArr(); ///
returnedObject {
    kiwi: 'kiwi',
    banana: 'banana',
    apple: 'apple',
} */

let arr = ['apple', 'banana', 'kiwi'];

function create(arrProp) {
    let objRes = {};
    for(let i = 0; i < arrProp.length; i++){
        let obj = {};
        let keyName = arrProp[i];
        obj[keyName] = arrProp[i];
        objRes = {...objRes, ...obj};
    }
    return objRes;
}
console.log(create(arr));