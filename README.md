# BibTeX JS Parser

A BitTeX parser implemented in JavaScript (ES6) based on
the [BibTeX Grammar](https://github.com/yepengding/BibTeX-Grammar).

Transforming a BibTeX file to an object in memory or a semi-structured file on disk.

## Features

- [ ] Full entry types support
- [x] To an in-memory object `bib`
- [x] To a JSON string
- [x] Browser support
- [ ] Public package

## Build

Environment

- Node.js v17.3.1

### For Dev

Build a CommonJS script to `dist/dev` with source map.

```shell
npm run dev
```

Configuration is changeable in `.webpack.config.dev.js`.

### For Test

Run tests defined in `test` after building for dev.

```shell
npm run test
```

### For Production

Build a UMD script to `dist`.

```shell
npm run build
```

Configuration is changeable in `.webpack.config.prod.js`.

## Related Project

- [BibTeX Grammar](https://github.com/yepengding/BibTeX-Grammar)
- [BibTex Java Parser](https://github.com/yepengding/BibTeX-Java-Parser)
