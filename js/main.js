const electron = require('electron');
const url = require('url');
const path = require('path');

const{app,BrowserWindow,Menu} = electron;

let loginWindow;
let mainWindow;

app.on('ready', function() {
    loginWindow = new BrowserWindow({});
    loginWindow.maximize();
    loginWindow.loadURL(url.format({
        pathname: path.join('../login.html'),
        protocol: 'file:',
        slashes: true
    }));

    loginWindow.on('closed', () =>{
        app.quit();
    })

    const menu = Menu.buildFromTemplate(mainMenu);
    Menu.setApplicationMenu(menu);
})

function mainView(){
    mainWindow = new BrowserWindow({});
    mainWindow.maximize();
    mainWindow.loadURL(url.format({
        pathname: path.join('../index.html'),
        protocol: 'file:',
        slashes: true
    }))
}

const mainMenu = [
    {
        label: 'Ir a login',
        click(){
            loginWindow.hide();
            mainView();
        }
    }
]

