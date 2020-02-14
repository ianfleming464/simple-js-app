var repository = [
  { name: 'Snorlax', height: 6.11, types: ['normal'] },
  { name: 'Jigglypuff', height: 1.08, types: ['normal', 'fairy'] },
  { name: 'Charizard', height: 5.07, types: ['fire', 'flying'] },
  { name: 'Empoleon', height: 5.07, types: ['water', 'steel'] },
  { name: 'Psyduck', height: 2.07, types: ['water'] },
  { name: 'Jynx', height: 4.07, types: ['ice', 'psychic'] } //6 item array //
];

// Using a for loop:
// for (var i = 0; i < repository.length; i++) {
//   var pokemon = repository[i];
//   if (pokemon.height >= 6) {
//     document.write(pokemon.name + ' ' + ' (height: ' + pokemon.height + ') ' + ' - Wow! That\s big' + '<br>');
//   } else {
//     document.write(pokemon.name + ' ' + ' (height: ' + pokemon.height + ') ' + '<br>');
//   }
// }

// Using a forEach loop:
repository.forEach(function(currentPokemon){
  if (currentPokemon.height >= 6) {
    document.write(currentPokemon.name + ' ' + ' (height: ' + currentPokemon.height + ') ' + ' - Wow! That\s big' + '<br>');
  } else {
    document.write(currentPokemon.name + ' ' + ' (height: ' + currentPokemon.height + ') ' + '<br>');
  }
});
