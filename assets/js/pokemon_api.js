const pokemonApi = {}

function convertPokeApiToPokeModel(pokeDetail) {
  const pokemon = new Pokemon()

  pokemon.number = pokeDetail.id
  pokemon.name = pokeDetail.name

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
  const [type] = types
  pokemon.types = types
  pokemon.type = type

  const abilities = pokeDetail.abilities.map((ability) => ability.ability.name)
  const [ability] = abilities
  pokemon.abilities = abilities
  pokemon.ability = ability

  const stats = pokeDetail.stats.map((stat)=> stat.base_stat)
  const [hp, attack, defense] = stats

  pokemon.stats = stats
  pokemon.hp = hp
  pokemon.attack = attack
  pokemon.defense = defense

  pokemon.category = pokeDetail.category
  pokemon.height = pokeDetail.height
  pokemon.weight = pokeDetail.weight
  pokemon.gender = pokeDetail.gender
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