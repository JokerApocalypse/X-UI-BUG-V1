//CHANGEMENT ICI BRO N'OUBLIEZ PAS DE SUIVRE LA CHAINE YT https://www.youtube.com/JokerApocalypse
require("./all/module")
global.owner = "2250500107362" 
global.namaCreator = "DR.XENON" 
global.autoJoin = false
global.antilink = false
global.versisc = '1.0'
global.codeInvite = ""
global.isLink = 'wa.me/2250500107362' 
global.thumb = fs.readFileSync("./thumb.png") 
global.audionya = fs.readFileSync("./all/sound.mp3") 
global.packname = "DR.XENON"
global.author = "IG:@_drxenon"
global.jumlah = "1" 
global.namabot = "XENON BUG V1" 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
