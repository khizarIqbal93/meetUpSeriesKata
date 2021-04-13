var list1 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
    { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
  ];


  function isLanguageDiverse(list) {
    
    let langArr = [list.filter(dev => dev.language === 'JavaScript').length, list.filter(dev => dev.language === 'Python').length, list.filter(dev => dev.language === 'Ruby').length].sort((a, b) => a - b);
     let diverseLang = true;

    for( let i = 1; i < langArr.length; i++ ) {
        if (langArr[i] > 2*langArr[0]) {
            diverseLang = false;
        } 
    }
    return diverseLang;
  }

  console.log(isLanguageDiverse(list1));