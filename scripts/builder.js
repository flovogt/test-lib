const replace = require("replace-in-file");

module.exports = function (version = process.env.npm_package_version) {
    console.log("Test-Lib builder task replaceVersion started with: " + version + "...");

    const options = {
        files: ["src/**/*.js"],
        from: /\$\{version\}/g,
        to: version,
    };

    replace(options)
        .then(results => {
            console.log("Test-Lib builder task completed successfully.");
        })
        .catch(error => {
            console.error("Test-Lib builder task failed with following error: " + error);
        });

};