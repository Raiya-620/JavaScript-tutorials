// //REVERSE A STRING

const reverseString = (word) => {
    let newWord = word.split("").reverse().join("");
    console.log(newWord);

//     // let splitted = word.split("");
//     // splitted.reverse();
//     // let newWord = splitted.join("");
//     // console.log(newWord);
}

reverseString("12345");