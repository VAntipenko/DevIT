//Создать функцию которая создает объект на основании двух представленных массивов используя один как ключи, а другой как значения. Не подходящие ключи массивов должны быть исключены.

let testData = [
  1,
  2,
  1990,
  85,
  24,
  "Vasya",
  "colya@example.com",
  "Rafshan",
  "ashan@example.com",
  true,
  false,
];
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];

const array_combine = (keys, values) => {
  const obj = {};
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === true || false) break;
    obj[keys[i]] = values[i];
  }
  return obj;
};

array_combine(testData, testData2);
