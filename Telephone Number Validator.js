function telephoneCheck(str) {
    let teste = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return teste.test(str);
  }
  
  telephoneCheck("555-555-5555");

