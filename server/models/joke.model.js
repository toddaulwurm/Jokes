const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setUp: {
		type: String,
		required: true,
		minlength: [10, "Setup must be at least 10 characters long!"]
	},
	punchline: {
		type: String,
		required: true,
		minlength: [3, "Punchline must be at least 3 characters long!"]
	}
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;