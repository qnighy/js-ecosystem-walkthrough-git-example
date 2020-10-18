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

console.log(msg);
fs.promises.writeFile("script.log", msg + "\n", { flag: "a" });
