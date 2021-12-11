// เขียน function ที่รับค่า string และคืนค่าเป็นจำนวนของสระ a, e, i, o, u ที่มีใน string นั้น (นับทั้งตัวพิมพ์เล็กและตัวพิมพ์ใหญ่)
// Hints: method ของ string, method ของ array, loop



function countVowels(str) {
  // your code here
str = str.toLowerCase();
let vowel =['a','e','i','o','u'];
let count =0;
  for(let i=0; i<str.length; i++){
    for(let j=0; j<vowel.length; j++){
      if(str.charAt(i)===vowel[j]){
      count++;
    }
    } 
  }
  return count;
}
  console.log(countVowels('Helloooi'));


// Example
// console.log(countVowels('Hello')); // 2
// console.log(countVowels('dont mind me')); // 3
// console.log(countVowels('BOING boing')); // 4