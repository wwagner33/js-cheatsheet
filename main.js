const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  // Cria uma janela de navegador
  const mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    icon: path.join(__dirname, 'icon.png'), 
    title: 'JavaScript Cheat Sheet'
  })

  // Carrega o arquivo HTML
  mainWindow.loadFile('index.html')

  // Abre o DevTools
  // mainWindow.webContents.openDevTools()
}

// Este método será chamado quando o Electron terminar de inicializar
app.whenReady().then(createWindow)

// Sai quando todas as janelas estiverem fechadas
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') { // No macOS, é comum que os aplicativos e sua barra de menu permaneçam ativos até que o usuário saia explicitamente com Cmd + Q
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})