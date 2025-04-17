// scripts/modal.js

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
  }
  
  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
  }
  
  // Example usage for modal events
  document.querySelector('#someModalButton').addEventListener('click', () => openModal('myModal'));
  document.querySelector('#closeModalButton').addEventListener('click', () => closeModal('myModal'));
  