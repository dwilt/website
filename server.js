const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(`public`));
app.set(`view engine`, `pug`);

app.get(`/api/:page`, (req, res) => {
    const { page } = req.params;

    res.render(__dirname + `/views/api/${page}`);
});

app.get(`/`, (req, res) => {
    res.render(`home`);
});

app.get(`/work`, (req, res) => {
    res.render(`work`);
});

app.listen(3000, () => {
    console.log(`Example app listening on port 3000!`)
});

