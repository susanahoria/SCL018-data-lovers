const dataOrder = {
  searchCharacter: function (printCharacter, searchValue) {
    let searchName = printCharacter.filter((e) => e.name.includes(searchValue));
    return searchName;
  },
  //ordenar de la A a la Z
  orderAZ: function (printCharacter) {
    let orderedResults = printCharacter.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      }
    });
    return orderedResults;
  },
  //ordenar de la Z a la A
  orderZA: function (printCharacter) {
    let orderedResults = printCharacter.sort(function (a, b) {
      if (a.name < b.name) {
        return 1;
      } else {
        return -1;
      }
    });
    return orderedResults;
  },
  //Ordenar default
  orderDefault: function (printCharacter) {
    let orderedResults = printCharacter.sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      } else {
        return -1;
      }
    });
    return orderedResults;
  },
};
export default dataOrder;
