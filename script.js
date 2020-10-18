const fs = require("fs");

let hasDevDependencies = false;
try {
  require("is-value");
  hasDevDependencies = true;
} catch (e) { }

let msg = `${process.env.npm_package_name}: ${process.env.npm_lifecycle_event} at ${__dirname}`;
if (hasDevDependencies) {
  msg += " (with dev deps)";
}

const logFile = process.env.SCRIPT_LOG_FILE;
if (!logFile) {
  console.error("SCRIPT_LOG_FILE not set");
  process.exit(1);
}
if (!logFile.startsWith("/")) {
  console.error(`SCRIPT_LOG_FILE must be an absolute path; got ${logFile}`);
  process.exit(1);
}
fs.promises.writeFile(logFile, msg + "\n", { flag: "a" });
