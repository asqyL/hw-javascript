(function () {


//1.Написать функцию сравнения двух массивов.
//  Функция принимает на вход два массива, сравнивает их и возвращает true,
//  если массивы равны и false, если не равны.

let arr1 = [1, 2, 4],
    arr2 = [1, 2, 4];

function compArrs(arr1, arr2){
    if (!Array.isArray(arr1) || !Array.isArray(arr2)){
        console.log("It`s not massive");
        return;
    }

    if (arr1.lenght !== arr2.lenght) {
        console.log("false");
        return;
    }
    
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]){
            console.log("false");
            return;
        }

        console.log("true");
        return;
    }
}

console.log(compArrs(arr1, arr2));


//2. Дано натуральное число N. 
//   Вычислите сумму его цифр, использую рекурсию 
//   (строки, массивы и циклы использовать запрещено).
// let N = 345;
function sumN(N){
    if (N < 10) {
        return N;
    }

    return N % 10 + sumN(N / 10) ^ 0;
}

console.log(sumN(345));


// Task3


function range(n1, n2, j){
    if (!n1 || !n2) {
        console.log("data not transferred");
        return;
    }

    if (!j) {
        j = 1;
    }

    let arr = [];
    
    arr [0] = n1;


    for (i=1; n1+j <= n2; i++){
       n1 = n1 + j
       arr.push(n1);
    }

    return arr
}

console.log(range(1, 10, 2)); // [1, 3, 5, 7, 9]




} ());