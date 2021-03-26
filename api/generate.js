// const faker = require('faker')
const adjectives = require('../shared/adjectives')
const nouns = require('../shared/nouns')

const ran = (list) => Math.floor(Math.random() * list.length)

const getRandomAbbr = (adj, n) => `${adj[ran(adj)]} ${n[ran(n)]}`

module.exports = (_, res) => {
	const name = getRandomAbbr(adjectives, nouns)
	return res.status(200).json({ name })
}
