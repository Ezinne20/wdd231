async function loadSpotlights() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();
        const members = data.members.filter(m => m.membership === "gold" || m.membership === "silver");

        let selectedMembers = [];
        while (selectedMembers.length < 2 && members.length > 0) {
            let randomIndex = Math.floor(Math.random() * members.length);
            selectedMembers.push(members.splice(randomIndex, 1)[0]);
        }

        const spotlightContainer = document.getElementById("spotlight-members");
        spotlightContainer.innerHTML = selectedMembers.map(member => `
            <div class="spotlight-card">
                <img src="images/${member.image}" alt="${member.name} Logo">
                <h3>${member.name}</h3>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            </div>
        `).join('');
    } catch (error) {
        console.error("Error loading spotlights:", error);
    }
}

loadSpotlights();
document.addEventListener("DOMContentLoaded", function() {
    const cardsContainer = document.querySelector('.cards-container');
    const visitInfo = document.getElementById('visit-info');

    // Load the JSON data
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
});

