// scripts/storage.js

// Save to localStorage
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  // Get from localStorage
  function getFromLocalStorage(key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }
  
  // Example usage
  saveToLocalStorage('visited', true);
  console.log(getFromLocalStorage('visited')); // Logs: true
  