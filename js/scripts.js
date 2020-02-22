var pokemonRepository = (function () { //IIFE
  var repository = [
    { name: 'Snorlax', height: 6.11, type: ['normal'] },
    { name: 'Jigglypuff', height: 1.08, type: ['normal', 'fairy'] },
    { name: 'Charizard', height: 5.07, type: ['fire', 'flying'] },
    { name: 'Empoleon', height: 5.07, type: ['water', 'steel'] },
    { name: 'Psyduck', height: 2.07, type: ['water'] },
    { name: 'Jynx', height: 4.07, type: ['ice', 'psychic'] }
  ];

  function add(newPokemon) {
    repository.push(newPokemon);
  }

  function getAll() {
    return repository;
  }

  function addListItem(pokemon) {
    var $pokeList = document.querySelector('.pokemon-list');
    var button = document.createElement('button');
    var $listItem = document.createElement('li');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    $listItem.appendChild(button);
    $pokeList.appendChild($listItem);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
});
