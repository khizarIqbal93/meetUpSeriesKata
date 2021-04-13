var list1 = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
  ];


  function addUsername(list) {
    list.forEach(dev => {
       let uName = `${dev.firstName.toLowerCase()}${dev.lastName.charAt(0).toLowerCase()}${new Date().getFullYear() - dev.age}`;
       dev.username = uName;
    });

    return list;
  }

  console.log(addUsername(list1));
  
  