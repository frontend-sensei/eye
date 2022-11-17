const { BrowserWindow } = require("electron");
const path = require("path");
const store = require("../../store/store");

async function createTrapWindow() {
  const trapWindow = new BrowserWindow({
    frame: true,
    fullscreen: true,
    transparent: true,
    webPreferences: {
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  await trapWindow.loadFile(path.join(__dirname, "index.html"));

  store.data.windows.trap = trapWindow;
}

module.exports = createTrapWindow;
