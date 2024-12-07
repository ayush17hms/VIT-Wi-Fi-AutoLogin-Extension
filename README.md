# VIT Wi-Fi AutoLogin Extension

This repository contains a Chrome extension that automatically logs in to the VIT Wi-Fi networks (`VIT2.4G` or `VIT5G`) by detecting the SSID and navigating to the login portal to submit the credentials.

---

## Features
- Detects connection to specified Wi-Fi SSIDs (e.g., `VIT2.4G` or `VIT5G`).
- Automatically navigates to the login portal and submits the provided credentials.
- Saves time and ensures uninterrupted connectivity.

---

## Installation

1. **Clone or Download this Repository**:
   ```bash
   git clone https://github.com/ayush17hms/VIT-Wi-Fi-AutoLogin-Extension.git
   cd vit-wifi-autologin-extension
   ```

2. **Modify Configuration**:
   - Open the `content.js` file inside the `src` folder.
   - Replace the placeholder Wi-Fi SSIDs, username, and password with your details.
   ```javascript
      // Define your actual credentials
      const username = "USERNAME"; // Your actual username
      const password = "PASSWORD"; // Your actual password
   ```

3. **Load the Extension into Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable **Developer mode** using the toggle at the top right.
   - Click **Load unpacked** and select the `src` folder from this repository.

4. **Activate the Extension**:
   - Ensure the extension is enabled and running.
   - The extension will detect your Wi-Fi connection and automatically log in when connected to the configured SSIDs.

---

## Usage
- The extension works in the background. Once you connect to one of the configured Wi-Fi SSIDs, it will navigate to the login page and submit your credentials automatically.
- Make sure the Wi-Fi login portal URL (`http://phc.prontonetworks.com/cgi-bin/authlogin?URI=http://www.msftconnecttest.com/redirect`) is accessible from your location.

---

## Folder Structure
```
vit-wifi-autologin-extension/
├── src/
│   ├── manifest.json    # Chrome extension manifest file
│   ├── popup.js
│   ├── manifest.json
│   ├── content.js    # Contains the extension's logic
├── README.md            # Documentation file
```

---

## Customize Your Extension
If you want to add more features or support multiple portals, you can extend the `content.js` logic to handle various conditions dynamically.

---

## Contributing
Feel free to fork this repository and submit pull requests if you have improvements or additional features.

---
