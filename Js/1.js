//Напишите функцию cloneDeep таким образом, чтобы она была способна клонировать переданный как параметр объект.

const cloneDeep = (obj) => Object.assign({}, obj);

cloneDeep({
  name: "Dima",
  email: "dima@example.com",
  age: 34,
  skills: { php: 5, js: 7, madness: 3, rage: 2 },
});
