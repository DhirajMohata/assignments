/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) 
{
    var s1 = str1.trim().toLowerCase().split("").sort().join("");
    var s2 = str2.trim().toLowerCase().split("").sort().join("");
    console.log(s1 , " " , s2);

    if(str1.length != str2.length)
      return false;

    for(var i=0; i<s1.length; i++)
    {
        if(s1[i] != s2[i])
        {
            return false;
        }
    }
    return true;
}

module.exports = isAnagram;
