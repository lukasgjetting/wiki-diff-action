const github = require('@actions/github');
const core = require('@actions/core');

const main = async () => {
	const octokit = github.getOctokit(process.env.INPUT_REPOTOKEN);

	console.log((await octokit.orgs.list()));
	console.log(JSON.stringify(octokit, null, 2));
};

main();
