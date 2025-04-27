const capitalize = (sentence) => {
const makeArray = sentence.split(" ");
capitals = [];

for(let i = 0; makeArray.length; i++){
    capitals.push(makeArray[i].UpperCase())
}
console.log(makeArray);
}

capitalize("jack of all trades, master of none");