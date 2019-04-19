// Написать функцию со следующими аргументами: объект, from (значение от), to (значение до). 
// Функция должна вернуть объект с товарами, цены которых лежат в диапазоне от значения from до значения to. 
// Пример вызова функции getGoods(goods, 2000, 3000); 
// в данном случае функция должна вернуть все товары, у которых цена в диапазоне от 2000 до 3000. 
// Для проверки функции используйте объект goods из файла с урока.

let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};


function getGoods(obj, from, to){
    let newObj = {};
    for (let key in obj){
        console.log(key);
        console.log(obj[key]);
        console.log(obj[key]["price"]);
    
        if (obj[key]["price"] >= from && obj[key]["price"] <= to){
            newObj[key] = obj[key];
        }
    }

    console.log(newObj);
    return newObj;

}

getGoods(goods, 2000, 3000);



// Написать функцию addToCart(obj, title, countToCart) {} ,
// где obj - объект, title - название товара, count - количество товара, которое нужно добавить в корзину. 
// Функция ищет товар с указанным названием, если количество позволяет, то уменьшает количество товара на countToCart, 
// если не позволяет, то выводит информацию об этом в консоль и завершает работу. Для проверки функции используйте объект goods из файла с урока.


function addToCart(obj, title, countToCart) {
    for (let key in obj){
        if (obj[key]["title"] === title){
            if (countToCart > obj[key]["count"]){
                console.log("Not enough");
                return;
            }

            obj[key]["count"] = obj[key]["count"] - countToCart;
            console.log("Теперь ", obj[key]["title"] + " = " + obj[key]["count"]);
            return;
        }
    }    
}

addToCart(goods, "Арфа", 3)

//Напишите функцию, которая отсортирует массив объектов books по значению свойства title.

let books = [
    { author: 'Толстой', title: 'Война и мир'},
    { author: 'Гончаров', title: 'Обломов'},
    { author: 'Лермонтов', title: 'Герой Нашего Времени'}
];

function sortBooks(arr){
    arr.sort(function(a, b){
        if (a.title < b.title){
            return -1;
        }

        if (a.title > b.title){
            return 1;
        }

        return 0;
    });
    return arr;
}

console.log(sortBooks(books));

//Создайте объект с днями недели. 
// Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). 
// Выведите на экран текущий день недели.

let week = {
    1: 'понедельник',
    2: 'вторник',
    3: 'среда',
    4: 'четверг',
    5: 'пятница',
    6: 'суббота',
    7: 'воскресенье',
    };

let d = new Date();
let numDay = d.getDay();
if(numDay === 0)
{
    numDay = 7;
}
console.log(week[numDay]);
