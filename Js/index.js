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
let testData3 = [
  {
    name: "Vasya",
    email: "vasya@example.com",
    age: 20,
    skills: { php: 0, js: -1, madness: 10, rage: 10 },
  },
  {
    name: "Dima",
    email: "dima@example.com",
    age: 34,
    skills: { php: 5, js: 7, madness: 3, rage: 2 },
  },
  {
    name: "Colya",
    email: "colya@example.com",
    age: 46,
    skills: { php: 8, js: -2, madness: 1, rage: 4 },
  },
  {
    name: "Misha",
    email: "misha@example.com",
    age: 16,
    skills: { php: 6, js: 6, madness: 5, rage: 2 },
  },
  {
    name: "Ashan",
    email: "ashan@example.com",
    age: 99,
    skills: { php: 0, js: 10, madness: 10, rage: 1 },
  },
  {
    name: "Rafshan",
    email: "rafshan@example.com",
    age: 11,
    skills: { php: 0, js: 0, madness: 0, rage: 10 },
  },
];
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

// const cloneDeep = (obj) => Object.assign({}, obj);

// cloneDeep({
//   name: "Dima",
//   email: "dima@example.com",
//   age: 34,
//   skills: { php: 5, js: 7, madness: 3, rage: 2 },
// });

////////////////////////////////////////////////////////////////////////////////////

// const arrays = [[1, 2, 3], [4, 5], [6]].reduce((prev, current) =>
//   prev.concat(current)
// );

////////////////////////////////////////////////////////////////////////////////////

// Array.prototype.append = function (value) {
//   return [value, ...this];
// };
// const arr = [1, 2, 3];
// arr.append(0);

////////////////////////////////////////////////////////////////////////////////////

// const arr = ["Solnce", "vishlo", "iz", "za", "tuchi"];

// const recuseLog = (arr, arrLength) => {
//   for (let i = 0; i < arrLength; i++) {
//     console.log(arr[i]);
//     recuseLog(arr);
//   }
// };

// recuseLog(arr, arr.length);

////////////////////////////////////////////////////////////////////////////////////
// const testData = [
//   1,
//   2,
//   1990,
//   85,
//   24,
//   "Vasya",
//   "colya@example.com",
//   "Rafshan",
//   "ashan@example.com",
//   true,
//   false,
// ];

// const array_find = (arr, search) => {
//   const re = new RegExp(search.replace(/[/, i]/g, ""), "i");
//   return arr.filter((value) => re.test(value));
// };

// const result = array_find(testData, "/^raf.*/i");
// const result2 = array_find(testData, "Rafshan");

////////////////////////////////////////////////////////////////////////////////////

// const testData = [
//   1,
//   2,
//   1990,
//   85,
//   24,
//   "Vasya",
//   "colya@example.com",
//   "Rafshan",
//   "ashan@example.com",
//   true,
//   false,
// ];

// const array_skip_until = (arr, value) => arr.slice(arr.indexOf(value));

// array_skip_until(testData, 2);
// array_skip_until(testData, "Rafshan");
// array_skip_until(testData, "asd");

////////////////////////////////////////////////////////////////////////////////////

// const array_unique = (arr) => {
//   const result = [];
//   for (let obj of arr) {
//     if (!result.includes(obj)) {
//       result.push(obj);
//     }
//   }
//   return result;
// };

// array_unique(testData.concat(testData2));

////////////////////////////////////////////////////////////////////////////////////

// const get = (obj, path) => {
//   let index = 0;
//   const path_ = path.split(".");
//   const pathLength = path_.length;

//   while (obj !== null && index < pathLength) {
//     obj = obj[path_[index++]];
//   }

//   return obj;
// };

// const array_pluck = (arr, path) => arr.map((obj) => get(obj, path));

// array_pluck(testData3, "name");
// array_pluck(testData3, "skills.php");

// const array_combine = (keys, values) => {
//   const obj = {};
//   for (let i = 0; i < keys.length; i++) {
//     if (keys[i] === true || false) break;
//     obj[keys[i]] = values[i];
//   }
//   return obj;
// };

// array_combine(testData, testData2);

////////////////////////////////////////////////////////////////////////////////////
