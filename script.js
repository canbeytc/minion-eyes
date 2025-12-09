const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 400,            // Gözleri kapsayacak boyut
    height: 200,
    transparent: true,     // Pencere şeffaf
    frame: false,          // Pencere çerçevesiz
    alwaysOnTop: true,     // Overlay gibi
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);
