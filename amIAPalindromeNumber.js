function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

function isPalindromeNumber(integer){
    let stringConvertor = integer.toString();
    let stringReversed = reverseString(stringConvertor);
    return stringConvertor === stringReversed;
}

let result = isPalindromeNumber(12321);
console.log(result);
