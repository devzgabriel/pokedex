const types = [
  "fire",
  "grass",
  "electric",
  "water",
  "ground",
  "rock",
  "fairy",
  "poison",
  "bug",
  "dragon",
  "psychic",
  "flying",
  "fighting",
  "normal",
]
const POKEMON_COUNT = 30

const cardHTML = `
<div class="card" id="card-{id}">
<div class="title">
    <h2>{name}</h2>
    <small># {id}</small>
</div>
<div class="img bg-{type}">
    <img src="https://pokeres.bastionbot.org/images/pokemon/{id}.png" alt="{name}">
</div>
<div class="type {type}">
    <p>{type}</p>
</div>
<button hidden class="favorites" data-id={id}>
    <div class="heart">
    </div>
</button>
`

const cards = document.querySelector(".cards")

const replacer = (text, source, destination) => {
  const regex = new RegExp(source, "gi")
  return text.replace(regex, destination)
}

const createPokemonCard = (pokemon) => {
  const { id, name, type } = pokemon
  let newCard = replacer(cardHTML, `\{id\}`, id)
  newCard = replacer(newCard, `\{name\}`, name)
  newCard = replacer(newCard, `\{type\}`, type)

  cards.innerHTML += newCard
}

const getType = (data) => {
  const apitypes = data.map((type) => type.type.name)
  const type = types.find((type) => apitypes.indexOf(type) > -1)
  return type
}

const fetchPokemon = async (number) => {
  if (number === undefined) return
  const url = `https://pokeapi.co/api/v2/pokemon/${number}`
  const response = await fetch(url).then((response) => response.json())
  const { id, name, types } = response
  const type = getType(types)
  return { id, name, type }
}

const fetchPokemons = async () => {
  for (let i = 1; i <= POKEMON_COUNT; i++) {
    const pokemon = await fetchPokemon(i)
    createPokemonCard(pokemon)
  }
}

fetchPokemons()

// const card = document.querySelector(".card")
// const cards = document.querySelector(".cards")
// for (let i = 0; i < 30; i++) {
//   const clone = card.cloneNode(true)
//   cards.appendChild(clone)
// }

// const colors={
//   fire: '#e4604d',
//   grass: '#9dd465',
//   eletric: '#f9e45f',
//   water: '#6a83d6',
//   ground: '#e4c967',
//   rock: '#cabb7b',
//   fairy: '#eeb2fa',
//   poison: '#9f619d',
//   bug: '#c5cf4a',
//   dragon: '#857af7',
//   psychic: '#e56eaf',
//   flying: '#80a4f9',
//   fighting: '#9b5a48',
//   normal: '#bab8ab',
// }

// let vars=[]
// const style = []
// for( let key in colors){
//   const css=`
//     .bg-${key}{
//       background: linear-gradient( to top right, var(--${key}), var(--card-bg) 25%);
//     }
//     .${key}{
//       background-color: var(--${key});
//     }
//   `
//     vars.push(`--${key}: ${colors[key]};\n`)
//   style.push(css)
// }
// console.log(vars.join(''))
// console.log(style.join(''))
