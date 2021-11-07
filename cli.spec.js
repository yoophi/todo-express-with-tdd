let path = require("path");
let exec = require("child_process").exec;

function cli(args, cwd) {
  return new Promise((resolve) => {
    exec(
      `node ${path.resolve("./cli.js")} ${args.join(" ")}`,
      { cwd },
      (error, stdout, stderr) => {
        resolve({
          code: error && error.code ? error.code : 0,
          error,
          stdout,
          stderr,
        });
      }
    );
  });
}

test("should ", async () => {
  const packageJson = require("./package.json");
  let result = await cli(["-v"], ".");
  expect(result.code).toBe(0);
  expect(result.stdout).toContain(packageJson.version);
});
