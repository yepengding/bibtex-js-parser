import antlr4 from 'antlr4';
import BibTeXLexer from './base/BibTeXLexer.js';
import BibTeX from './base/BibTeX.js';
import BibVisitor from './core/bib_visitor'


/**
 * Parse to a bib object
 *
 * @param input
 * @returns {{entries: []}}
 */
export function parse(input) {
    // Get parse tree
    const parseTree = getParseTree(input);

    // Instantiate the BibVisitor (root visitor)
    const bibVisitor = new BibVisitor();
    parseTree.accept(bibVisitor);

    return bibVisitor.bib;
}

const getParseTree = (input) => {
    const chars = new antlr4.InputStream(input);
    const lexer = new BibTeXLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new BibTeX(tokens);
    parser.buildParseTrees = true;
    return parser.bibTex();
}