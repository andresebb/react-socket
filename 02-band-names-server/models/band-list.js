const Band = require("./band");

class BandList {
  constructor() {
    this.bands = [
      new Band("Metalica"),
      new Band("Pop"),
      new Band("Bon Jovi"),
      new Band("Mana"),
    ];
  }

  addBand(name) {
    const newBand = new Band();
  }

  removeBand(id) {
    this.bands.filter((band) => band.id !== id);
  }

  getBands() {
    return this.bands;
  }

  increseVotes(id) {
    this.bands.map((band) => {
      if (band.id === id) {
        band.votes += 1;
      }

      return band;
    });
  }

  changeName(id, newName) {
    this.bands.map((band) => {
      if (band.id === id) {
        band.name = newName;
      }
      return band;
    });
  }
}

module.exports = BandList;
