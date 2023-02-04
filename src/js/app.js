import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  
 // const pokemonCount = 10;
 //const ul = document.querySelector("ul");


//fetch(`https://pokeapi.co/docs/v2#pokemon?limit=${pokemonCount}`)
 // .then((response) => response.json())
  //.then((data) => {
 //   data.results.forEach(pokemon=>{
 //   let li=document.createElement('li');
  //  li.innerText=pokemon.name;
  //  ul.appendChild(li);
  //  }});
//});
  const ul = document.querySelector("ul");

  let url = `https://pokeapi.co/api/v2/pokemon?limit=10`;

  function checkStatus(respone) {
    if (respone.status >= 200 && respone.status < 300) {
      return Promise.resolve(respone);
    } else {
      return Promise.reject(new Error(respone.statusText));
    }
  }

  function toJSON(respone) {
    return respone.json();
  }

  fetch(url)
    .then(checkStatus)
    .then(toJSON)
    .then((data) => {
      console.log(data.results);
      data.results.forEach((result) => {
        let newLi = document.createElement("li");
        newLi.innerHTML = result.name;
        ul.appendChild(newLi);
      });

    });
});
