const github = require('@actions/github');
const core = require('@actions/core');

const main = async () => {
	const octokit = github.getOctokit(process.env.INPUT_REPOTOKEN);

	const owner = process.env.GITHUB_REPOSITORY_OWNER;
	const repoName = process.env.GITHUB_REPOSITORY.replace(`${owner}/`, '');

	console.log({ owner, repoName });

	const repo = await octokit.repos.get({
		owner,
		repo: repoName,
	});

	console.log(JSON.stringify(repo, null, 2));

	const wikiRepo = await octokit.repos.get({
		owner,
		repo: `${repoName}.wiki`,
	});

	console.log(JSON.stringify(wikiRepo, null, 2));
};

main();
