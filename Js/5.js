//Выведите все элементы массива используя рекурсию.

const arr = ["Solnce", "vishlo", "iz", "za", "tuchi"];

const recuseLog = (arr, arrLength) => {
  for (let i = 0; i < arrLength; i++) {
    recuseLog(arr);
  }
};

recuseLog(arr, arr.length);
