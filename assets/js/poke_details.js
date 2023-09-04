const pokemonDetails = document.getElementById('pokemonDetails');
const pokemonNumber = pokemonDetails.querySelector('.pokemon-number');
const pokemonName = pokemonDetails.querySelector('.pokemon-name');
const pokemonType = pokemonDetails.querySelector('.pokemon-type');
const pokemonImage = pokemonDetails.querySelector('.pokemon-image');
const pokemonAbility = pokemonDetails.querySelector('.pokemon-ability');
const pokemonHeight = pokemonDetails.querySelector('.pokemon-height');


document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
  const pokemonId = urlParams.get('id');

  if (pokemonId) {
    // Chame a função getPokemons da sua API para obter os detalhes do Pokémon com o ID especificado
    pokemonApi.getDetails({ url: `https://pokeapi.co/api/v2/pokemon/${pokemonId}/` })
      .then((pokemon) => {       

        pokemonNumber.textContent = `#${pokemon.number}`;
        pokemonName.textContent = pokemon.name;
        pokemonType.textContent = `Type: ${pokemon.type}`;
        pokemonImage.src = pokemon.photo;
        pokemonImage.alt = pokemon.name;
        pokemonAbility.textContent = `Ability: ${pokemon.ability}`;
        pokemonHeight.textContent = `Height: ${pokemon.height}`;
        console.log(pokemon);
      })
      .catch((error) => console.error(error));
  }
  });