function kobby(username, password, email){
   
    if(username.length<5){
        console.log("Username must be at least 5 characters long.")
    } else{
        console.log(username)
    }

    const containsNumber = /\d/;
     if (password.length < 8 && !containsNumber.test(password)){
        console.log("Password length must be greater than 8 and must contain a number")
    } 
    else if((password.length > 8) && !containsNumber.test(password)){
        console.log("Password must include a number");
    }else if(password.length < 8 && containsNumber.test(password)){
        console.log("Password length should be at least 8 characters long");
    } 
    
    else{
        console.log(password)
    }

    if(!email.includes("@") && !email.includes(".")){
        console.log("Email must contain an @ and a .");
    }else if(email.includes("@") && !email.includes(".")){
        console.log("Email must contain .");
    }else if(!email.includes("@") && email.includes(".")){
        console.log("Email must contain the @ symbol")
    } else{
        console.log(email);
    }
}


kobby("suraiy", "ght345323","suraiyagmal@gmail.com");

function name(firstName, lastName, ){
    return {
        firstName : firstName,
        lastName : lastName,
        fullName : firstName + " " + lastName
    }
}
console.log(name("kobby", "assan"));