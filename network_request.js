// let xhr = new XMLHttpRequest();
// xhr.open("GET", "https://api.github.com/users", true);
// xhr.send();

// xhr.onload = function () {
//     if(xhr.status === 200){
//         let data = JSON.parse(xhr.responseText);
//         console.log(data);
//     }
// }

fetch("https://api.github.com/users")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not okay");
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(`There is a problem with the fetch operation ${error}`);
  });
