function palindrome(str) {

  let letras = str.replace(/[^A-Za-z0-9]/g, '');
  letras = letras.toLowerCase();
  for (let i = 0; i < letras.length - 1 / 2; i++) {
     if (letras[i] !== letras[letras.length - i - 1]) {
     return false;
   }
 }
 return true;
 }



palindrome("eye");