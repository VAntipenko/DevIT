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
  return getType;
};

const array_normalize = (arr, shema, transform) => {
  const shemaMap = {
    float: function (data) {
      return parseFloat(data);
    },
    string: function (data) {
      const strData = JSON.stringify(data);
      return strData;
    },
  };

  const normalizeMap = {
    string: function (data) {
      if (
        checkType(data) === "object" ||
        checkType(data) === "array" ||
        checkType(data) === "boolean"
      ) {
        return;
      }
      return shemaMap.string(data);
    },

    object: function (data) {
      if (checkType(data) === "object") {
        const key = Object.keys(shema)[0];
        const normalizeData = shemaMap[Object.values(shema)[0]](data[key]);
        const obj = {
          [key]: normalizeData,
        };
        return obj;
      }
      return;
    },
  };

  return arr
    .map((item) => {
      if (checkType(item) === shema && !transform) {
        return item;
      }
      if (transform) {
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
