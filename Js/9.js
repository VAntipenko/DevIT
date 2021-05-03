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
  const getType = toString.call(data).toLowerCase().slice(8, -1);
  if (
    getType === "string" ||
    getType === "boolean" ||
    getType === "undefined" ||
    getType === "null" ||
    getType === "number"
  ) {
    return "primitive";
  }
  return getType;
};

const array_normalize = (arr, shema, transform) => {
  const shemaMap = {
    float: (data) => parseFloat(data),
    string: (data) => JSON.stringify(data),
    number: (data) => Number(data),
    array: (data) => Array.from(data),
    object: (data) => {
      const key = Object.keys(shema)[0];
      const normalizeData = shemaMap[Object.values(shema)[0]](data[key]);
      const obj = {
        [key]: normalizeData,
      };
      return obj;
    },
  };

  const normalizeMap = {
    primitive: (data) => {
      if (
        typeof data === "object" ||
        typeof data === "array" ||
        typeof data === "boolean"
      ) {
        return;
      }
      return shemaMap[shema](data);
    },

    object: (data) => {
      if (checkType(data) === "object") {
        return shemaMap[checkType(data)](data);
      }
    },

    array: (data) => {
      if (checkType(data) === "array") {
        return shemaMap[checkType(data)](data);
      }
    },
  };

  return arr
    .map((item) => {
      if (typeof item === shema && !transform) {
        const normData = normalizeMap[checkType(shema)](item);
        return normData;
      }
      if (transform) {
        console.log(checkType(shema));
        const normData = normalizeMap[checkType(shema)](item);
        return normData;
      }
    })
    .filter((next) => next);
};

console.log(array_normalize(testData4, "string"));
console.log(array_normalize(testData4, "string", true));
console.log(array_normalize(testData4, { age: "float" }));
console.log(array_normalize(testData4, { age: "float" }, true));
