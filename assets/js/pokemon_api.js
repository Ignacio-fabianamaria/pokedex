const pokemonApi = {}

function convertPokeApiToPokeModel(pokeDetail) {
  const pokemon = new Pokemon()

  pokemon.number = pokeDetail.order
  pokemon.name = pokeDetail.name

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
  const [type] = types
  pokemon.types = types
  pokemon.type = type

  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

  return pokemon

}

pokemonApi.getDetails = (pokemonDetails) => {
  return fetch(pokemonDetails.url)
    .then((response) => response.json())
    .then(convertPokeApiToPokeModel)
}

pokemonApi.getPokemons = (offset = 0, limit = 20) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemonList) => pokemonList.map(pokemonApi.getDetails))
    .then((responseDetails) => Promise.all(responseDetails))
    .then((pokemonDetails) => pokemonDetails)
    .catch((error) => console.log(error));
}