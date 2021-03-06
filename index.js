#!/usr/bin/env node

const commander = require('commander');

const package = require('./package.json');
const actions = require('./actions');

const app = new commander.Command();

app
  .version(package.version);

app
  .command('new <name>')
  .description('create new app')
  .action(actions.new);

app
  .command('create <name> <template_url>')
  .description('create app from template')
  .action(actions.fromtemplate);

app
  .on('--help', function(){
    console.log('')
    console.log('Examples:');
    console.log('  $ ngasem new example');
  });

app.parse(process.argv);
