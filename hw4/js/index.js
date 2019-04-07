// Task 1

let str = prompt("Enter string");
let oldSubStr = prompt("Enter old substring for change");
let newSubStr = prompt("Enter new substring for change");

function findStr(str, oldSubStr, newSubStr){
    let newStr = str.replace(new RegExp(oldSubStr,'g'), newSubStr);
    return newStr;
}

console.log(findStr(str, oldSubStr, newSubStr));


// Task 2

let str2 = "дом 48, корпус 9, парадная 7, этаж 4";

let findNumb = (str) => str.match(/\d{1,}/g);

console.log(findNumb(str2));

// Task 3

let towns = prompt("Enter towns with space");

let sortTowns = (towns) => towns.split(" ").sort();

console.log(sortTowns(towns));