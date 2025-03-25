// Background script for Allergy Sherpa extension

// Listen for installation or update
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    // Initialize default settings on first install
    chrome.storage.sync.set({
      allergies: [],
      preferences: {
        scanEnabled: true,
        notificationsEnabled: true
      }
    }, function() {
      console.log('Default settings initialized');
    });
  }
});

// Add other background functionality here
<<<<<<< HEAD
// For example: message listeners, web request handlers, etc.
=======
// For example: message listeners, web request handlers, etc.
>>>>>>> 9b01f81 (test)
