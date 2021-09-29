import {dataOrder} from '../src/data.js';
const array = [
  {name: "Rick Sanchez", id: 1, species: "Human", status: "Alive" },
  {name: "Morty Smith", id: 2, species: "Human", status: "Alive"},
  {name: "Alexander", id: 12, species:"Human", status:"Dead"},
  {name: "Alien Rick", id: 15, species: "Alien", status:"unknown"},
  {name: "David Letterman", id: 91, species: "Human", status: "Alive"},
  {name: "Doom-Nomitron", id: 104, species: "Alien", status: "Dead"}
]

describe("dataOrder", () => {
  it("is a object", () => {
    expect(typeof dataOrder).toBe("object");
  });
  

//test specie
describe("dataOrder.specieResults", () => {
  it("is a function", () => {
    expect(typeof dataOrder.specieResults).toBe("function");
  });

  it("returns Human species if select", () => {
    expect(dataOrder.specieResults(array)).toEqual([
      {name: "Rick Sanchez", id: 1, species: "Human", status: "Alive" },
      {name: "Morty Smith", id: 2, species: "Human", status: "Alive"},
      {name: "Alexander", id: 12, species:"Human", status:"Dead"},
      {name: "David Letterman", id: 91, species: "Human", status: "Alive"}
    ]);
  });

  it("returns Alien species if select", () => {
    expect(dataOrder.specieResults(array)).toEqual([
      {name: "Doom-Nomitron", id: 104, species: "Alien", status: "Dead"},
      {name: "Alien Rick", id: 15, species: "Alien", status:"unknown"}
    ]);
  });
  
});

//test status
describe("dataOrder.stateResults", () => {
  it("is a function", () => {
    expect(typeof dataOrder.stateResults).toBe("function");
  });

  it("returns Alive status if select", () => {
    expect(dataOrder.stateResults(array)).toEqual([
      {name: "Rick Sanchez", id: 1, species: "Human", status: "Alive" },
      {name: "Morty Smith", id: 2, species: "Human", status: "Alive"},
      {name: "David Letterman", id: 91, species: "Human", status: "Alive"},
    ]);
  });
  it("returns Dead status if select", () => {
    expect(dataOrder.stateResults(array)).toEqual([
      {name: "Alexander", id: 12, species:"Human", status:"Dead"},
      {name: "Doom-Nomitron", id: 104, species: "Alien", status: "Dead"}
    ]);
  });
  it("returns unknown status if select", () => {
    expect(dataOrder.stateResults(array)).toEqual([
      {name: "Alien Rick", id: 15, species: "Alien", status:"unknown"}
    ]);
  });

})


});