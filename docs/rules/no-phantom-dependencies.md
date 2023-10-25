# Make sure no phantom dependencies are used in your project (`phantom-dependencies/no-phantom-dependencies`)

💼 This rule is enabled in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

## Rule Details

This rule aims to make sure no [phantom dependencies](https://datacadamia.com/code/shipping/phantom) are used in your project.

### Options

```json
{
  "rules": {
    "phantom-dependencies/no-phantom-dependencies": [
      "error",
      {
        "paths": "src",
        "pkgJsonPath": "src/package.json",
        "exclude": ["examples"],
        "includeNodeLib": true,
        "excludeFilePattern": "test.js",
        "alias": {
          "@": "src"
        }
      }
    ]
  }
}
```

#### paths

paths target file or directory (support glob pattern).

Default is `src`

#### pkgJsonPath

pkgJsonPath package.json path.

Default is `src/package.json`

#### exclude

need exclude pkg pattern.

#### includeNodeLib

include node lib {fs, path, etc}.

Default is `false`

#### excludeFilePattern

need exclude scan files pattern.

#### alias

some alias config like `@components` `@apis` etc.

## When Not To Use It

If you're using [pnpm](https://pnpm.io). then maybe you don't need to use it.

## Further Reading

- [What are Phantom Dependencies](https://dev.to/lico/are-you-sure-what-packages-youre-using-are-in-packagejsonphantom-dependency-1m4i)
- [@sugarat/phantom](https://github.com/ATQQ/tools/blob/main/packages/cli/phantom/README.md)
