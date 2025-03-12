const merge = (arr1, arr2) => {
  let i = 0,
    j = 0,
    c = 0;
  const mergedArr = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArr[c++] = arr1[i];
      i++;
    } else {
      mergedArr[c++] = arr2[j];
      j++;
    }
  }

  for (; j < arr2.length; j++) {
    mergedArr[c++] = arr2[j];
  }

  for (; i < arr1.length; i++) {
    mergedArr[c++] = arr1[i];
  }

  return mergedArr;
};

const mergeSort = (arr) => {
  const len = arr.length;
  if (len === 1) return arr;

  const half1 = mergeSort(arr.slice(0, len / 2));
  const half2 = mergeSort(arr.slice(len / 2, len));

  return merge(half1, half2);
};

const unsortedArr = [3, 2, 1, 13, 8, 5, 0, 1];
const sortedArr = mergeSort(unsortedArr);

console.log(sortedArr);
