function countVowels(string){
   const vowels = string.match(/[aeiou]/gi);

if( vowels === null ){
    return 0;
}

return vowels.length;
}
let result = countVowels('mono');
console.log(result);