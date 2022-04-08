#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
    padding: 1,
    margin: 1,
    borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.hex('#464EB8').bold('Troy Connor  /'),
  handle: chalk.hex('#464EB8').bold('troy0820'),
  work: chalk.hex('#464EB8').bold('Senior Software Engineer at Microsoft'),
  twitter: chalk.hex('#464EB8').bold('https://twitter.com/troy0820'),
  github: chalk.hex('#464EB8').bold('https://github.com/troy0820'),
  linkedin: chalk.hex('#464EB8').bold('https://www.linkedin.com/in/troyconnor/'),
  web: chalk.hex('#464EB8').bold('https://troy0820.dev'),
  npx: chalk.hex('#464EB8').bold('npx troy0820'),
  labelWork: chalk.hex('#F25022').bold('      Work:'),
  labelTwitter: chalk.hex('#7FBA00').bold('   Twitter:'),
  labelGitHub: chalk.hex('#FFB900').bold('    GitHub:'),
  labelLinkedIn: chalk.hex('#453EB8').bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + linkedining + newline + webing + newline + newline + carding

console.log(chalk.hex('#464EB8').bold(boxen(output, options)))
