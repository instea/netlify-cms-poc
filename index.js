const express = require('express');
const path = require('path');
const app = require('./lib/netlify-cms-github-oauth-provider');

const port = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname, 'public')));
app.listen(port, () => console.log(`Running on port ${port}!`));