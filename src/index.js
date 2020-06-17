const github = require('@actions/github');
const core = require('@actions/core');

console.log('Hello world!', process.env.INPUT_GITHUB_TOKEN, JSON.stringify(process.env, null, 2));

const octokit = github.getOctokit(process.env.INPUT_repoToken);

console.log(octokit);
console.log(JSON.stringify(octokit, null, 2));
