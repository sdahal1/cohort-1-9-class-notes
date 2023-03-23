const PORT = process.env.PORT || 5000;
// const {PORT = 5000} = process.env;
const app = require('./app.js');
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
