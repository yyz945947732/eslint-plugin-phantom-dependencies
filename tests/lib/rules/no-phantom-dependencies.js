"use strict";

const rule = require("../../../lib/rules/no-phantom-dependencies"),
  RuleTester = require("eslint").RuleTester;
const path = require("path");

const cjsRuleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2018,
  },
});

cjsRuleTester.run("no-phantom-dependencies", rule, {
  valid: [
    {
      code: "const { findGhost } = require('@sugarat/ghost');",
      options: [
        {
          paths: path.join(process.cwd(), "tests/playground"),
        },
      ],
    },
  ],
  invalid: [
    {
      code: "const parser = require('yargs-parser');",
      errors: [
        {
          message:
            '"yargs-parser" is a phantom dependencies in your project. Please add it to "package.json".',
        },
      ],
      options: [
        {
          paths: path.join(process.cwd(), "tests/playground"),
        },
      ],
    },
  ],
});
