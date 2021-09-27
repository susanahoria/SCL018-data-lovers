import data from "./data/rickandmorty/rickandmorty.js";
import dataOrder from "./data.js";
//traer datos de rickandmorty.js
let printCharacter = data.results;
const listCharacters = document.getElementById("characterCard");

//-----------------Imprimir personajes----------------------//
const characterList = function (characters) {
  //declarar variable para imprimir personajes
  let list = "";
  document.getElementById("characterCard").innerHTML = "";
  //inicia
  for (let i = 0; i < characters.length; i++) {
    list += `
    <div class= "cardContainer">
      <div id="printCharacters" class="cardContainer-inner">
        <div class="frontCard">
          <img id="photo" class="photo" src="${characters[i].image}"/>
          <div class="nametag">
          <p id="nameChar" class="name-frontcard">${characters[i].name}</p>
          </div>
        </div>
        <div class="backCard">
              <p id="nameChar" class="name-backcard">${characters[i].name}</p>
            <div class="infoChar"> 
              <div class="propertyFlex">
              <p class="propertyStyle">Status:</p>
              <p id="statusChar" class="cardText">${characters[i].status}</p><br>
            </div>
            <div class="propertyFlex">
              <p class="propertyStyle">Specie: </p>
              <p id="specieChar" class="cardText">${characters[i].species}</p><br>
            </div>
            <div class="propertyFlex">
              <p class="propertyStyle">Gender: </p>
              <p id="genderChar" class="cardText">${characters[i].gender}</p><br>
            </div>
            </div>
        </div>
      </div>
    </div>`;
  }
  document.getElementById("characterCard").innerHTML = list;
};
characterList(printCharacter);

//-------------Boton search---------------//
const searchBtn = document.getElementById("searchbtn");
searchBtn.addEventListener("keyup", function (e) {
  const searchTarget = e.target.value;
  let searchData = dataOrder.searchCharacter(printCharacter, searchTarget);
  characterList(searchData);
});

//-------------ADD HBO-------------//
const buttonAdd = document.getElementById("addHBO");
buttonAdd.addEventListener("click", function () {
  location.href =
    "https://www.hbomax.com/cl/es/series/urn:hbo:series:GXkRjxwjR68PDwwEAABKJ?countryRedirect=1";
});
console.log(dataOrder, data);
