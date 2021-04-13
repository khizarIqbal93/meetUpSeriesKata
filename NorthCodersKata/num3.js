var list1 = [
    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Luby' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
  ];

  function isRubyComing(list) {
      let rubyCount = 0;
      list.forEach(dev => {
          if (dev.language === 'Ruby') {
              rubyCount++;
          } 
      });

      if ( rubyCount > 0 ) {
          return true;
      } else {
          return false;
      }

  }

  console.log(isRubyComing(list1));

