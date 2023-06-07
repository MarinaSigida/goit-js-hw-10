const url = 'https://api.thecatapi.com/v1/breeds';
const catInfoUrl = 'https://api.thecatapi.com/v1/images/search?breed_ids=';
const options = {
  headers: {
    'x-api-key':
      'live_rXvzCi1moeTLygU8rBTnVD6ehRR0Epach7KXn7cu0H6esWQ265Sjy8F8yms7E9n8',
  },
};


function fetchBreeds() {
    return fetch(url, options);
  }
  
  function fetchCatByBreed(breedId) {
    return fetch(catInfoUrl + breedId, options);
  }


export { fetchBreeds, fetchCatByBreed };
