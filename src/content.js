// Define your actual credentials
const username = "USERNAME"; // Your actual username
const password = "PASSWORD"; // Your actual password

// Function to fill and submit the form
function autoFillAndSubmit() {
  console.log("Auto-fill script loaded"); // For debugging purposes

  // Select the input fields based on their name attributes
  const usernameField = document.querySelector("input[name='userId']");
  const passwordField = document.querySelector("input[name='password']");
  
  // Select the submit button
  const submitButton = document.querySelector("input[name='Submit22']");

  // Check if the elements exist on the page
  if (usernameField && passwordField && submitButton) {
    console.log("Filling the form..."); // For debugging purposes
    usernameField.value = username;
    passwordField.value = password;

    // Submit the form
    submitButton.click();

    // Listen for the next page's load event before closing the tab
    window.addEventListener('load', () => {
      console.log("Next page loaded, closing the tab.");
      window.close(); // Close the current tab
    });
  } else {
    console.error("Could not find form elements!"); // Debug message if elements are not found
  }
}

// Wait for the DOM to load completely, then run the auto-fill function
window.addEventListener('load', () => {
  // Slight delay to ensure all elements are available before executing
  setTimeout(autoFillAndSubmit, 500); 
});
