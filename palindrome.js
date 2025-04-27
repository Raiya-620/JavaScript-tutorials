function palindrome(word){
    let isPalindrome = word.split("").reverse().join("");
    if(isPalindrome === word){
        document.writeln(`${word} is a palindrome`);
    }
    else{
        document.writeln(`${word} is NOT a palindrome`);
    }
    console.log(isPalindrome);
}

palindrome("refer");