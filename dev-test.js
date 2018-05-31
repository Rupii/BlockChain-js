const Block = require('./block');

const block = new Block('time', 'block', 'test', 'ing');
console.log(block.toString());
console.log(Block.genesis().toString());
