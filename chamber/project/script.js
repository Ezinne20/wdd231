document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript loaded!");

    // Example: Change header text on click
    const header = document.querySelector("h1");
    header.addEventListener("click", function() {
        header.textContent = "You clicked the header!";
    });
});
