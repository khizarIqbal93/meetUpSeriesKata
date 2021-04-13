var list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];


//list1[0].greetings = `Hi ${list1[0].firstName}, what do you like the most about ${list1[0].language}?`;


function greetDevelopers(list) {
    for (let i = 0; i < list.length; i++) {
      list[i].greeting = `Hi ${list[i].firstName}, what do you like the most about ${list[i].language}?`;
    }
    return list;
  }

console.log(greetDevelopers(list1));
