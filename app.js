const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs

const fs = require('fs');

const generatePage = require('./page-template');

