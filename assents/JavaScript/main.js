
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const max = 151
const limit = 50
let offset = 0



function convertPokemonToLi(pokemon){
    return `            
    <li class="pokemon ${pokemon.types[0]}">
    
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
        
        <div class="detail">
            <ol class="types"> 
               ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
    
    </li>
    `
}

function convertPokemonInfo(pokemon){
    return`
    
    `
}

function loadPokemonItens(offset, limit){
    pokeApi.getPokemons(offset, limit)
    .then((pokemons = []) => {
        
        pokemonList.innerHTML += pokemons.map((convertPokemonToLi)).join('')
        console.log('allou?')
    })
    .catch((error) => console.log(error))
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtde = offset + limit

    if(qtde >= max){
        const newLimit = max - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }else{
        loadPokemonItens(offset, limit)
    }
})



