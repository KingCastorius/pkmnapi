let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let router = express.Router();
let pokemon = require('./pokemon');

app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.end();
})

app.use('/api/pokemon', pokemon);


app.listen(3000, () => {
	console.log('Server connected');
})

module.exports = router;