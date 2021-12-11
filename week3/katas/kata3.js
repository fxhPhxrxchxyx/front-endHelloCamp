// เขียน function ที่รับ array ของตัวเลข และคืนค่าเป็น array ตัวใหม่ที่เก็บค่าลขที่น้อยที่สุด และเลขที่มากที่สุดของ array ที่รับมา
// Hints: method ของ array, loop

function findLowestHighest(arr) {
  // your code here
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];

    } else if (arr[i] > max) {
      max = arr[i];

    }
  }
  let result = [min, max];
  return result;
  //return result.toString(result);
}


// Example
console.log(findLowestHighest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [1, 10]
console.log(findLowestHighest([12, 6, 5, 27, 9, 6])); // [5, 27]
console.log(findLowestHighest([90, 10, 50])); // [10, 90]