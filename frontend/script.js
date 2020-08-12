const list = document.querySelector(".container > main");
const date = document.querySelector("header p span#date");

(() => {
  const d = new Date();

  date.innerText = d.toLocaleDateString();

  fetch("../linksImageIMDb.json")
    .then((response) => response.json())
    .then((data) => {
      data.map((movie) => {
        const html = `
          <div class="movieItem">
            <img src="${movie.imgSrc}" alt="${movie.title}">
            <span class="movieRankId">${movie.id}</span>
            <span class="movieTitle">${movie.title}</span>
          </div>
        `;
        list.innerHTML += html;
      });
    });
})();
