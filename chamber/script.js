document.addEventListener("DOMContentLoaded", () => {
    const directory = document.getElementById("directory");
    const gridViewBtn = document.getElementById("gridView");
    const listViewBtn = document.getElementById("listView");
    const searchBox = document.getElementById("searchBox");
    const sortOptions = document.getElementById("sortOptions");
    const darkModeToggle = document.getElementById("darkModeToggle");

    let membersData = [];

    // Fetch and display member data
    async function fetchMembers() {
        const response = await fetch("members.json");
        membersData = await response.json();
        displayMembers(membersData);
    }

    function displayMembers(members) {
        directory.innerHTML = "";
        members.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <h2>${member.name}</h2>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <img src="${member.image}" alt="${member.name}" loading="lazy">
            `;
            directory.appendChild(card);
        });
    }

    // Search function
    searchBox.addEventListener("input", () => {
        const filteredMembers = membersData.filter(member =>
            member.name.toLowerCase().includes(searchBox.value.toLowerCase())
        );
        displayMembers(filteredMembers);
    });

    // Sorting function
    sortOptions.addEventListener("change", () => {
        let sortedMembers = [...membersData];
        if (sortOptions.value === "name") {
            sortedMembers.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortOptions.value === "membership") {
            sortedMembers.sort((a, b) => b.membership - a.membership);
        }
        displayMembers(sortedMembers);
    });

    // View Toggle
    gridViewBtn.addEventListener("click", () => {
        directory.classList.remove("list");
        directory.classList.add("grid");
    });

    listViewBtn.addEventListener("click", () => {
        directory.classList.remove("grid");
        directory.classList.add("list");
    });

    // Dark Mode Toggle
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Footer Updates
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

    fetchMembers();
});
