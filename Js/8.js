//Сделать функцию которая обрезает массив до указанного значения.

const testData = [
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

const array_skip_until = (arr, value) => arr.slice(arr.indexOf(value));

array_skip_until(testData, 2);
array_skip_until(testData, "Rafshan");
array_skip_until(testData, "asd");
