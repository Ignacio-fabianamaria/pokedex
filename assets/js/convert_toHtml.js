function convertTypesToHtml(pokemonTypes){
    return pokemonTypes.map((tSlot)=> `<li class="type">${tSlot.type.name}</li>` )
}

function convertToHtml(pokemon){
    const POK_IMG = pokemon.sprites.other.dream_world.front_default
    return `
    <li class="pokemon">
    <span class="number">#${pokemon.order}</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
      <ol class="types">
        ${convertTypesToHtml(pokemon.types).join('')}
      </ol>
      <img src=${POK_IMG} alt="${pokemon.name}">
    </div>
  </li>
    `
}