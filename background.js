// chrome.webNavigation.onCompleted.addListener(function(details) {
//     // Check if you're connecting to a specific Wi-Fi network by URL pattern
//     chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
//       const currentTab = tabs[0];
      
//       if (currentTab.url.includes("msftconnecttest.com/redirect")) {
//         // If you're redirected, navigate to the login page
//         chrome.tabs.update(currentTab.id, {
//           url: "http://phc.prontonetworks.com/cgi-bin/authlogin?URI=http://www.msftconnecttest.com/redirect"
//         });
//       }
//     });
//   }, {url: [{urlContains: "msftconnecttest.com/redirect"}]});
  