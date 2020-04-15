const express = require('express');
const users = require("./user");
const app = express()
const port = 4000
app.listen(port,() => console.log(`listening on ${port} ...`));
app.get('/',(req, res) => {
    res.send('Welcome');
});
app.get('/api/user', (req, res) => {
    res.status(200).json({
        users,
    });
});
module.exports