document.getElementById('loginButton').addEventListener('click', () => {
  // Trigger auto-login by opening the login page
  chrome.tabs.create({ url: "https://phc.prontonetworks.com/cgi-bin/authlogin?URI=http://www.msftconnecttest.com/redirect" });
});
