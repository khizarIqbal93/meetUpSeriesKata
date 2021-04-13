var list1 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
    { firstName: 'Joe', lastName: 'B.', country: 'USA', continent: 'North America', age: 79, language: 'JavaScript' }
  ];




function isSameLanguage(list) {
    if (list.filter(dev => dev.language === list[0].language).length === list.length) {
        return true;
    } else {
        return false;
    }
}

console.log(isSameLanguage(list1));

