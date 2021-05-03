const a = function (one, two) {
  return one + two;
};

const b = function () {
  return false;
};

const call_function_async = (fn, args, done) => {
  setTimeout(() => {
    done(fn(...args));
  }, 0);
};

const paralell = (calls, done) => {
  let results = [];
  let callsCount = 0;

  if (!calls.length) {
    done([]);
  }

  calls.forEach(([fn, args = []], index) =>
    call_function_async(fn, args, (result) => {
      results[index] = result;
      callsCount += 1;

      if (callsCount === calls.length) {
        done(results);
      }
    })
  );
};

paralell([[a, [1, 2]], [b]], function (results) {
  console.log(results);
});
