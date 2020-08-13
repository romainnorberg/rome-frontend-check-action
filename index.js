const core = require("@actions/core");
const github = require("@actions/github");
const {
	execSync,
} = require("child_process");

try {
	const time = new Date().toTimeString();
	core.setOutput("time", time);

	let package = "rome";

	const checkFlags = core.getInput("check-flags");

	const version = core.getInput("version");
	if (version) {
		console.log(`Using Rome version: ${version}!`);

		package += `@${version}`;
	}

	console.log("Installing Rome package...");
	const npmInstall = execSync(
		`npm install -g ${package}`,
		function(error, stdout, stderr) {
			console.log(stdout);
			console.log(error);
			console.log(stderr);
		},
	);

	console.log(npmInstall.toString());

	console.log(`Running Rome check (Flags: ${checkFlags ? checkFlags : "none"})`);
	const romeCheck = execSync(
		`rome check ${checkFlags}`,
		function(error, stdout, stderr) {
			console.log(stdout);
			console.log(error);
			console.log(stderr);
		},
	);

	console.log(romeCheck.toString());

	// Get the JSON webhook payload for the event that triggered the workflow
	const payload = JSON.stringify(github.context.payload, undefined, 2);
	console.log(`The event payload: ${payload}`);
} catch (error) {
	core.setFailed(error.message);
}
