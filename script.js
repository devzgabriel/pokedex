const card = document.querySelector(".card")
const cards = document.querySelector(".cards")
for (let i = 0; i < 30; i++) {
  const clone = card.cloneNode(true)
  cards.appendChild(clone)
}

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
