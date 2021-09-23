import data from "./data/rickandmorty/rickandmorty.js";
import dataOrder from "./data.js";
//traer datos de rickandmorty.js
let printCharacter = data.results;
const listCharacters = document.getElementById("characterCard");

const searchBtn = document.getElementById("searchbtn");
searchBtn.addEventListener("keyup", function (e) {
  let searchValue = e.target.value;
  searchBtn.value = searchValue;
  console.log(searchValue);
});

//-------------Boton search---------------//

console.log(dataOrder, data);
