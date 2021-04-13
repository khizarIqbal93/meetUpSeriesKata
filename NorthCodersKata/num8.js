var list1 = [
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
    { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Asia', age: 65, language: 'PHP' },
  ];

function allContinents(list) {
    let all = true;
    const continents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
    const devcontinents = list.map(dev => dev.continent);

    continents.forEach(element => {
        if (devcontinents.includes(element) === false) {
            all = false;
        } 
    });

    return all;       
}

console.log(allContinents(list1));