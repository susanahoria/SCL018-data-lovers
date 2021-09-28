const dataOrder = {
  searchCharacter: function (printCharacter, searchValue) {
    let searchName = printCharacter.filter((e) => e.name.includes(searchValue));
    return searchName;
  },
  specieResults (printCharacter, species){
    let onlySpecie = printCharacter.filter(printCharacter =>{
      return printCharacter.species === species;
    })
    return onlySpecie;
  },
stateResults (printCharacter, state){
  let onlyState = printCharacter.filter(printCharacter =>{
    return printCharacter.state === state;
  })
  return onlyState;
},
};
export default dataOrder;
