function fetchCharacters(){
  fetch('http://localhost:3000/characters')
  .then(response => response.json())
  .then(characters => characters.forEach((character) => {
     displayCharacterDetails(character)
 }))
 }
fetchCharacters()
function displayCharacterDetails(character){
const characterBar = document.getElementById('character-bar')
const span = document.createElement('span')
span.textContent = character.name
span.addEventListener('click', () => {
  showDetails(character);
});

characterBar.appendChild(span)
console.log(displayCharacterDetails)
}
function showDetails(character) {
const detailedInfo = document.getElementById('detailed-info')
document.getElementById('name').textContent = character.name
document.getElementById('image').src = character.image
document.getElementById('vote-count').textContent = `Votes: ${character.votes}`
}


const form = document.getElementById('votes-form')
form.addEventListener ('submit', (e) => {
  e.preventDefault()
  const currentVotesText = document.getElementById('vote-count').textContent
  const currentVotes = parseInt(currentVotesText.replace('Votes: ', ''))
  const additionalVotes = parseInt(document.getElementById('votes').value)
  const newTotalVotes = currentVotes + additionalVotes
  document.getElementById('vote-count').textContent = newTotalVotes
  document.getElementById('votes').value = ''
  })
console.log(form)

