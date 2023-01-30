import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  
  const pokemonCount = 10;
 const ul = document.querySelector("ul");

fetch(`https://pokeapi.co/docs/v2#pokemon?limit=${pokemonCount})
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach))pokemon=>{
    let li=document.createElement('li');
    li.innerText=pokemon.name
    ul.appendChild(li)
  
  });
  });
});
