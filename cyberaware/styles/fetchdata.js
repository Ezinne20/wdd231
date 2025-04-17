// scripts/fetchdata.js

async function fetchThreatsData() {
    try {
      const response = await fetch('data/threats.json');
      const data = await response.json();
      console.log(data); // Log the data to the console for verification
      // You can now use this data to populate the site dynamically
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchThreatsData();
  