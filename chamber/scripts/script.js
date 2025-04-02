document.addEventListener("DOMContentLoaded", function() {
    const directory = document.getElementById("directory");
    const cardsContainer = document.querySelector('.cards-container');
    const visitInfo = document.getElementById('visit-info');
    const gridViewBtn = document.getElementById("gridView");
    const listViewBtn = document.getElementById("listView");

    // Function to fetch and display members
    async function loadMembers() {
        try {
            const response = await fetch("data/members.json");
            const members = await response.json();
            displayMembers(members);
        } catch (error) {
            console.error("Error loading JSON:", error);
        }
    }

    // Function to display members
    function displayMembers(members) {
        directory.innerHTML = ""; // Clear previous content
        members.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.name} Logo">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;

            directory.appendChild(card);
        });
    }

    // Function to load and display attractions
    function loadAttractions() {
        fetch('data/attractions.json')
            .then(response => response.json())
            .then(data => {
                data.forEach((attraction, index) => {
                    const card = document.createElement('div');
                    card.classList.add('card');
                    card.style.gridArea = `card${index + 1}`;

                    card.innerHTML = `
                        <h2>${attraction.name}</h2>
                        <figure>
                            <img src="${attraction.image}" alt="${attraction.name}">
                        </figure>
                        <address>${attraction.address}</address>
                        <p>${attraction.description}</p>
                        <button>Learn More</button>
                    `;
                    cardsContainer.appendChild(card);
                });
            });
    }

    // Toggle Grid/List View
    gridViewBtn.addEventListener("click", () => {
        directory.classList.remove("list");
        directory.classList.add("grid");
        cardsContainer.classList.remove("list");
        cardsContainer.classList.add("grid");
    });

    listViewBtn.addEventListener("click", () => {
        directory.classList.remove("grid");
        directory.classList.add("list");
        cardsContainer.classList.remove("grid");
        cardsContainer.classList.add("list");
    });

    // Handle the last visit message
    const lastVisit = localStorage.getItem('lastVisit');
    const currentTime = Date.now();
    const timeSinceLastVisit = lastVisit ? Math.floor((currentTime - lastVisit) / (1000 * 60 * 60 * 24)) : null;

    if (!lastVisit) {
        visitInfo.innerHTML = "Welcome! Let us know if you have any questions.";
    } else if (timeSinceLastVisit < 1) {
        visitInfo.innerHTML = "Back so soon! Awesome!";
    } else {
        visitInfo.innerHTML = `You last visited ${timeSinceLastVisit} ${timeSinceLastVisit === 1 ? "day" : "days"} ago.`;
    }

    localStorage.setItem('lastVisit', currentTime);

    // Load the members and attractions
    loadMembers();
    loadAttractions();

    // Dynamic Footer Year & Last Modified Date
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
});
