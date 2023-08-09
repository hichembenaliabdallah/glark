#! /usr/bin/env node
const { Octokit } = require("@octokit/core");

const octokit = new Octokit({
  auth: "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",
});

const createDir = async () => {
  await octokit.request("POST /user/repos", {
    name: "3d",
    description: "This is your first repo!",
    homepage: "https://github.com",
    private: false,
    is_template: true,
  });
};

createDir();
