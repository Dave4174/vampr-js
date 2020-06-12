const Vampire = require('./vampire.js');

const john    = new Vampire("John", null);
const david   = new Vampire("David", null);
const jason   = new Vampire("Jason", null);
const mark    = new Vampire("Mark", null);
const aaron   = new Vampire("Aaron", null);
const mike    = new Vampire("Mike", null);
const francis = new Vampire("Francis", null);
const sal     = new Vampire("Sal", null);
const tony    = new Vampire("Tony", null);

john.addOffspring(david);
john.addOffspring(jason);
david.addOffspring(mark);
david.addOffspring(aaron);
jason.addOffspring(mike);
jason.addOffspring(francis);
mark.addOffspring(sal);
mark.addOffspring(tony);

console.log(david.closestCommonAncestor(david));