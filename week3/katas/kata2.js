// เขียน functoin ที่รับค่าตัวเลข n และคืนค่าเป็น function ที่เมื่อเรียกใช้แล้วจะ return ค่าเป็น n บวกด้วย 1 ไปเรื่อย ๆ ทุกครั้งที่ฟังก์ชันนี้ถูกเรียก
// Hints: closure


function makeCounter(n) {
  // your code here
  let count = n;
  function counter() {
    count++;
    return count;
  }
  return counter;

}
const counterA = makeCounter(10);
const counterB = makeCounter(20);
console.log(counterA());
console.log(counterA());
console.log(counterA());
console.log(counterB());
console.log(counterB());
console.log(counterB());


// Example
// const counterA = makeCounter(10);
// const counterB = makeCounter(20);
// console.log(counterA()); // 11
// console.log(counterA()); // 12
// console.log(counterA()); // 13
// console.log(counterB()); // 21
// console.log(counterB()); // 22
// console.log(counterB()); // 23