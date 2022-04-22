const WavesAPI = require('@waves/waves-api')
const Waves = WavesAPI.create(WavesAPI.MAINNET_CONFIG)
const fs = require('fs')
const prompt = require('prompt-sync')()

const much = prompt('[#] How much address to generate: ')

const d = []

function generateAddress() {
	let seed = Waves.Seed.create()
	d.push({
		address: seed.address,
		phrase: seed.phrase
	})
}

function putInJson(d) {
	fs.writeFile('./addresses.json', JSON.stringify(d), 'utf-8', (e) => {if(e) throw e})
}


for (var i = 0; i < much; i++) {
	generateAddress()
}
putInJson(d)
