const mongoose = require('mongoose')

const User = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		bottles: {type: Number},
		total: {type: Number},
		coins: {type: Number},
		character: {type: String},
		capacity: {type: Number},
		quote: { type: String },
		got: {type: Array}
	},
	{ collection: 'user-data' }
)

const model = mongoose.model('UserData', User)

module.exports = model