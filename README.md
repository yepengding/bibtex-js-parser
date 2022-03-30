# BibTeX JS Parser

A BitTeX parser implemented in JavaScript (ES6) based on
the [BibTeX Grammar](https://github.com/yepengding/BibTeX-Grammar).

Transforming a BibTeX file to an object in memory or a semi-structured file on disk.

## Features

- [ ] Full entry types support
- [x] To a JSON object
- [x] To a JSON string
- [x] Browser support
- [ ] Public package

## Demo

Input:

```
@inproceedings{ding_dagbase_2020,
	title = {Dagbase: a decentralized database platform {Using} {DAG}-based consensus},
	copyright = {All rights reserved},
	isbn = {1-72817-303-5},
	booktitle = {2020 {IEEE} 44th {Annual} {Computers}, {Software}, and {Applications} {Conference} ({COMPSAC})},
	publisher = {IEEE},
	author = {Ding, Yepeng and Sato, Hiroyuki},
	year = {2020},
	pages = {798--807},
}

@article{ding_formalism-driven_2022,
	title = {Formalism-{Driven} {Development}: {Concepts}, {Taxonomy}, and {Practice}},
	volume = {12},
	copyright = {All rights reserved},
	issn = {2076-3417},
	url = {https://www.mdpi.com/2076-3417/12/7/3415},
	doi = {10.3390/app12073415},
	number = {7},
	journal = {Applied Sciences},
	author = {Ding, Yepeng and Sato, Hiroyuki},
	year = {2022},
}
```

Output:

```json
[
  {
    "id": "ding_dagbase_2020",
    "type": "inproceedings",
    "title": "Dagbase: a decentralized database platform Using DAG-based consensus",
    "copyright": "All rights reserved",
    "isbn": "1-72817-303-5",
    "booktitle": "2020 IEEE 44th Annual Computers, Software, and Applications Conference (COMPSAC)",
    "publisher": "IEEE",
    "author": "Ding, Yepeng and Sato, Hiroyuki",
    "year": "2020",
    "pages": "798--807"
  },
  {
    "id": "ding_formalism-driven_2022",
    "type": "article",
    "title": "Formalism-Driven Development: Concepts, Taxonomy, and Practice",
    "volume": "12",
    "copyright": "All rights reserved",
    "issn": "2076-3417",
    "url": "https://www.mdpi.com/2076-3417/12/7/3415",
    "doi": "10.3390/app12073415",
    "number": "7",
    "journal": "Applied Sciences",
    "author": "Ding, Yepeng and Sato, Hiroyuki",
    "year": "2022"
  }
]
```

## Build

Environment

- Node.js v17.3.1

### For Dev

Build a CommonJS script to `dist/dev/bibtex-js-parser-dev.js` with source map.

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

Build a UMD script to `dist/bibtex-js-parser.js`.

```shell
npm run build
```

Configuration is changeable in `.webpack.config.prod.js`.

## Usage

1. Build `bibtex-js-parser.js` for production.
2. Import `bibtex-js-parser.js` in your project.
3. Use exposed functions `parseToJSON` or `parseToJSONString`.

Some examples are listed for reference.

### In-Browser Use

1. Build a UMD script `bibtex-js-parser.js`.
2. Include `bibtex-js-parser.js`.

```html
<script src="./bibtex-js-parser.js"></script>
```

3. Use exposed functions.

```html
<script>
    const bibJSON = BibtexParser.parseToJSON(input);
    const bibJSONString = BibtexParser.parseToJSONString(input);
</script>
```

## Related Project

- [BibTeX Grammar](https://github.com/yepengding/BibTeX-Grammar)
- [BibTex Java Parser](https://github.com/yepengding/BibTeX-Java-Parser)
