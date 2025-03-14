document.addEventListener("DOMContentLoaded", () => {
    const directory = document.getElementById("directory");
    const gridViewBtn = document.getElementById("gridView");
    const listViewBtn = document.getElementById("listView");

    // Fetch data from members.json
    async function loadMembers() {
        try {
            const response = await fetch("data/members.json");
            const members = await response.json();
            displayMembers(members);
        } catch (error) {
            console.error("Error loading JSON:", error);
        }
    }

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

    // Toggle Grid/List View
    gridViewBtn.addEventListener("click", () => {
        directory.classList.remove("list");
        directory.classList.add("grid");
    });

    listViewBtn.addEventListener("click", () => {
        directory.classList.remove("grid");
        directory.classList.add("list");
    });

    // Dynamic Footer Year & Last Modified Date
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

    // Load members
    loadMembers();
});
