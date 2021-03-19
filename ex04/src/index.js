function sumFibonacci(num) {
  var prevNumber = 0;
  var current = 1;
  var result = 0;

  if (num < 1) {
    return 0;
  } else if (num == 1) {
    return current;
  }
  while (current <= num) {
    if (current % 2 !==0) {
      result += current;
    }
    current += prevNumber;
    prevNumber = current - prevNumber;
  }
  return result;
}

console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;
