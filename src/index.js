const github = require('@actions/github');
const core = require('@actions/core');

console.log('Hello world!', github.token, JSON.stringify(github, null, 2));

const octokit = github.getOctokit(github.token);

console.log(octokit);
console.log(JSON.stringify(octokit, null, 2));
