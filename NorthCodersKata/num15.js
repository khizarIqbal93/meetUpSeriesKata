var list1 = [
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
    { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
  ];

  function findOddNames(list) {

      function toAscii(name) {
        let asciiVal = 0;
        name.split('').forEach(letter => {
            asciiVal = asciiVal + letter.charCodeAt();
        });
        return asciiVal;
      }

    return list.filter(dev => toAscii(dev.firstName) % 2 !== 0);
  }

  console.log(findOddNames(list1));
  