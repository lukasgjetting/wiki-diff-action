const github = require('@actions/github');
const core = require('@actions/core');

console.log(
	'Hello world!',
	process.env.ACTIONS_RUNTIME_TOKEN,
	process.env.INPUT_REPOTOKEN,
	process.env.ACTIONS_RUNTIME_TOKEN === process.env.INPUT_REPOTOKEN,
	JSON.stringify(process.env, null, 2),
);

const octokit = github.getOctokit(process.env.INPUT_REPOTOKEN);

console.log(octokit);
console.log(JSON.stringify(octokit, null, 2));
