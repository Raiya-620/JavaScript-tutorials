document.querySelector(".myButton").addEventListener("click", function(){
    console.log("button clicked");
})

document.addEventListener("keydown", function(event){
    console.log("The key clicked is: " + event.key);
})

document.querySelector(".myButton").addEventListener("mouseleave", function(){
document.body.style.backgroundColor = "green";
})