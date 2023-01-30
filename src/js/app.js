import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

 const ul = document.querySelector("ul");
  const pokemonCount = 9;
const endpoint = `https://pokeapi.co/docs/v2#pokemon?limit=${pokemonCount}`;

const displayPokemon = (pokemonList) => {
  const list = document.createElement('ul');
  pokemonList.forEach((pokemon) => {
    const item = document.createElement('li');
    item.innerText = pokemon.name;
    list.appendChild(item);
  });
  document.body.appendChild(list);
};

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => {
    const pokemonList = data.results;
    displayPokemon(pokemonList);
  })
  .catch((error) => console.error(error));

});
