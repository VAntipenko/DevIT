// Создать функцию которая нормализует данные в массиве исключая или преобразуя не подходящие.

let testData4 = [
  { name: "Vasya", email: "vasya@example.com", age: 20 },
  { name: "Dima", email: "dima@example.com", age: 34 },
  { name: "Colya", email: "colya@example.com", age: 46 },
  { name: "Misha", email: "misha@example.com", age: 16 },
  { name: "Ashan", email: "ashan@example.com", age: 99 },
  { name: "Rafshan", email: "rafshan@example.com", age: 11 },
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
  [
    [
      [
        [
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
          [{ name: "Rafshan", email: "rafshan@example.com", age: 11 }],
        ],
      ],
    ],
  ],
];

const checkType = (data) => {
  if (data === null) return "null";
  if (data === undefined) return "undefined";
  if (Number(data) === data && data % 1 !== 0) return "float";

  const objectToString = {}.toString;

  const type = objectToString.call(data).toLowerCase().slice(8, -1);
  return type;
};

const array_normalize = (arr, shema, transform) => {
  const result = [];
  for (item of arr) {
    if (!transform && checkType(item) === shema) {
      result.push(item);
    }
    if (transform) {
    }
  }
  return result;
};

console.log(array_normalize(testData4, "string"));
console.log(array_normalize(testData4, "string", true));
