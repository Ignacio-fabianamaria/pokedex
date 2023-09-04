const pokemonListOl = document.getElementById('pokemonList');
const loadButton = document.getElementById('loadMore');
const maxRecords = 151;
const limit = 8;
let offset = 0;

function loadPokemons(offset, limit ){
    pokemonApi.getPokemons(offset, limit).then((pokemonList = [])=>{
          const newHtml = pokemonList.map(convertToHtml).join('')
            pokemonListOl.innerHTML += newHtml
        });
}


loadPokemons(offset, limit )

loadButton.addEventListener('click', ()=> {
    offset += limit;
    qtNextPage = offset + limit;
    if(qtNextPage >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemons(offset,newLimit)
        loadButton.parentElement.removeChild(loadMore)
    }else {
        loadPokemons(offset, limit )
    }
})



    