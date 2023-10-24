"use strict";

const { findGhost } = require("@sugarat/ghost");
const path = require("path");

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Make sure no phantom dependencies are used in your project.",
      url: "https://github.com/yyz945947732/eslint-plugin-phantom-dependencies/blob/master/docs/rules/no-phantom-dependencies.md",
    },
    messages: {
      NoPhantomImport:
        '"{{packageName}}" is a phantom dependency in your project. Please add it to "package.json".',
    },
    schema: [
      {
        type: "object",
        properties: {
          paths: {
            type: ["string", "array"],
            items: {
              type: "string",
            },
          },
          pkgJsonPath: {
            type: "string",
          },
          exclude: {
            type: ["string", "array"],
            items: {
              type: "string",
            },
          },
          includeNodeLib: {
            type: "boolean",
          },
          excludeFilePattern: {
            type: ["string", "array"],
            items: {
              type: "string",
            },
          },
          alias: {
            type: "object",
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create(context) {
    const options = context.options[0] || {};
    const paths = options.paths || path.join(context.cwd, "src");
    const pkgJsonPath =
      options.pkgJsonPath || path.join(context.cwd, "package.json");
    const phantomDependency = findGhost(paths, pkgJsonPath, options);

    return {
      [[
        "ExportAllDeclaration",
        "ExportNamedDeclaration",
        "ImportDeclaration",
        "ImportExpression",
      ]](node) {
        const sourceNode = node.source;

        if (!phantomDependency || !phantomDependency.length) {
          return;
        }

        // skip `import(foo)`
        if (
          node.type === "ImportExpression" &&
          sourceNode &&
          sourceNode.type !== "Literal"
        ) {
          return;
        }

        const packageName = stripImportPathParams(sourceNode.value);
        if (phantomDependency.includes(packageName)) {
          context.report({
            loc: sourceNode.loc,
            messageId: "NoPhantomImport",
            data: {
              packageName,
            },
          });
        }
      },
      VariableDeclaration(node) {
        node.declarations.forEach((item) => {
          if (!item.init) return;
          if (
            item.init.type === "CallExpression" &&
            item.init.callee.name === "require" &&
            item.init.arguments.length
          ) {
            const sourceNode = item.init.arguments[0];
            const packageName = stripImportPathParams(sourceNode.value);
            if (phantomDependency.includes(packageName)) {
              context.report({
                loc: sourceNode.loc,
                messageId: "NoPhantomImport",
                data: {
                  packageName,
                },
              });
            }
          }
        });
      },
    };
  },
};

/**
 * @private
 *
 * @copy https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/lib/util/strip-import-path-params.js
 */
function stripImportPathParams(path) {
  const i = path.indexOf("!");
  return i === -1 ? path : path.slice(0, i);
}
