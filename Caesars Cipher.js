//Caesars Cipher
function rot13(str) {
    let resultado = ""; 
    let deslocamento = 13;
    for (let i = 0; i < str.length; i++) {
      let c = str.charCodeAt(i);
      //Caracteres Maiusculos 
      if(c >= 65 && c <=  90) {
        resultado += String.fromCharCode((c - 65 + deslocamento) % 26 + 65); 
      // Caracteres Minusculos
      }else if(c >= 97 && c <= 122){
        result += String.fromCharCode((c - 97 + deslocamento) % 26 + 97);
      // Outros Caracters
      }else {
          resultado += str.charAt(i);
              }
          }
  
    return resultado;
  }
  
rot13("SERR PBQR PNZC");
  