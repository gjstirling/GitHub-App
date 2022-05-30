import { Octokit, App } from "octokit";

const pat = `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`;

const octokit = new Octokit({ auth: pat });

// Compare: https://docs.github.com/en/rest/reference/users#get-the-authenticated-user
const {
  data: { login },
} = await octokit.rest.users.getAuthenticated();
console.log("Hello, %s\n", login);

async function getRepos(user) {
  const { data } = await octokit.request(`GET /users/${user}/repos`);
  return data;
}

const repos = await getRepos("gjstirling");
for (const repo of repos) {
  console.log(repo.language + "\n");
}
