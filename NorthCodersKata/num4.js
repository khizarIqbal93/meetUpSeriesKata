var list1 = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
  ];


  function getFirstPython(list) {
      let pythonDevs = list.filter(dev => dev.language === 'Python');

      if (pythonDevs.length == 0) {
          return 'There will be no Python developers';
      } else {
          return `${pythonDevs[0].firstName}, ${pythonDevs[0].country}`;
      }
  }

  console.log(getFirstPython(list1));