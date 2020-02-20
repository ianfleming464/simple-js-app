var pokemonRepository = (function () { //IIFE
  var repository = [
    { name: 'Snorlax', height: 6.11, type: ['normal'] },
    { name: 'Jigglypuff', height: 1.08, type: ['normal', 'fairy'] },
    { name: 'Charizard', height: 5.07, type: ['fire', 'flying'] },
    { name: 'Empoleon', height: 5.07, type: ['water', 'steel'] },
    { name: 'Psyduck', height: 2.07, type: ['water'] },
    { name: 'Jynx', height: 4.07, type: ['ice', 'psychic'] }
  ];

  function add(name, height, type) {
    repository.push(name, height, type);
  }

  function getAll() {
    return repository;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

pokemonRepository.add({ name: 'Caterpie', height: 1.00, type: ['bug']}); //1.00 rounds to 1?
console.log(pokemonRepository.getAll());


// Using a forEach loop to access the IIFE:
pokemonRepository.getAll().forEach(function(currentPokemon){
  if (currentPokemon.height >= 6) {
    document.write(currentPokemon.name + ' ' + ' (height: ' + currentPokemon.height + ') ' + ' - Wow! That\s big' + '<br>');
  } else {
    document.write(currentPokemon.name + ' ' + ' (height: ' + currentPokemon.height + ') ' + '<br>');
  }
});
