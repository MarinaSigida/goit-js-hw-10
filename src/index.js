// import {fetchBreeds} from './cat-api';

const refs = {
  breedSelect: document.querySelector('select.breed-select'),
  loader: document.querySelector('p.loader'),
  error: document.querySelector('p.error'),
  catInfo: document.querySelector('div.cat-info'),
};


// fetchBreeds()
// .then(renderCatCard)
// .catch(onFetchError);

// function renderCatCard(breed)

// function onFetchError (error){
//     alert ('ERROR ERROR ERROR');
// }

const url = 'https://api.thecatapi.com/v1/breeds';
const options = {
  headers: {
    'x-api-key':
      'live_rXvzCi1moeTLygU8rBTnVD6ehRR0Epach7KXn7cu0H6esWQ265Sjy8F8yms7E9n8',
  },
};

fetch(url, options).then(response => {
  response.json().then(renderBreedSelector);
});

function renderBreedSelector(breedList) {
  let breedOptions = breedList.map(({ id, name}) => {
      return `
      <select class="breed-select">
      <option value="${id}">${name}</option>
      </select>
      `;
    });
    refs.breedSelect.innerHTML = breedOptions.join("");
}

// let breedOptions = breedList.map(({ id, name, image, description, temperament }) => {
//     return `
//     <select class="breed-select">
//     <option value="${id}">"${name}"</option>
//     </select>
//     `;
//   });

//   refs.breedSelector.insertAdjacentHTML("beforeend", breedOptions.join(""));

// function fetchBreeds(breedId) {
//   return fetch(url, options).then(
//     response => {
//       return response.json()
//       .then (console.log)
//     }
//   );
// }
