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

const array_find = (arr, search) => {
  const re = new RegExp(search.replace(/[/, i]/g, ""), "i");
  return arr.filter((value) => re.test(value));
};

const result = array_find(testData, "/^raf.*/i");
const result2 = array_find(testData, "Rafshan");
