// Расширить прототип Array, добавив к нему метод добавления элемента в начало без использование unshift.

Array.prototype.append = function (value) {
  return [value, ...this];
};
const arr = [1, 2, 3];

arr.append(0);
