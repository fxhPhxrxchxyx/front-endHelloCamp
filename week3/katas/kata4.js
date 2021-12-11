// เขียน function ที่รับ array และ function ที่ใช้สำหรับ filter ค่าจาก array นั้น
// Hint: for loop, method ของ array

function filter(arr, callback) {
  let arr2 = []; //ประกาศarryเปล่า

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) { //เข้าเงื่อนไขfunc callback
      arr2.push(arr[i]); //add element ใช้method push
    }
  }
  return arr2;
}

// Example
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filter(arr, (n) => n > 5)); // [6, 7, 8, 9, 10]
console.log(filter(arr, (n) => n <= 5)); // [1, 2, 3, 4, 5]
console.log(filter(arr, (n) => n % 2 === 0)); // [2, 4, 6, 8, 10]