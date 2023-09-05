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

document.addEventListener('DOMContentLoaded', function () {
    const pokemonList = document.getElementById('pokemonList');
  
    pokemonList.addEventListener('click', (event) => {
      const listItem = event.target.closest('li')
      if (listItem) {
        const pokemonId = listItem.getAttribute('data-id');
        if (pokemonId) {
          window.location.href = `details.html?id=${pokemonId}`;
        }
      }
    });
  
  });



    