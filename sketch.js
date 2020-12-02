const button = document.querySelector('button')
const info = document.querySelector('#info')
const sprite = document.querySelector('#sprite')

//button.addEventListener('click', getPokemonSprite)

const elements = document.querySelectorAll('ul#monsters li')

for (let element of elements) {
  element.addEventListener('click', getPokemon)
}

async function getPokemon(event) {
  let pokemon = event.target.textContent.toLowerCase()
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + `${pokemon}`)
  const data = await response.json()
  info.textContent = "Base experience is " + data.base_experience
  sprite.src = data.sprites.front_default
}
