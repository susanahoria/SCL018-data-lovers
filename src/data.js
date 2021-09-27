const dataOrder = {
  searchCharacter: function (printCharacter, searchValue) {
    let searchName = printCharacter.filter((e) => e.name.includes(searchValue));
    return searchName;
  },

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
