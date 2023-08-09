#! /usr/bin/env node
const { Octokit } = require("@octokit/core");

const octokit = new Octokit({
  auth: process.env.TOKEN,
});

const createDir = async () => {
  await octokit.request("POST /user/repos", {
    name: "Hello-World",
    description: "This is your first repo!",
    homepage: "https://github.com",
    private: false,
    is_template: true,
  });
};

createDir();
