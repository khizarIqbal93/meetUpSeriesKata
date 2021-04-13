var list1 = [
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
    { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
    { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
    { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
    { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
  ];

  function isAgeDiverse(list) {

    let ages = [list.filter(dev => dev.age < 20).length, list.filter(dev =>  dev.age >= 20 && dev.age < 30).length, list.filter(dev =>  dev.age >= 30 && dev.age < 40).length, list.filter(dev =>  dev.age >= 40 && dev.age < 50).length, list.filter(dev =>  dev.age >= 50 && dev.age < 60).length, list.filter(dev =>  dev.age >= 60 && dev.age < 70).length, list.filter(dev =>  dev.age >= 70 && dev.age < 80).length, list.filter(dev =>  dev.age >= 80 && dev.age < 90).length, list.filter(dev =>  dev.age >= 90 && dev.age < 100).length, list.filter(dev =>  dev.age >= 100).length];
    if (ages.some(element => element === 0)) {
        return false
    } else {
        return true;
    }
    
  }

console.log(isAgeDiverse(list1));

  /*
  teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young)
  */