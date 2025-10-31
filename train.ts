/* Project Standards:
 - Logging standards:
 - Naming Standards:
    function, method, variable =>  CAMEL      goHome
    class => PASCAL     MemberService
    folder => KEBAB
    css => SNAKE        button_style
    - Error handling:

*/
/* Request:
Traditional API
Rest Api
GraphQL API
*/

/* Fronted development:
Traditional FD => SSR => EJS
Modern FD => SPA
 */


/* Cookies:
request join
self destroy

*/


/* Validation:
Fronted validation
Backend validation
Database validation 


*/




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

// // MIT H-2 task
// export function getDigits(input: string): string {

//   return (input.match(/\d/g) || []).join('');
// }
// console.log(getDigits("b5u74y6"));
// console.log(getDigits("e78hf87"));

// //.  MIT task I

// function majorityElement(arr: number[]): number | null {
//   const count: Record<number, number> = {};

//   for (const num of arr) {
//     count[num] = (count[num] || 0) + 1;
//   }

//   let maxCount = 0;
//   let majority: number | null = null;

//   for (const num in count) {
//     if (count[num] > maxCount) {
//       maxCount = count[num];
//       majority = Number(num);
//     }
//   }

//   return majority;
// }

// // ✅ Test
// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4])); // 👉 4

// // MIT task J

// function findLongestWord(str: string): string {
//   const words = str.split(" "); 
//   let longestWord = "";

//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }

// // Test
// console.log(findLongestWord("I come from Uzbekistan")); //  "Uzbekistan"



// // MIT TASK - K
// function countVowels(str: string): number {
//   const vowels = "aeiouAEIOU";
//   let count = 0;

//   for (const char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }

// // Test
// console.log(countVowels("string")); // Output: 1
// console.log(countVowels("Hello World")); // Output: 3


// // MIT TASK-L

// function reverseSentence(str: string): string {
 
//   return str
//     .split(" ")
//     .map(word => word.split("").reverse().join("")) 
//     .join(" ");
// }

// // Test
// console.log(reverseSentence("we like coding!")); // Output: "ew ekil gnidoc!"


// // MIT TASK

// type NumberSquare = {
//   number: number;
//   square: number;
// };

// function getSquareNumbers(arr: number[]): NumberSquare[] {
//   return arr.map((num) => ({
//     number: num,
//     square: num * num,
//   }));
// }

// // Misol:
// console.log(getSquareNumbers([1, 2, 3]));

// N-TASK: 


function palindromeCheck(word: string): boolean {
  const reversed = word.split("").reverse().join("");
  return word === reversed;
}

console.log(palindromeCheck("dad")); // true
console.log(palindromeCheck("son")); // false
console.log(palindromeCheck("level")); // false

