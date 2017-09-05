let express = require('express');
let router = express.Router();

let pokemon = [
{name: 'charmander', type: 'fire', id: '1'},
{name: 'pikachu', type: 'electric', id: '2'}
]

router.get('/', (req, res) => {
	res.send(pokemon);
})

router.post('/', (req, res) => {
	pokemon.push(req.body);
	res.send(pokemon);
})

router.put('/', (req, res) => {
	for(let i = 0; i < pokemon.length; i++) {
		if(req.body.id === pokemon[i].id) {
			pokemon[i].title = req.body.title;
			pokemon[i].genre = req.body.genre;
			res.send(pokemon);
		} else {
		  continue;
		}
	}
})

router.delete('/:id', (req, res) => {
	for(let i = 0; i < pokemon.length; i++) {
		if(req.params['id'] === pokemon[i].id) {
			pokemon.splice(i, 1);
			res.send(pokemon);
		}
	}
})

module.exports = router;

// create pokemon API. add new pokemon, 
// retrieve them, delete them and update them
// 2 get requests, all pokemon, and by type
