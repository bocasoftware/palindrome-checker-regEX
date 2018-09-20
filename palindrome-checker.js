function isPalindrome(str) {
 



  var palindrome = /[\W_]/g;
  
  var palindromeToLowerCase = str.toLowerCase().replace(palindrome, '');


  var reverseString = palindromeToLowerCase.split('').reverse().join(''); 

 if (reverseString === palindromeToLowerCase){

   return true;
 } else {return false;}

 








}



isPalindrome("_eye");