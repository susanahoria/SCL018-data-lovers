import dataOrder from "../src/data.js";
const array = [
  { name: "Rick Sanchez", id: 1, species: "Human", status: "Alive" },
  { name: "Morty Smith", id: 2, species: "Human", status: "Alive" },
  { name: "Alexander", id: 12, species: "Human", status: "Dead" },
  { name: "Alien Rick", id: 15, species: "Alien", status: "unknown" },
  { name: "David Letterman", id: 91, species: "Human", status: "Alive" },
  { name: "Doom-Nomitron", id: 104, species: "Alien", status: "Dead" },
];

describe("dataOrder", () => {
  it("is a object", () => {
    expect(typeof dataOrder).toBe("object");
  });
  

//test specie
describe("dataOrder.specieResults", () => {
  it("is a function", () => {
    expect(typeof dataOrder.specieResults).toBe("function");
  });

  it("should returns Human species", () => {
    expect(dataOrder.specieResults(array, "Human")).toEqual([
      {name: "Rick Sanchez", id: 1, species: "Human", status: "Alive" },
      {name: "Morty Smith", id: 2, species: "Human", status: "Alive"},
      {name: "Alexander", id: 12, species:"Human", status:"Dead"},
      {name: "David Letterman", id: 91, species: "Human", status: "Alive"}
    ]);
  });

  it("should returns Alien species", () => {
    expect(dataOrder.specieResults(array, "Alien")).toEqual([
      {name: "Alien Rick", id: 15, species: "Alien", status:"unknown"},
      {name: "Doom-Nomitron", id: 104, species: "Alien", status: "Dead"}
    ]);
  });
  
});

//test status
describe("dataOrder.stateResults", () => {
  it("is a function", () => {
    expect(typeof dataOrder.stateResults).toBe("function");
  });
  it("should returns Alive status", () => {
    expect(dataOrder.stateResults(array, "Alive")).toEqual([
      {name: "Rick Sanchez", id: 1, species: "Human", status: "Alive" },
      {name: "Morty Smith", id: 2, species: "Human", status: "Alive"},
      {name: "David Letterman", id: 91, species: "Human", status: "Alive"},
    ]);
  });
  it("should returns Dead status", () => {
    expect(dataOrder.stateResults(array, "Dead")).toEqual([
      {name: "Alexander", id: 12, species:"Human", status:"Dead"},
      {name: "Doom-Nomitron", id: 104, species: "Alien", status: "Dead"}
    ]);
  });
  it("should returns unknown status", () => {
    expect(dataOrder.stateResults(array, "unknown")).toEqual([
      {name: "Alien Rick", id: 15, species: "Alien", status:"unknown"}
    ]);
  });

})

//test ordenar A a la Z
describe("dataOrder.orderAZ", () => {
  it("is a function", () => {
    expect(typeof dataOrder.orderAZ).toBe("function");
  });
  it("should return order AZ", () => {
    expect(dataOrder.orderAZ(array)).toEqual([
      { name: "Alexander", id: 12, species: "Human", status: "Dead" },
      { name: "Alien Rick", id: 15, species: "Alien", status: "unknown" },
      { name: "David Letterman", id: 91, species: "Human", status: "Alive" },
      { name: "Doom-Nomitron", id: 104, species: "Alien", status: "Dead" },
      { name: "Morty Smith", id: 2, species: "Human", status: "Alive" },
      { name: "Rick Sanchez", id: 1, species: "Human", status: "Alive" },
    ]);
  });
});
//test ordenar Z a la A
describe("dataOrder.orderZA", () => {
  it("is a function", () => {
    expect(typeof dataOrder.orderZA).toBe("function");
  });
  it("should return order ZA", () => {
    expect(dataOrder.orderZA(array)).toEqual([
      { name: "Rick Sanchez", id: 1, species: "Human", status: "Alive" },
      { name: "Morty Smith", id: 2, species: "Human", status: "Alive" },
      { name: "Doom-Nomitron", id: 104, species: "Alien", status: "Dead" },
      { name: "David Letterman", id: 91, species: "Human", status: "Alive" },
      { name: "Alien Rick", id: 15, species: "Alien", status: "unknown" },
      { name: "Alexander", id: 12, species: "Human", status: "Dead" },
    ]);
  });
});
//test ordenar default
describe("dataOrder.orderDefault", () => {
  it("is a function", () => {
    expect(typeof dataOrder.orderDefault).toBe("function");
  });

  it("should return order default", () => {
    expect(dataOrder.orderDefault(array)).toEqual([
      { name: "Rick Sanchez", id: 1, species: "Human", status: "Alive" },
      { name: "Morty Smith", id: 2, species: "Human", status: "Alive" },
      { name: "Alexander", id: 12, species: "Human", status: "Dead" },
      { name: "Alien Rick", id: 15, species: "Alien", status: "unknown" },
      { name: "David Letterman", id: 91, species: "Human", status: "Alive" },
      { name: "Doom-Nomitron", id: 104, species: "Alien", status: "Dead" },
    ]);
  });
});
//test funcion buscar!
describe("dataOrder.searchCharacter", () => {
  it("is a function", () => {
    expect(typeof dataOrder.searchCharacter).toBe("function");
  });

  it("should return Character name with A letter", () => {
    expect(dataOrder.searchCharacter(array, "A")).toEqual([
      { name: "Alexander", id: 12, species: "Human", status: "Dead" },
      { name: "Alien Rick", id: 15, species: "Alien", status: "unknown" },
    ]);
  });

  it("should return Character name with D letter", () => {
    expect(dataOrder.searchCharacter(array, "D")).toEqual([
      { name: "David Letterman", id: 91, species: "Human", status: "Alive" },
      { name: "Doom-Nomitron", id: 104, species: "Alien", status: "Dead" },
    ]);
  });
});

});

