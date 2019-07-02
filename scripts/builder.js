const replace = require("replace-in-file");

const version = process.env.npm_package_version;

const gae = process.env.GIT_AUTHOR_EMAIL;
const gan = process.env.GIT_AUTHOR_NAME;
const gce = process.env.GIT_COMMITTER_EMAIL;
const gcn = process.env.GIT_COMMITTER_NAME;

console.log("Test-Lib builder task replaceVersion started with: " + version + "...");

const options = {
    files: ["src/**/*.js"],
    from: /\$\{version\}/g,
    to: version,
};

console.log(gae);
console.log(gan);
console.log(gce);
console.log(gcn);

replace(options)
    .then(results => {
        console.log("Test-Lib builder task completed successfully.");
    })
    .catch(error => {
        console.error("Test-Lib builder task failed with following error: " + error);
    });
