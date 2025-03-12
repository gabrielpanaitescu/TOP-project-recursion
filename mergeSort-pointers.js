const merge = (arr = [], l, m, r) => {
  let p = l;
  let q = m + 1;

  const tempArr = [];
  let k = 0;

  while (p <= m && q <= r) {
    if (arr[p] < arr[q]) {
      tempArr[k++] = arr[p++];
    } else {
      tempArr[k++] = arr[q++];
    }
  }

  for (; p <= m; p++) {
    tempArr[k++] = arr[p];
  }

  for (; q <= r; q++) {
    tempArr[k++] = arr[q];
  }

  for (let j = 0; j < tempArr.length; j++) {
    if (l <= r) {
      arr[l++] = tempArr[j];
    }
  }
};

// for loop running n times number of elements instead VS while loop running until one pointer gets out of bound and exits and then one of the two for loops gets hit to finish copying the remaining elements
// const merge2 = (arr = [], start, mid, end) => {
//   const tempArr = [];
//   let k = 0;

//   let p = start,
//     q = mid + 1;

//   for (let i = start; i <= end; i++) {
//     if (p > mid) {
//       tempArr[k++] = arr[q++];
//     } else if (q > end) {
//       tempArr[k++] = arr[p++];
//     } else if (arr[p] < arr[q]) {
//       tempArr[k++] = arr[p++];
//     } else {
//       tempArr[k++] = arr[q++];
//     }
//   }

//   for (let i = 0; i < k; i++) {
//     arr[start++] = tempArr[i];
//   }
// };

const mergeSort = (arr, l = 0, r = arr.length - 1) => {
  if (l < r) {
    const m = Math.floor((l + r) / 2);
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);

    merge(arr, l, m, r);
  }

  return arr;
};

const unsortedArr = [3, 2, 1, 13, 8, 5, 0, 1];
const sortedArr = mergeSort(unsortedArr);
console.log("sortedArr", sortedArr);
