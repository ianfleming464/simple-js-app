var pokemonRepository = (function () { //IIFE
  var repository = [
    { name: 'Snorlax', height: 6.11, type: ['normal'] },
    { name: 'Jigglypuff', height: 1.08, type: ['normal', 'fairy'] },
    { name: 'Charizard', height: 5.07, type: ['fire', 'flying'] },
    { name: 'Empoleon', height: 5.07, type: ['water', 'steel'] },
    { name: 'Psyduck', height: 2.07, type: ['water'] },
    { name: 'Jynx', height: 4.07, type: ['ice', 'psychic'] }
  ];

    return {
      add: function(name, type, height) {
        repository.push(name, type, height);
      },
      getAll: function() {
        return repository;
      }
    };
})();


console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Caterpie', height: 1.00, type: ['bug'] });
console.log(pokemonRepository.getAll());

// Using a forEach loop:
repository.forEach(function(currentPokemon){
  if (currentPokemon.height >= 6) {
    document.write(currentPokemon.name + ' ' + ' (height: ' + currentPokemon.height + ') ' + ' - Wow! That\s big' + '<br>');
  } else {
    document.write(currentPokemon.name + ' ' + ' (height: ' + currentPokemon.height + ') ' + '<br>');
  }
});
