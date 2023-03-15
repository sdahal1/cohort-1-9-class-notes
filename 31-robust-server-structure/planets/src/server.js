// specify a port
const { PORT = 5000 } = process.env;
// pull in our app, defined in app.js
const app = require('./app.js');
// tell our app to listen on the port
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
