// Block
// A block contains
// Timestamp in ms
// last Hash
// hash based on its own data
// data to store

class Block {
  constructor(timestamp, lastHash, hash, data) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }

  toString() {
    return `Block-
        Timestamp   : ${this.timestamp}
        Last Hash   : ${this.lastHash.substring(0, 10)}
        Curret Hash : ${this.hash.substring(0, 10)}
        Data        : ${this.data}`;
  }

  // genesis Block is parent block a default block
  static genesis() {
    return new this('genesis Time', '--------', 'f158-ha5h', []);
  }
}

module.exports = Block;
