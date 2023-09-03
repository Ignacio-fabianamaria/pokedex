const pokemonListOl = document.getElementById('pokemonList');


pokemonApi.getPokemons().then((pokemonList = [])=>{
        pokemonListOl.innerHTML += pokemonList.map(convertToHtml).join('')
        console.log(pokemonListOl);
    });
    