// let newArr = ['1', 'am', 'student','left'];
/* arr.splice(1,1);
// 1- index, 1 - delete numbers
console.log(arr);
arr.splice(1,2);
console.log(arr);
removedItems = arr.splice(1,2);
let newArr = [...arr]
newArr.splice(1,2);
*/
/*
newArr.splice(1,1, ' - ', ' cool ')
console.log(arr); */
/*
let arr = ['1', '', '34', 'next'];
arr.splice(0, 2, "Alex");
console.log(arr);
newarr1 = [...arr];//spred.arr;
newarr2 = [...arr];//spred.arr;

newarr1.splice(2, 0, "Nick");
console.log(newarr1);
newarr = newArr.join(',') // ('space') without - allstring
console.log(newarr);
*/
//не перезаписывает массив, но работает с элементами массива - выводит всё в одну строку
let function arr(){
    let arr = ['I', 'love', 'sleep'];
    arr.splice(2,1, 'JS');
    newArr = arr.join(' ');
    return arr; 
}
console.log(arr);

//spred.operator = [...arr]
let description = 'Lorem, pop, tem. smem';
description = description.split(', ')
description = description.split(', pop') // вырезать элементы
imgName = 'some-pets.png';
imgName = imgName.split('.')[0]


function getStrAsUpperCase(str){
    let otherPartOfString = str.split('');
   // return [str[0].toUpperCase(), str]
   //return [str.splice(0,1)[0].toUpperCase() + str.join('')]
   return otherPartOfString.splice(0,1)[0].toUpperCase() + otherPartOfString.join('')
}


// 'vasia pupkin'
function main(str){
const str = "vasia pupkin";
let arr = str.split(' ');
let resname = '';
for(let name of arr){
    resname += getStrAsUpperCase() + '';
    return resname;
}
};

let getFullUpperCaseName = str => {
    let arrOfNames = str.split(' ');
    let result = '';
    for (let name of arrOfNames){
        result += getStrAsUpperCase(name)+ ' ';
        return result.trim(); //.trim() - удаляет пробелы по бокам
    }
    getFullUpperCaseName('vasya pupkin')
}

let getFullNameCase = str => str.split(' ').map(name => 
    getStrAsUpperCase(name)).join(' ');


    let closer = () => {
        let count = 0;
        return () => ++count;
    }

    let newCloser = closer();
