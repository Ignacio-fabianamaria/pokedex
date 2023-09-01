const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

const pokemonListOl = document.getElementById('pokemonList');

function convertToHtml(pokemon){
    return `
    <li class="pokemon">
    <span class="number">#001</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
      <ol class="types">
        <li class="type">grass</li>
        <li class="type">poison</li>
      </ol>
      <img src="https://logopng.com.br/logos/among-us-125.svg" alt="${pokemon.name}">
    </div>
    
  </li>
    `
}

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemonList)=>{
        const pokemontoHtmlLi = pokemonList.map((pokemon)=> {
           pokemonListOl.innerHTML += convertToHtml(pokemon) 
        })
    })
    .catch((error) => console.log(error));