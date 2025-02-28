//UBAH UBAH DISINI BRO JANGAN LUPA SUBREK YT DELTA TECH//
require("./all/module")
global.owner = "6282142902746" 
global.namaCreator = "Always Viczz⚡" 
global.autoJoin = false
global.antilink = false
global.versisc = '2.0'
global.codeInvite = ""
global.isLink = 'wa.me/6282142902746' 
global.thumb = fs.readFileSync("./thumb.png") 
global.audionya = fs.readFileSync("./all/sound.mp3") 
global.packname = "Always Viczz⚡" 
global.author = "IG:@viczzxcrash" 
global.jumlah = "5" 
global.namabot = "ViczzXcrash⚡" 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})