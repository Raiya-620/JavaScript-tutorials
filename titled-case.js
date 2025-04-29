const capitalized = (sentence) => {
const makeArray = sentence.split(" ");
const capitals = [];

for(let i = 0; i < makeArray.length; i++){
    capitals.push(makeArray[i].charAt(0).toUpperCase() + makeArray[i].slice(1));
}
let titledCase = capitals.join(" ")
document.writeln(titledCase);

console.log(makeArray);
}

capitalized('jack of all trades, master of none');