const messageElement = document.getElementById("visit-message");
const lastVisit = localStorage.getItem("lastVisit");

const now = Date.now();

if (!lastVisit) {
  messageElement.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const diffTime = now - Number(lastVisit);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 1) {
    messageElement.textContent = "Back so soon! Awesome!";
  } else if (diffDays === 1) {
    messageElement.textContent = `You last visited 1 day ago.`;
  } else {
    messageElement.textContent = `You last visited ${diffDays} days ago.`;
  }
}

localStorage.setItem("lastVisit", now);
