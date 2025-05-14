// Раздел объекты задание 1
function countProperties(obj) {
    return Object.keys(obj).length;
}
  
const user1 = { name: "Nikita", age: 21, city: "Pavlodar" };
console.log(countProperties(user1)); // 3

console.log('Раздел объекты задание 1 выполнено');

// Раздел объекты задание 2
function hasProperty(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
  
const user2 = { name: "Bob", age: 30 };
console.log(hasProperty(user2, "age")); // true
console.log(hasProperty(user2, "city")); // false
  
console.log('Раздел объекты задание 2 выполнено');

// Раздел объекты задание 3
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
  }
  
  const obj1 = { name: "Alice", age: 25 };
  const obj2 = { age: 30, city: "London" };
  console.log(mergeObjects(obj1, obj2));
  // { name: "Alice", age: 30, city: "London" }

console.log('Раздел объекты задание 3 выполнено');

// Раздел объекты задание 4
const car = { brand: "Toyota", model: "Camry", year: 2022 };
const keys = Object.keys(car);
console.log(keys); // ["brand", "model", "year"]

console.log('Раздел объекты задание 4 выполнено');

// Раздел объекты задание 5
function removeProperty(obj, key) {
    if (obj.hasOwnProperty(key)) {
      delete obj[key];
    }
  }
  
  const book = { title: "1984", author: "George Orwell", year: 1949 };
  removeProperty(book, "year");
  console.log(book); 
  // { title: "1984", author: "George Orwell" }
  
console.log('Раздел объекты задание 5 выполнено');

// Функции
// Задание 1
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  console.log(factorial(5)); // 120
  console.log(factorial(0)); // 1
  console.log(factorial(3)); // 6

console.log('Раздел функции задание 1 выполнено');

// Задание 2
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  
  console.log(isPrime(7));  // true
  console.log(isPrime(10)); // false
  console.log(isPrime(2));  // true

  console.log('Раздел функции задание 2 выполнено');

  // Задание 3
  function sumAll(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  
  console.log(sumAll(1, 2, 3, 4)); // 10
  console.log(sumAll(5, 10, 15));  // 30
  console.log(sumAll());           // 0
  
  console.log('Раздел функции задание 3 выполнено');

  // Задание 4

  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString("olleH")); 
  console.log(reverseString("tpircSavaJ")); 
  
  
  console.log('Раздел функции задание 4 выполнено');

  // Задание 5
  function formatName(name) {
    if (!name) return '';
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }
  
  console.log(formatName("aLiCe")); // "Alice"
  console.log(formatName("BOB"));   // "Bob"
  console.log(formatName("john"));  // "John"
  

  console.log('Раздел функции задание 5 выполнено');
  
  // Раздел массивы задание 1

function findMax(arr) {
    return Math.max(...arr);
  }
  
  console.log(findMax([3, 7, 2, 9, 5])); // 9
  console.log(findMax([-10, -3, -5, -1])); // -1
  console.log(findMax([100])); // 100

  console.log('Раздел массивы задание 1 выполнено');
  
  // Раздел массивы задание 2

  function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
  }
  
  console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
  console.log(filterEvenNumbers([7, 9, 11])); // []
  console.log(filterEvenNumbers([12, 14, 15, 17])); // [12, 14]

  console.log('Раздел массивы задание 2 выполнено');
  
  // Раздел массивы задание 3

  function mergeUnique(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
  }
  
  console.log(mergeUnique([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]
  console.log(mergeUnique([7, 8], [8, 9, 10])); // [7, 8, 9, 10]
  console.log(mergeUnique([], [1, 2, 3])); // [1, 2, 3]

  console.log('Раздел массивы задание 3 выполнено');
  
  // Раздел массивы задание 4

  function reverseArray(arr) {
    return arr.slice().reverse();
  }
  
  console.log(reverseArray([1, 2, 3])); // [3, 2, 1]
  console.log(reverseArray(["a", "b", "c"])); // ["c", "b", "a"]
  console.log(reverseArray([true, false, true])); // [true, false, true]

  console.log('Раздел массивы задание 4 выполнено');
  
  // Раздел массивы задание 5

  function findIndex(arr, value) {
    return arr.indexOf(value);
  }
  
  console.log(findIndex([10, 20, 30, 40], 30)); // 2
  console.log(findIndex(["apple", "banana", "cherry"], "banana")); // 1
  console.log(findIndex([1, 2, 3], 4)); // -1

  console.log('Раздел массивы задание 5 выполнено');
  