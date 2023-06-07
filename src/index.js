// import {fetchBreeds} from './cat-api';

const refs = {
  breedSelect: document.querySelector('select.breed-select'),
  loader: document.querySelector('p.loader'),
  error: document.querySelector('p.error'),
  catInfo: document.querySelector('div.cat-info'),
};

const url = 'https://api.thecatapi.com/v1/breeds';
const catInfoUrl = 'https://api.thecatapi.com/v1/images/search?breed_ids=';
const options = {
  headers: {
    'x-api-key':
      'live_rXvzCi1moeTLygU8rBTnVD6ehRR0Epach7KXn7cu0H6esWQ265Sjy8F8yms7E9n8',
  },
};

hide(refs.breedSelect);
hide(refs.error);
show(refs.loader);

fetch(url, options)
  .then(response => {
    response.json().then(renderBreedSelector);
    hide(refs.loader);
  })
  .catch(() => {
    show(refs.error);
    hide(refs.loader);
  });

function renderBreedSelector(breedList) {
  let breedOptions = breedList.map(({ id, name }) => {
    return `
      <select class="breed-select">
      <option value="${id}">${name}</option>
      </select>
      `;
  });
  refs.breedSelect.innerHTML = breedOptions.join('');
  show(refs.breedSelect);
}

function hide(el) {
  el.style.display = 'none';
}

function show(el) {
  el.style.display = 'block';
}

function fetchCatByBreed(breedId) {
  return fetch(catInfoUrl + breedId, options);
}

function renderCatInfo(cats) {
  let catInfo = cats.map(({ breeds, url }) => {
    return `
        <div class="cat-info">
        <img src="${url}" alt="${breeds[0].name}" width="600"/>
        <h1>${breeds[0].name}</h1>
        <p>${breeds[0].description}</p>
        <p><span>Temperament:</span>
        ${breeds[0].temperament}</p>
        </div>
          `;
  });
  refs.catInfo.innerHTML = catInfo.join('');
  show(refs.catInfo);
}

refs.breedSelect.addEventListener('change', event => {
  hide(refs.error);
  hide(refs.catInfo);
  show(refs.loader);
  fetchCatByBreed(event.target.value).then(response => {
    response
      .json()
      .then(renderCatInfo)
      .catch(() => {
        show(refs.error);
        hide(refs.loader);
        hide(refs.catInfo);
      });
    hide(refs.loader);
  });
});
