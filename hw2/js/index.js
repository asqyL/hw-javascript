// Task1

let arr = [-2, 3, 4, 0, 8, -5, 10, 2, 9, 15];
let flag = true;
for(let i=0; i<arr.length; i++)
{
    if(flag == false) break;

    for(let j=0; j<arr.length; j++)
    {
        if(i==j) continue;//одно и то же число

        if(arr[i] + arr[j] == 7)
        {
            flag = false;
            console.log("M=" + arr[i]);
            console.log("N=" + arr[j]);
            break;
        }
    }
}

//Task2

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('ThreeFive');
    } else if (i % 3 === 0) {
      console.log('Three');
    } else if (i % 5 === 0) {
      console.log('Five');
    } else {
      console.log(i);
    }
  }

//Task3

let a=4, b=6, c=8;

if (a>b+c && b>a+c && c>a+b) {
    console.log("Impossible");
} else if (a*a===b*b+c*c && b*b===a*a+c*c && c*c===a*a+b*b){
    console.log("Rectangular");
} else if (a*a>b*b+c*c && b*b>a*a+c*c && c*c>a*a+b*b){
    console.log("obtuse")
} else {
    console.log("acute")
}

//Task4.1

let arr2 = [];
arr2.length = prompt("Pls, enter massive length")
for (i=0; i<arr2.length; i++){
  console.log(arr2.reverse()) ; }


//4.2
// let arr3 = [2];
// arr3.length = 20;
// for (i=0; i<arr3.length; i++){
//   i * i; }
// console.log(arr3);




 
