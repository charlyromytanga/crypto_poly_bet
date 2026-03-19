// Entrée principale API
const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
	res.send('API backend démarré');
});

app.listen(PORT, () => {
	console.log(`API backend démarré sur le port ${PORT}`);
});