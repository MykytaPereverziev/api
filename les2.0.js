
let arr = [23, 5, 6, 789,12];

arr.sort((a,b) => a-b);

arr.sort((a,b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    if (a == b) return 0;
});


let arr2 = ['aac', 'aab', 'ser', 'a', 'fre'];

arr2.sort();