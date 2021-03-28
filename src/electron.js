const createWindow = require('./win-helper.js')
const { app } = require('electron')

try {
  require('electron-reloader')(module)
} catch {}

const isDev = !app.isPackaged

let mainWindow

function loadVitePage(port) {
  mainWindow.loadURL(`http://localhost:${port}`).catch((err) => {
    console.log(err)
    setTimeout(() => {
      // do it again as the vite build can take a bit longer the first time
      loadVitePage(port)
    }, 300)
  })
}

function createMainWindow() {
  mainWindow = createWindow('main')
  mainWindow.once('close', () => {
    mainWindow = null
  })

  const port = process.env.PORT || 3000
  if (isDev) {
    loadVitePage(port)
  } else {
    mainWindow.loadFile('dist/index.html')
  }
}

app.once('ready', createMainWindow)
app.on('activate', () => {
  if (!mainWindow) {
    createMainWindow()
  }
})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})