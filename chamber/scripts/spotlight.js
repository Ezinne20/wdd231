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
