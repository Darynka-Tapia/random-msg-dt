#!/usr/bin/env node
let random = require('../src/index.js');
const args = process.argv.slice(2);

random.funnyCommit(args);