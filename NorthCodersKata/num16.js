var list1 = [
    { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];


  function askForMissingDetails(list) {
    for (let i=0; i<list.length; i++){


        for (const prop in list[i]) {
            if (list[i][prop] === null) {
                list[i].question = `Hi, could you please provide your ${prop}.`
            }
        }
    }
    return list.filter(dev => dev.hasOwnProperty('question'));
  }

console.log(askForMissingDetails(list1));