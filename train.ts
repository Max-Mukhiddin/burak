// // MIT TASK G

// function getHighestIndex(arr: number[]): number {
//   if (arr.length === 0) return -1; // bo‘sh array bo‘lsa, -1 qaytaradi

//   let max: number = arr[0];
//   let index: number = 0;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//       index = i;
//     }
//   }

//   return index;
// }

// // Test
// console.log(getHighestIndex([5, 21, 12, 21, 8])); // 1
// console.log(getHighestIndex([3, 7, 2, 1])); // 1
// console.log(getHighestIndex([10, 10, 9])); // 0
// console.log(getHighestIndex([])); // -1




// // MIT H-TASK
// function getPositive(arr: number[]): string {
//   return arr.filter((num) => num >= 0).join("");
// }

// console.log(getPositive([1, -4, 2]));
// console.log(getPositive([-1, -2, -3]));
// console.log(getPositive([5, 0, 8]));
// console.log(getPositive([10, -10, 3]));



// MIT H-2 task
export function getDigits(input: string): string {

  return (input.match(/\d/g) || []).join('');
}
console.log(getDigits("b5u74y6"));
console.log(getDigits("e78hf87"));