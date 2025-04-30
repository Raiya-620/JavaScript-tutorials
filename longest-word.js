let words = "Peter Piper picked a peck of pickled pepper";

let splittedWords = words.split(" ");
// let longestWord = "";

// splittedWords.forEach(word => {
//     if(word.length > longestWord.length){
//         longestWord = word;
//     }
// })

// document.writeln(longestWord);

let arrayList = [];

for(let word of splittedWords){
    arrayList.push(word.length);
}

let position = arrayList.indexOf(Math.max(...arrayList))

document.writeln(`The longest word is ${splittedWords[position]}`);