// Main popup script for Allergy Sherpa extension

document.addEventListener('DOMContentLoaded', function() {
  // Initialize popup UI
  initializePopup();
});

function initializePopup() {
  // Load user preferences and allergies from storage
  chrome.storage.sync.get(['allergies', 'preferences'], function(data) {
    // Initialize UI with stored data
    console.log('Loaded user data:', data);
    
    // TODO: Populate UI with user data
  });
<<<<<<< HEAD
}
=======
}
>>>>>>> 9b01f81 (test)
