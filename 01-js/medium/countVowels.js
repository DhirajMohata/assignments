/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {

    var str1 = str.toLowerCase().split("");
    var vowels = 0;

    str1.forEach((st) => {
      if(st === 'a' || st === 'e' || st === 'i' || st === 'o' || st === 'u')
        vowels++;
    });
    return vowels;
}

module.exports = countVowels;