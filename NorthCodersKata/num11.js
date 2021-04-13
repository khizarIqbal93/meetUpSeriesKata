var list1 = [
    { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
  ];


  function getAverageAge(list) {
    let totalAge = 0;
    list.forEach(dev => {
        totalAge = totalAge + dev.age;
    });
    return Math.round(totalAge/list.length);
  }

  console.log(getAverageAge(list1));