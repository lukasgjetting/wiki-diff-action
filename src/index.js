const github = require('@actions/github');
const core = require('@actions/core');

const main = async () => {
	const octokit = github.getOctokit(process.env.INPUT_REPOTOKEN);

	core.startGroup('Environment variables');
	console.log(JSON.stringify(process.env, null, 2));
	core.endGroup();

	const owner = process.env.GITHUB_REPOSITORY_OWNER;
	const repoName = process.env.GITHUB_REPOSITORY.replace(`${owner}/`, '');

	console.log({ owner, repoName });

	try {
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
	} catch (e) {
		console.log('An error has occurred :-O');
		console.error(e);
	}
};

main();
