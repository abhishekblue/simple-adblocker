# Simple AdBlocker by AJ

This is a basic Chrome extension that blocks ads on websites using simple rules and content filtering.

## Features

- Blocks ads from known ad networks like DoubleClick, Taboola, Media.net, and more
- Removes ad elements from web pages
- Has a toggle switch to enable or disable the ad blocker anytime
- Clean, lightweight, and easy to use

## How to Install (for Developers)

1. Download or clone this repo
2. Open Chrome and go to `chrome://extensions/`
3. Enable **Developer Mode** (top right)
4. Click **"Load unpacked"**
5. Select this project folder

That’s it! The ad blocker will start working immediately.

## How to Use

- Click on the extension icon in the toolbar
- it blocks ads every second

## Files

- `manifest.json` – main file that tells Chrome about the extension
- `content.js` – removes ad elements from the page
- `rules.json` – blocks ad network requests
- `popup.html` – the interface you see when you click the extension
- `popup.js` – logic for the toggle button
- `styles/popup.css` – styling for the popup UI

## Author

Made by **AJ (Abhishek Jain)**

## License

This project is open source and free to use for learning purposes.
