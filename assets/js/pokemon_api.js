const pokemonApi = {}

pokemonApi.getDetails = (pokemonDatails) => {
   return fetch(pokemonDatails.url).then((res)=> res.json())
}

pokemonApi.getPokemons = (offset = 0, limit = 10)=>{
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemonList)=> pokemonList.map(pokemonApi.getDetails))
    .then((responseDetails) => Promise.all(responseDetails))
    .then((pokemonDetails)=> pokemonDetails)
    .catch((error) => console.log(error));
}