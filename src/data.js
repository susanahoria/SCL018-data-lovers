const dataOrder = {
  //Ordenar de la A a la Z
  orderAZ: function (printCharacters) {
    let orderedResults = printCharacters.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      }
    });
    console.log(1, orderedResults);
    return orderedResults;
  },
  //Ordenar de la Z a la A
  orderZA: function (printCharacters) {
    let orderedResults = printCharacters.sort(function (a, b) {
      if (a.name < b.name) {
        return 1;
      } else {
        return -1;
      }
    });
    console.log(2, orderedResults);
    return orderedResults;
  },
};
export default dataOrder;
