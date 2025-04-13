const url = "data/discover.json";
const container = document.getElementById("cards-container");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      const card = document.createElement("section");
      card.classList.add("card");

      card.innerHTML = `
        <h2>${item.name}</h2>
        <figure>
          <img src="images/${item.image}" alt="${item.name}" loading="lazy" />
        </figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button>Learn More</button>
      `;

      container.appendChild(card);
    });
  });
  const cardsContainer = document.getElementById("cards-container");

  fetch("data/places.json")
    .then(response => response.json())
    .then(data => {
      data.places.forEach(place => {
        const card = document.createElement("div");
        card.classList.add("card");
  
        card.innerHTML = `
          <h2>${place.name}</h2>
          <figure>
            <img src="${place.image}" alt="${place.alt}" loading="lazy" width="300" height="200" />
          </figure>
          <address>${place.address}</address>
          <p>${place.description}</p>
          <button>Learn More</button>
        `;
  
        cardsContainer.appendChild(card);
      });
    })
    .catch(error => console.error("Error loading places data:", error));
  