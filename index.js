const express = require('express');
const users = require("./user");
const app = express()
app.get('/',(req, res) => {
    res.send('Welcome');
});
app.get('/api/user', (req, res) => {
    res.send(users)
      

});
const port = 4000
app.listen(port,() => console.log(`listening on ${port} ...`));
module.exports 