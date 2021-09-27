const dataOrder = {
  searchCharacter: function (printCharacter, searchValue) {
    let searchName = printCharacter.filter((e) => e.name.includes(searchValue));
    return searchName;
  },
};
export default dataOrder;
