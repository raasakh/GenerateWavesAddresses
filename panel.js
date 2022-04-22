let fs = require("fs")
let addresses = JSON.parse(fs.readFileSync("addresses.json"))

addresses.forEach(address => {
	console.log(`[${addresses.indexOf(address)+1}] ${address.address}: ${address.phrase}`)
})
