import {dataOrder} from '../src/data.js';
let arrays = [
  {name: "Rick Sanchaz", id: 1, species: "Human", status: "Alive" },
  {name: "Morty Smith", id: 2, species: "Human", status: "Alive"},
  {name: "Alexander", id: 12, species:"Human", status:"Dead"},
  {name: "Alien Rick", id: 15, species: "Alien", status:"unknown"},
  {name: "David Letterman", id: 91, species: "Human", status: "Alive"},
  {name: "Doom-Nomitron", id: 104, species: "Alien", status: "Dead"}
]

describe('dataOrder', () => {
  it('is a object', () => {
    expect(typeof dataOrder).toBe('object');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });



describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
});