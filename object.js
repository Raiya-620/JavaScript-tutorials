let fruit = {
    name : "apple",
    color: "red",
    // sayFruitName : function(){
    //    console.log( `My favorite fruit is ${this.name} and it's color is ${this.color}`);
    // }
    sayFruitName(){
        console.log( `My favorite fruit is ${this.name} and it's color is ${this.color}`);
     },
    sayFruitNameArrow: () => {
      
            console.log( `My favorite fruit is ${fruit.name} and it's color is ${fruit.color}`);
        
    } 
}

fruit.sayFruitNameArrow();
//  fruit["name"] = "banana";
//  fruit.color = "yellow";
//  delete fruit.color;
// document.writeln(fruit.name)
// document.writeln(fruit.color)
// const fruit = new Object();
// fruit.name = "apple";
// fruit.color = "red";