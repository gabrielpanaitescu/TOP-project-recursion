const fibsLoop = (n) => {
  const arr = [];

  for (let i = 0; i < n; i++) {
    if (i < 2) {
      arr.push(i);
      continue;
    }
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr;
};

console.log("fibsLoop", fibsLoop(8));

const fibsRec = (n) => {
  const fib = (x) => {
    if (x < 2) return x;
    const result = fib(x - 2) + fib(x - 1);
    return result;
  };

  if (n === 0) return [];
  return fibsRec(n - 1).concat(fib(n - 1));
};

console.log("fibsRec", fibsRec(8));

const fibsRec2 = (n, arr = []) => {
  const len = arr.length;

  const currentFib = len < 2 ? len : arr[len - 1] + arr[len - 2];
  if (len === n) return arr;
  else return fibsRec2(n, arr.concat(currentFib));
};

console.log("fibsRec2", fibsRec2(8));
