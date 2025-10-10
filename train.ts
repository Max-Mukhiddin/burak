function getHighestIndex(arr: number[]): number {
  if (arr.length === 0) return -1; // bo‘sh array bo‘lsa, -1 qaytaradi

  let max: number = arr[0];
  let index: number = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      index = i;
    }
  }

  return index;
}

// Test
console.log(getHighestIndex([5, 21, 12, 21, 8])); // 1
console.log(getHighestIndex([3, 7, 2, 1])); // 1
console.log(getHighestIndex([10, 10, 9])); // 0
console.log(getHighestIndex([])); // -1
