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
