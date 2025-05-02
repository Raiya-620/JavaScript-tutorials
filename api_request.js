let pokerman_name = document.getElementById("pokerman_name").value.toLowerCase();
let getPokermanButton = document.getElementById("getPokerman");
let pokermanImg = document.getElementById("pokerman_img")


async function fetchData() {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokerman_name}`);
if(!response.ok){
    throw new Error("Could not retrieve data");
}
    const data = response.json();
    const pokermanSprite = data.sprites.front_default;
    pokermanImg.src = pokermanSprite;
    pokermanImg.style.display = "block";
    console.log(data.name);
  } catch (error) {
    console.error(error);
  }
}

