const types = [
  "fire ",
  "grass ",
  "eletric ",
  "water ",
  "ground ",
  "rock ",
  "fairy ",
  "poison ",
  "bug ",
  "dragon ",
  "psychic ",
  "flying ",
  "fighting ",
  "normal ",
]

const POKEMON_COUNT = 12

const getType = (data) => {
  const apiTypes = data.map((type) => type.type.name)
  let type = types.find((type) => apiTypes.indexOf(type) > -1)
  if (!type) type = apiTypes[0]
  // console.log(type)
  return type
}

const fetchPokemon = async (number) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${number}`
  const response = await fetch(url).then((response) => response.json())
  const { id, name, types } = response
  const type = getType(types)
  // console.log(id, name, type)
  return { id, name, type }
}

const fetchPokemons = async () => {
  for (let i = 1; i <= POKEMON_COUNT; i++) {
    console.log(i)
    const pokemon = await fetchPokemon(i)
    console.log(pokemon)
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
