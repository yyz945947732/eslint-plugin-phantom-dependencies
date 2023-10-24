"use strict";

const requireIndex = require("requireindex");

module.exports = {
  rules: requireIndex(__dirname + "/rules"),
  configs: {
    recommended: {
      plugins: ["phantom-dependencies"],
      rules: {
        "phantom-dependencies/no-phantom-dependencies": "error",
      },
    },
  },
};
