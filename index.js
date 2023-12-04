const { resolve } = require('path');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

const buildFolder = resolve(__dirname, 'client/build');
app.use(express.static(buildFolder));

app.get('/', (req, res) => {
	res.send(resolve(buildFolder, 'index.html'));
});

app.listen(PORT, () => {
	console.log(`Server is listening on PORT ${PORT}`);
});
