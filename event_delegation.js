let count = 3;

document.querySelector("#myButton").addEventListener("click", function(){
count++;
let newContent = document.createElement("li");
newContent.textContent = "Item " + count;
document.querySelector(".list").appendChild(newContent); 
})

document.querySelector(".list").addEventListener("click", function(event){
if(event.target.tagName === "LI"){
    console.log(`You have clicked: ${event.target.textContent}`);
}
})