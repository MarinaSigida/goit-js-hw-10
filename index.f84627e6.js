const e={breedSelect:document.querySelector("select.breed-select"),loader:document.querySelector("p.loader"),error:document.querySelector("p.error"),catInfo:document.querySelector("div.cat-info")},n={headers:{"x-api-key":"live_rXvzCi1moeTLygU8rBTnVD6ehRR0Epach7KXn7cu0H6esWQ265Sjy8F8yms7E9n8"}};function t(n){let t=n.map((({id:e,name:n})=>`\n      <select class="breed-select">\n      <option value="${e}">${n}</option>\n      </select>\n      `));e.breedSelect.innerHTML=t.join(""),o(e.breedSelect)}function r(e){e.style.display="none"}function o(e){e.style.display="block"}function c(n){console.log(n);let t=n.map((({breeds:e,url:n})=>`\n        <div class="cat-info">\n        <img src="${n}" alt="${e[0].name}" width="600"/>\n        <h1>${e[0].name}</h1>\n        <p>${e[0].description}</p>\n        <p><span>Temperament:</span>\n        ${e[0].temperament}</p>\n        </div>\n          `));e.catInfo.innerHTML=t.join(""),o(e.catInfo)}r(e.breedSelect),r(e.error),o(e.loader),fetch("https://api.thecatapi.com/v1/breeds",n).then((n=>{n.json().then(t),r(e.loader)})).catch((()=>{o(e.error),r(e.loader)})),e.breedSelect.addEventListener("change",(t=>{var a;r(e.error),r(e.catInfo),o(e.loader),(a=t.target.value,fetch("https://api.thecatapi.com/v1/images/search?breed_ids="+a,n)).then((n=>{n.json().then(c).catch((()=>{o(e.error),r(e.loader),r(e.catInfo)})),r(e.loader)}))}));
//# sourceMappingURL=index.f84627e6.js.map