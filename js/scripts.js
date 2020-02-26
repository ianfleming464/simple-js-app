var pokemonRepository = (function () { //IIFE
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

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
    button.addEventListener('click', function(event) {
      showDetails(pokemon);
    }
  );
}

function showDetails(item) {
  pokemonRepository.loadDetails(item).then(function() {
    console.log(item);
  });
}

function loadList() {
  return fetch(apiUrl).then(function(response) {
    return response.json();
  }).then(function(json) {
    json.results.forEach(function(item) {
      var pokemon = {
        name: item.name,
        detailsUrl: item.url
      };
      add(pokemon);
    });
  }).catch(function(e) {
    console.error(e);
  });
}

function loadDetails(item) {
  var url = item.detailsUrl;
  return fetch(url).then(function(response) {
    return response.json();
  }).then(function(details) { //Now we add the details to the items
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = Object.keys(details.types);
  }).catch(function(e) {
    console.error(e);
  });
}

return { //the keys: IIFE functions; the values: what the outside world knows them as
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  loadList: loadList,
  loadDetails: loadDetails,
  showDetails: showDetails
};
})();

pokemonRepository.loadList().then(function() {   // Now the data is loaded
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
