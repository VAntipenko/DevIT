// Cделать функцию которая возвращает уникальные элементы массива.

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

const array_unique = (arr) => {
  const result = [];
  for (let obj of arr) {
    if (!result.includes(obj)) {
      result.push(obj);
    }
  }
  return result;
};

array_unique(testData.concat(testData2));
