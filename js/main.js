/*console.log("\n=== Деструктуризация массивов ===");

const colors = ["red", "green", "blue"];

const color1 = colors[0];
const color2 = colors[1];
console.log(color1, color2);

const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor, secondColor, thirdColor);

const [primary, , tertiary] = colors;
console.log(primary, tertiary);

const [c1, c2, c3, c4 = "yellow"] = colors;
console.log(c4);

console.log("\n=== Деструктуризация объектов ===");

const user = {
    name: "Алиса",
    age: 25,
    city: "Москва",
};

const userName = user.name;
const userNameAge = user.age;
console.log(userName, userNameAge);

console.log(user);
console.log(user.name);
console.log(user.age);

const { name, age, city } = user;
console.log(name, age, city);

const { name: fullName, age: years } = user;
console.log(fullName, years);

const { name: personName, country = "Россия" } = user;
console.log(personName, country);

console.log("\n=== Деструктуризация в параметрах ===");

const user2 = {
    name: "Алиса",
    age: 25,
    city: "Москва"
};

function printUserOld(user) {
    console.log(`Имя: ${user.name}`);
    console.log(`Возраст: ${user.age}`);
    console.log(`Город: ${user.city}`);
}

function printUser({ name, age, city }) {
    console.log(`Имя: ${name}`);
    console.log(`Возраст: ${age}`);
    console.log(`Город: ${city}`);
}

// 
// 
// 
// 
// const product = {
//     name: "Ноутбук",
//     price: 50000,
//     category: "Электроника",
//     inStock: true
// };
// 
// // 
// const { name: productName, price, category: productCategory, inStock } = product;
// console.log(productName, price, productCategory, inStock);
// 
// // 
// function printProduct({ name, price, category, inStock }) {
//     console.log(`Название: ${name}`);
//     console.log(`Цена: ${price} руб.`);
//     console.log(`Категория: ${category}`);
//     console.log(`В наличии: ${inStock ? "Да" : "Нет"}`);
// }
// 
// // 
// printProduct(product);

// console.log("Spread для массивов");
// 
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// 
// const combined = [...arr1, ...arr2];
// console.log("Объединённый массив:", combined);
// 
// const copy = [...arr1];
// console.log("Копия массива:", copy);
// 
// const extended = [0, ...arr1, 7, 8];
// console.log("Расширенный массив:", extended);
// 
// console.log("Spread для объектов");
// 
// const person = {
//   name: "Иван",
//   age: 30,
// };
// 
// const address = {
//   city: "Санкт-Петербург",
//   street: "Невский проспект",
// };
// 
// const fullInfo = { ...person, ...address };
// console.log("Полная информация:", fullInfo);
// 
// const personCopy = { ...person };
// console.log("Копия объекта:", personCopy);
// 
// const updated = { ...person, age: 31, occupation: "Developer" };
// console.log("Обновлённый объект:", updated);
// 
// console.log("Rest оператор");
// 
// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }
// 
// console.log("Сумма 1,2,3:", sum(1, 2, 3));
// console.log("Сумма 1,2,3,4,5:", sum(1, 2, 3, 4, 5));
// 
// const numbers = [10, 20, 30, 40, 50];
// const [first, second, ...rest] = numbers;
// console.log("Первое число:", first);
// console.log("Второе число:", second);
// console.log("Остальные числа:", rest);

*/

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArr = [...arr1, ...arr2];
console.log("Объединённый массив:", combinedArr);

function findMax(...numbers) {
    return Math.max(...numbers);
}
console.log(findMax(10, 20, 30, 40, 50));

const objA = { a: 1, b: 2 };
const objB = { c: 3, d: 4 };
const merged = {...objA, ...objB };
console.log("Объединённый объект:", merged);