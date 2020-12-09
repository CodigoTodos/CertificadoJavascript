function convertToRoman(num) {
 
    let numerosDecimais = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    let numerosRomanos = ["I","IV","V","IX","X","XL", "L","XC","C","CD","D","CM","M"];
    
    let resultado = "";
    
    for (let i = numerosDecimais.length; i >= 0 ; i--) {
        while (numerosDecimais[i] <= num) {
            resultado += numerosRomanos[i];
            num -= numerosDecimais[i];
        }
      }

     return resultado;
    }
    
convertToRoman(36);
