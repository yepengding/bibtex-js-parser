// Generated from /Users/michaeltei/Projects/PracticeProjects/BibTeXParser/bibtex-js-parser/BibTeX-Grammar/BibTeX.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import BibTeXListener from './BibTeXListener.js';
import BibTeXVisitor from './BibTeXVisitor.js';

const serializedATN = [4,1,26,210,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,1,0,5,0,38,8,0,10,0,12,
0,41,9,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,56,8,1,
1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,5,1,5,1,5,4,5,72,8,5,11,5,
12,5,73,1,5,1,5,1,6,1,6,1,6,1,6,1,6,4,6,83,8,6,11,6,12,6,84,1,6,1,6,1,7,
1,7,1,7,1,7,1,7,4,7,94,8,7,11,7,12,7,95,1,7,1,7,1,8,1,8,1,8,1,8,1,8,4,8,
105,8,8,11,8,12,8,106,1,8,1,8,1,9,1,9,1,9,1,9,1,9,4,9,116,8,9,11,9,12,9,
117,1,9,1,9,1,10,1,10,1,10,1,10,1,10,4,10,127,8,10,11,10,12,10,128,1,10,
1,10,1,11,1,11,1,11,1,11,1,11,4,11,138,8,11,11,11,12,11,139,1,11,1,11,1,
12,1,12,1,12,1,12,1,12,4,12,149,8,12,11,12,12,12,150,1,12,1,12,1,13,1,13,
1,13,1,13,1,13,4,13,160,8,13,11,13,12,13,161,1,13,1,13,1,14,1,14,1,14,1,
14,1,14,4,14,171,8,14,11,14,12,14,172,1,14,1,14,1,15,1,15,1,15,1,15,1,15,
4,15,182,8,15,11,15,12,15,183,1,15,1,15,1,16,1,16,1,16,1,16,1,16,4,16,193,
8,16,11,16,12,16,194,1,16,1,16,1,17,1,17,1,17,1,17,1,17,4,17,204,8,17,11,
17,12,17,205,1,17,1,17,1,17,0,0,18,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
28,30,32,34,0,1,1,0,23,24,217,0,39,1,0,0,0,2,55,1,0,0,0,4,57,1,0,0,0,6,62,
1,0,0,0,8,64,1,0,0,0,10,66,1,0,0,0,12,77,1,0,0,0,14,88,1,0,0,0,16,99,1,0,
0,0,18,110,1,0,0,0,20,121,1,0,0,0,22,132,1,0,0,0,24,143,1,0,0,0,26,154,1,
0,0,0,28,165,1,0,0,0,30,176,1,0,0,0,32,187,1,0,0,0,34,198,1,0,0,0,36,38,
3,2,1,0,37,36,1,0,0,0,38,41,1,0,0,0,39,37,1,0,0,0,39,40,1,0,0,0,40,1,1,0,
0,0,41,39,1,0,0,0,42,56,3,10,5,0,43,56,3,12,6,0,44,56,3,14,7,0,45,56,3,16,
8,0,46,56,3,18,9,0,47,56,3,20,10,0,48,56,3,22,11,0,49,56,3,24,12,0,50,56,
3,26,13,0,51,56,3,28,14,0,52,56,3,30,15,0,53,56,3,32,16,0,54,56,3,34,17,
0,55,42,1,0,0,0,55,43,1,0,0,0,55,44,1,0,0,0,55,45,1,0,0,0,55,46,1,0,0,0,
55,47,1,0,0,0,55,48,1,0,0,0,55,49,1,0,0,0,55,50,1,0,0,0,55,51,1,0,0,0,55,
52,1,0,0,0,55,53,1,0,0,0,55,54,1,0,0,0,56,3,1,0,0,0,57,58,3,6,3,0,58,59,
5,15,0,0,59,60,3,8,4,0,60,61,5,16,0,0,61,5,1,0,0,0,62,63,5,14,0,0,63,7,1,
0,0,0,64,65,7,0,0,0,65,9,1,0,0,0,66,67,5,1,0,0,67,68,5,20,0,0,68,69,5,14,
0,0,69,71,5,16,0,0,70,72,3,4,2,0,71,70,1,0,0,0,72,73,1,0,0,0,73,71,1,0,0,
0,73,74,1,0,0,0,74,75,1,0,0,0,75,76,5,21,0,0,76,11,1,0,0,0,77,78,5,2,0,0,
78,79,5,20,0,0,79,80,5,14,0,0,80,82,5,16,0,0,81,83,3,4,2,0,82,81,1,0,0,0,
83,84,1,0,0,0,84,82,1,0,0,0,84,85,1,0,0,0,85,86,1,0,0,0,86,87,5,21,0,0,87,
13,1,0,0,0,88,89,5,3,0,0,89,90,5,20,0,0,90,91,5,14,0,0,91,93,5,16,0,0,92,
94,3,4,2,0,93,92,1,0,0,0,94,95,1,0,0,0,95,93,1,0,0,0,95,96,1,0,0,0,96,97,
1,0,0,0,97,98,5,21,0,0,98,15,1,0,0,0,99,100,5,4,0,0,100,101,5,20,0,0,101,
102,5,14,0,0,102,104,5,16,0,0,103,105,3,4,2,0,104,103,1,0,0,0,105,106,1,
0,0,0,106,104,1,0,0,0,106,107,1,0,0,0,107,108,1,0,0,0,108,109,5,21,0,0,109,
17,1,0,0,0,110,111,5,5,0,0,111,112,5,20,0,0,112,113,5,14,0,0,113,115,5,16,
0,0,114,116,3,4,2,0,115,114,1,0,0,0,116,117,1,0,0,0,117,115,1,0,0,0,117,
118,1,0,0,0,118,119,1,0,0,0,119,120,5,21,0,0,120,19,1,0,0,0,121,122,5,6,
0,0,122,123,5,20,0,0,123,124,5,14,0,0,124,126,5,16,0,0,125,127,3,4,2,0,126,
125,1,0,0,0,127,128,1,0,0,0,128,126,1,0,0,0,128,129,1,0,0,0,129,130,1,0,
0,0,130,131,5,21,0,0,131,21,1,0,0,0,132,133,5,7,0,0,133,134,5,20,0,0,134,
135,5,14,0,0,135,137,5,16,0,0,136,138,3,4,2,0,137,136,1,0,0,0,138,139,1,
0,0,0,139,137,1,0,0,0,139,140,1,0,0,0,140,141,1,0,0,0,141,142,5,21,0,0,142,
23,1,0,0,0,143,144,5,8,0,0,144,145,5,20,0,0,145,146,5,14,0,0,146,148,5,16,
0,0,147,149,3,4,2,0,148,147,1,0,0,0,149,150,1,0,0,0,150,148,1,0,0,0,150,
151,1,0,0,0,151,152,1,0,0,0,152,153,5,21,0,0,153,25,1,0,0,0,154,155,5,9,
0,0,155,156,5,20,0,0,156,157,5,14,0,0,157,159,5,16,0,0,158,160,3,4,2,0,159,
158,1,0,0,0,160,161,1,0,0,0,161,159,1,0,0,0,161,162,1,0,0,0,162,163,1,0,
0,0,163,164,5,21,0,0,164,27,1,0,0,0,165,166,5,10,0,0,166,167,5,20,0,0,167,
168,5,14,0,0,168,170,5,16,0,0,169,171,3,4,2,0,170,169,1,0,0,0,171,172,1,
0,0,0,172,170,1,0,0,0,172,173,1,0,0,0,173,174,1,0,0,0,174,175,5,21,0,0,175,
29,1,0,0,0,176,177,5,11,0,0,177,178,5,20,0,0,178,179,5,14,0,0,179,181,5,
16,0,0,180,182,3,4,2,0,181,180,1,0,0,0,182,183,1,0,0,0,183,181,1,0,0,0,183,
184,1,0,0,0,184,185,1,0,0,0,185,186,5,21,0,0,186,31,1,0,0,0,187,188,5,12,
0,0,188,189,5,20,0,0,189,190,5,14,0,0,190,192,5,16,0,0,191,193,3,4,2,0,192,
191,1,0,0,0,193,194,1,0,0,0,194,192,1,0,0,0,194,195,1,0,0,0,195,196,1,0,
0,0,196,197,5,21,0,0,197,33,1,0,0,0,198,199,5,13,0,0,199,200,5,20,0,0,200,
201,5,14,0,0,201,203,5,16,0,0,202,204,3,4,2,0,203,202,1,0,0,0,204,205,1,
0,0,0,205,203,1,0,0,0,205,206,1,0,0,0,206,207,1,0,0,0,207,208,5,21,0,0,208,
35,1,0,0,0,15,39,55,73,84,95,106,117,128,139,150,161,172,183,194,205];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class BibTeX extends antlr4.Parser {

    static grammarFileName = "BibTeX.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, "'='", 
                            "','", "'\"'", "'('", "')'", "'{'", "'}'", "'@'" ];
    static symbolicNames = [ null, "ARTICLE", "BOOK", "BOOKLET", "INBOOK", 
                             "INCOLLECTION", "INPROCEEDINGS", "PROCEEDINGS", 
                             "MANUAL", "MASTERTHESIS", "PHDTHESIS", "MISC", 
                             "TECHREPORT", "UNPUBLISHED", "IDENTIFIER", 
                             "EQ", "COMMA", "DQUOTE", "LPAREN", "RPAREN", 
                             "LBRACE", "RBRACE", "AT", "STRING_LITERAL", 
                             "INTEGER_LITERAL", "WS", "LINE_COMMENT" ];
    static ruleNames = [ "bibTex", "entry", "field", "key", "value", "article", 
                         "book", "booklet", "inbook", "incollection", "inproceedings", 
                         "proceedings", "manual", "mastersthesis", "phdthesis", 
                         "misc", "techreport", "unpublished" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = BibTeX.ruleNames;
        this.literalNames = BibTeX.literalNames;
        this.symbolicNames = BibTeX.symbolicNames;
    }

    get atn() {
        return atn;
    }



	bibTex() {
	    let localctx = new BibTexContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, BibTeX.RULE_bibTex);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BibTeX.ARTICLE) | (1 << BibTeX.BOOK) | (1 << BibTeX.BOOKLET) | (1 << BibTeX.INBOOK) | (1 << BibTeX.INCOLLECTION) | (1 << BibTeX.INPROCEEDINGS) | (1 << BibTeX.PROCEEDINGS) | (1 << BibTeX.MANUAL) | (1 << BibTeX.MASTERTHESIS) | (1 << BibTeX.PHDTHESIS) | (1 << BibTeX.MISC) | (1 << BibTeX.TECHREPORT) | (1 << BibTeX.UNPUBLISHED))) !== 0)) {
	            this.state = 36;
	            this.entry();
	            this.state = 41;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	entry() {
	    let localctx = new EntryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, BibTeX.RULE_entry);
	    try {
	        this.state = 55;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case BibTeX.ARTICLE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 42;
	            this.article();
	            break;
	        case BibTeX.BOOK:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 43;
	            this.book();
	            break;
	        case BibTeX.BOOKLET:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 44;
	            this.booklet();
	            break;
	        case BibTeX.INBOOK:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 45;
	            this.inbook();
	            break;
	        case BibTeX.INCOLLECTION:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 46;
	            this.incollection();
	            break;
	        case BibTeX.INPROCEEDINGS:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 47;
	            this.inproceedings();
	            break;
	        case BibTeX.PROCEEDINGS:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 48;
	            this.proceedings();
	            break;
	        case BibTeX.MANUAL:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 49;
	            this.manual();
	            break;
	        case BibTeX.MASTERTHESIS:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 50;
	            this.mastersthesis();
	            break;
	        case BibTeX.PHDTHESIS:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 51;
	            this.phdthesis();
	            break;
	        case BibTeX.MISC:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 52;
	            this.misc();
	            break;
	        case BibTeX.TECHREPORT:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 53;
	            this.techreport();
	            break;
	        case BibTeX.UNPUBLISHED:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 54;
	            this.unpublished();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	field() {
	    let localctx = new FieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, BibTeX.RULE_field);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.key();
	        this.state = 58;
	        this.match(BibTeX.EQ);
	        this.state = 59;
	        this.value();
	        this.state = 60;
	        this.match(BibTeX.COMMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	key() {
	    let localctx = new KeyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, BibTeX.RULE_key);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(BibTeX.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, BibTeX.RULE_value);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        _la = this._input.LA(1);
	        if(!(_la===BibTeX.STRING_LITERAL || _la===BibTeX.INTEGER_LITERAL)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	article() {
	    let localctx = new ArticleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, BibTeX.RULE_article);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.match(BibTeX.ARTICLE);
	        this.state = 67;
	        this.match(BibTeX.LBRACE);
	        this.state = 68;
	        this.match(BibTeX.IDENTIFIER);
	        this.state = 69;
	        this.match(BibTeX.COMMA);
	        this.state = 71; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 70;
	            this.field();
	            this.state = 73; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===BibTeX.IDENTIFIER);
	        this.state = 75;
	        this.match(BibTeX.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	book() {
	    let localctx = new BookContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, BibTeX.RULE_book);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this.match(BibTeX.BOOK);
	        this.state = 78;
	        this.match(BibTeX.LBRACE);
	        this.state = 79;
	        this.match(BibTeX.IDENTIFIER);
	        this.state = 80;
	        this.match(BibTeX.COMMA);
	        this.state = 82; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 81;
	            this.field();
	            this.state = 84; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===BibTeX.IDENTIFIER);
	        this.state = 86;
	        this.match(BibTeX.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	booklet() {
	    let localctx = new BookletContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, BibTeX.RULE_booklet);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.match(BibTeX.BOOKLET);
	        this.state = 89;
	        this.match(BibTeX.LBRACE);
	        this.state = 90;
	        this.match(BibTeX.IDENTIFIER);
	        this.state = 91;
	        this.match(BibTeX.COMMA);
	        this.state = 93; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 92;
	            this.field();
	            this.state = 95; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===BibTeX.IDENTIFIER);
	        this.state = 97;
	        this.match(BibTeX.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	inbook() {
	    let localctx = new InbookContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, BibTeX.RULE_inbook);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        this.match(BibTeX.INBOOK);
	        this.state = 100;
	        this.match(BibTeX.LBRACE);
	        this.state = 101;
	        this.match(BibTeX.IDENTIFIER);
	        this.state = 102;
	        this.match(BibTeX.COMMA);
	        this.state = 104; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 103;
	            this.field();
	            this.state = 106; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===BibTeX.IDENTIFIER);
	        this.state = 108;
	        this.match(BibTeX.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	incollection() {
	    let localctx = new IncollectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, BibTeX.RULE_incollection);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this.match(BibTeX.INCOLLECTION);
	        this.state = 111;
	        this.match(BibTeX.LBRACE);
	        this.state = 112;
	        this.match(BibTeX.IDENTIFIER);
	        this.state = 113;
	        this.match(BibTeX.COMMA);
	        this.state = 115; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 114;
	            this.field();
	            this.state = 117; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===BibTeX.IDENTIFIER);
	        this.state = 119;
	        this.match(BibTeX.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	inproceedings() {
	    let localctx = new InproceedingsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, BibTeX.RULE_inproceedings);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this.match(BibTeX.INPROCEEDINGS);
	        this.state = 122;
	        this.match(BibTeX.LBRACE);
	        this.state = 123;
	        this.match(BibTeX.IDENTIFIER);
	        this.state = 124;
	        this.match(BibTeX.COMMA);
	        this.state = 126; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 125;
	            this.field();
	            this.state = 128; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===BibTeX.IDENTIFIER);
	        this.state = 130;
	        this.match(BibTeX.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	proceedings() {
	    let localctx = new ProceedingsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, BibTeX.RULE_proceedings);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 132;
	        this.match(BibTeX.PROCEEDINGS);
	        this.state = 133;
	        this.match(BibTeX.LBRACE);
	        this.state = 134;
	        this.match(BibTeX.IDENTIFIER);
	        this.state = 135;
	        this.match(BibTeX.COMMA);
	        this.state = 137; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 136;
	            this.field();
	            this.state = 139; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===BibTeX.IDENTIFIER);
	        this.state = 141;
	        this.match(BibTeX.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	manual() {
	    let localctx = new ManualContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, BibTeX.RULE_manual);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
	        this.match(BibTeX.MANUAL);
	        this.state = 144;
	        this.match(BibTeX.LBRACE);
	        this.state = 145;
	        this.match(BibTeX.IDENTIFIER);
	        this.state = 146;
	        this.match(BibTeX.COMMA);
	        this.state = 148; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 147;
	            this.field();
	            this.state = 150; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===BibTeX.IDENTIFIER);
	        this.state = 152;
	        this.match(BibTeX.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mastersthesis() {
	    let localctx = new MastersthesisContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, BibTeX.RULE_mastersthesis);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this.match(BibTeX.MASTERTHESIS);
	        this.state = 155;
	        this.match(BibTeX.LBRACE);
	        this.state = 156;
	        this.match(BibTeX.IDENTIFIER);
	        this.state = 157;
	        this.match(BibTeX.COMMA);
	        this.state = 159; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 158;
	            this.field();
	            this.state = 161; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===BibTeX.IDENTIFIER);
	        this.state = 163;
	        this.match(BibTeX.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	phdthesis() {
	    let localctx = new PhdthesisContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, BibTeX.RULE_phdthesis);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 165;
	        this.match(BibTeX.PHDTHESIS);
	        this.state = 166;
	        this.match(BibTeX.LBRACE);
	        this.state = 167;
	        this.match(BibTeX.IDENTIFIER);
	        this.state = 168;
	        this.match(BibTeX.COMMA);
	        this.state = 170; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 169;
	            this.field();
	            this.state = 172; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===BibTeX.IDENTIFIER);
	        this.state = 174;
	        this.match(BibTeX.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	misc() {
	    let localctx = new MiscContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, BibTeX.RULE_misc);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 176;
	        this.match(BibTeX.MISC);
	        this.state = 177;
	        this.match(BibTeX.LBRACE);
	        this.state = 178;
	        this.match(BibTeX.IDENTIFIER);
	        this.state = 179;
	        this.match(BibTeX.COMMA);
	        this.state = 181; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 180;
	            this.field();
	            this.state = 183; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===BibTeX.IDENTIFIER);
	        this.state = 185;
	        this.match(BibTeX.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	techreport() {
	    let localctx = new TechreportContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, BibTeX.RULE_techreport);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 187;
	        this.match(BibTeX.TECHREPORT);
	        this.state = 188;
	        this.match(BibTeX.LBRACE);
	        this.state = 189;
	        this.match(BibTeX.IDENTIFIER);
	        this.state = 190;
	        this.match(BibTeX.COMMA);
	        this.state = 192; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 191;
	            this.field();
	            this.state = 194; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===BibTeX.IDENTIFIER);
	        this.state = 196;
	        this.match(BibTeX.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unpublished() {
	    let localctx = new UnpublishedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, BibTeX.RULE_unpublished);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 198;
	        this.match(BibTeX.UNPUBLISHED);
	        this.state = 199;
	        this.match(BibTeX.LBRACE);
	        this.state = 200;
	        this.match(BibTeX.IDENTIFIER);
	        this.state = 201;
	        this.match(BibTeX.COMMA);
	        this.state = 203; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 202;
	            this.field();
	            this.state = 205; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===BibTeX.IDENTIFIER);
	        this.state = 207;
	        this.match(BibTeX.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

BibTeX.EOF = antlr4.Token.EOF;
BibTeX.ARTICLE = 1;
BibTeX.BOOK = 2;
BibTeX.BOOKLET = 3;
BibTeX.INBOOK = 4;
BibTeX.INCOLLECTION = 5;
BibTeX.INPROCEEDINGS = 6;
BibTeX.PROCEEDINGS = 7;
BibTeX.MANUAL = 8;
BibTeX.MASTERTHESIS = 9;
BibTeX.PHDTHESIS = 10;
BibTeX.MISC = 11;
BibTeX.TECHREPORT = 12;
BibTeX.UNPUBLISHED = 13;
BibTeX.IDENTIFIER = 14;
BibTeX.EQ = 15;
BibTeX.COMMA = 16;
BibTeX.DQUOTE = 17;
BibTeX.LPAREN = 18;
BibTeX.RPAREN = 19;
BibTeX.LBRACE = 20;
BibTeX.RBRACE = 21;
BibTeX.AT = 22;
BibTeX.STRING_LITERAL = 23;
BibTeX.INTEGER_LITERAL = 24;
BibTeX.WS = 25;
BibTeX.LINE_COMMENT = 26;

BibTeX.RULE_bibTex = 0;
BibTeX.RULE_entry = 1;
BibTeX.RULE_field = 2;
BibTeX.RULE_key = 3;
BibTeX.RULE_value = 4;
BibTeX.RULE_article = 5;
BibTeX.RULE_book = 6;
BibTeX.RULE_booklet = 7;
BibTeX.RULE_inbook = 8;
BibTeX.RULE_incollection = 9;
BibTeX.RULE_inproceedings = 10;
BibTeX.RULE_proceedings = 11;
BibTeX.RULE_manual = 12;
BibTeX.RULE_mastersthesis = 13;
BibTeX.RULE_phdthesis = 14;
BibTeX.RULE_misc = 15;
BibTeX.RULE_techreport = 16;
BibTeX.RULE_unpublished = 17;

class BibTexContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BibTeX.RULE_bibTex;
    }

	entry = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EntryContext);
	    } else {
	        return this.getTypedRuleContext(EntryContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BibTeXListener ) {
	        listener.enterBibTex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BibTeXListener ) {
	        listener.exitBibTex(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BibTeXVisitor ) {
	        return visitor.visitBibTex(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EntryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BibTeX.RULE_entry;
    }

	article() {
	    return this.getTypedRuleContext(ArticleContext,0);
	};

	book() {
	    return this.getTypedRuleContext(BookContext,0);
	};

	booklet() {
	    return this.getTypedRuleContext(BookletContext,0);
	};

	inbook() {
	    return this.getTypedRuleContext(InbookContext,0);
	};

	incollection() {
	    return this.getTypedRuleContext(IncollectionContext,0);
	};

	inproceedings() {
	    return this.getTypedRuleContext(InproceedingsContext,0);
	};

	proceedings() {
	    return this.getTypedRuleContext(ProceedingsContext,0);
	};

	manual() {
	    return this.getTypedRuleContext(ManualContext,0);
	};

	mastersthesis() {
	    return this.getTypedRuleContext(MastersthesisContext,0);
	};

	phdthesis() {
	    return this.getTypedRuleContext(PhdthesisContext,0);
	};

	misc() {
	    return this.getTypedRuleContext(MiscContext,0);
	};

	techreport() {
	    return this.getTypedRuleContext(TechreportContext,0);
	};

	unpublished() {
	    return this.getTypedRuleContext(UnpublishedContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BibTeXListener ) {
	        listener.enterEntry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BibTeXListener ) {
	        listener.exitEntry(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BibTeXVisitor ) {
	        return visitor.visitEntry(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BibTeX.RULE_field;
    }

	key() {
	    return this.getTypedRuleContext(KeyContext,0);
	};

	EQ() {
	    return this.getToken(BibTeX.EQ, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	COMMA() {
	    return this.getToken(BibTeX.COMMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BibTeXListener ) {
	        listener.enterField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BibTeXListener ) {
	        listener.exitField(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BibTeXVisitor ) {
	        return visitor.visitField(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class KeyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BibTeX.RULE_key;
    }

	IDENTIFIER() {
	    return this.getToken(BibTeX.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BibTeXListener ) {
	        listener.enterKey(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BibTeXListener ) {
	        listener.exitKey(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BibTeXVisitor ) {
	        return visitor.visitKey(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BibTeX.RULE_value;
    }

	INTEGER_LITERAL() {
	    return this.getToken(BibTeX.INTEGER_LITERAL, 0);
	};

	STRING_LITERAL() {
	    return this.getToken(BibTeX.STRING_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BibTeXListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BibTeXListener ) {
	        listener.exitValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BibTeXVisitor ) {
	        return visitor.visitValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArticleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BibTeX.RULE_article;
    }

	ARTICLE() {
	    return this.getToken(BibTeX.ARTICLE, 0);
	};

	LBRACE() {
	    return this.getToken(BibTeX.LBRACE, 0);
	};

	IDENTIFIER() {
	    return this.getToken(BibTeX.IDENTIFIER, 0);
	};

	COMMA() {
	    return this.getToken(BibTeX.COMMA, 0);
	};

	RBRACE() {
	    return this.getToken(BibTeX.RBRACE, 0);
	};

	field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldContext);
	    } else {
	        return this.getTypedRuleContext(FieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BibTeXListener ) {
	        listener.enterArticle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BibTeXListener ) {
	        listener.exitArticle(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BibTeXVisitor ) {
	        return visitor.visitArticle(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BookContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BibTeX.RULE_book;
    }

	BOOK() {
	    return this.getToken(BibTeX.BOOK, 0);
	};

	LBRACE() {
	    return this.getToken(BibTeX.LBRACE, 0);
	};

	IDENTIFIER() {
	    return this.getToken(BibTeX.IDENTIFIER, 0);
	};

	COMMA() {
	    return this.getToken(BibTeX.COMMA, 0);
	};

	RBRACE() {
	    return this.getToken(BibTeX.RBRACE, 0);
	};

	field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldContext);
	    } else {
	        return this.getTypedRuleContext(FieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BibTeXListener ) {
	        listener.enterBook(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BibTeXListener ) {
	        listener.exitBook(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BibTeXVisitor ) {
	        return visitor.visitBook(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BookletContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BibTeX.RULE_booklet;
    }

	BOOKLET() {
	    return this.getToken(BibTeX.BOOKLET, 0);
	};

	LBRACE() {
	    return this.getToken(BibTeX.LBRACE, 0);
	};

	IDENTIFIER() {
	    return this.getToken(BibTeX.IDENTIFIER, 0);
	};

	COMMA() {
	    return this.getToken(BibTeX.COMMA, 0);
	};

	RBRACE() {
	    return this.getToken(BibTeX.RBRACE, 0);
	};

	field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldContext);
	    } else {
	        return this.getTypedRuleContext(FieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BibTeXListener ) {
	        listener.enterBooklet(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BibTeXListener ) {
	        listener.exitBooklet(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BibTeXVisitor ) {
	        return visitor.visitBooklet(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InbookContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BibTeX.RULE_inbook;
    }

	INBOOK() {
	    return this.getToken(BibTeX.INBOOK, 0);
	};

	LBRACE() {
	    return this.getToken(BibTeX.LBRACE, 0);
	};

	IDENTIFIER() {
	    return this.getToken(BibTeX.IDENTIFIER, 0);
	};

	COMMA() {
	    return this.getToken(BibTeX.COMMA, 0);
	};

	RBRACE() {
	    return this.getToken(BibTeX.RBRACE, 0);
	};

	field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldContext);
	    } else {
	        return this.getTypedRuleContext(FieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BibTeXListener ) {
	        listener.enterInbook(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BibTeXListener ) {
	        listener.exitInbook(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BibTeXVisitor ) {
	        return visitor.visitInbook(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IncollectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BibTeX.RULE_incollection;
    }

	INCOLLECTION() {
	    return this.getToken(BibTeX.INCOLLECTION, 0);
	};

	LBRACE() {
	    return this.getToken(BibTeX.LBRACE, 0);
	};

	IDENTIFIER() {
	    return this.getToken(BibTeX.IDENTIFIER, 0);
	};

	COMMA() {
	    return this.getToken(BibTeX.COMMA, 0);
	};

	RBRACE() {
	    return this.getToken(BibTeX.RBRACE, 0);
	};

	field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldContext);
	    } else {
	        return this.getTypedRuleContext(FieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BibTeXListener ) {
	        listener.enterIncollection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BibTeXListener ) {
	        listener.exitIncollection(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BibTeXVisitor ) {
	        return visitor.visitIncollection(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InproceedingsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BibTeX.RULE_inproceedings;
    }

	INPROCEEDINGS() {
	    return this.getToken(BibTeX.INPROCEEDINGS, 0);
	};

	LBRACE() {
	    return this.getToken(BibTeX.LBRACE, 0);
	};

	IDENTIFIER() {
	    return this.getToken(BibTeX.IDENTIFIER, 0);
	};

	COMMA() {
	    return this.getToken(BibTeX.COMMA, 0);
	};

	RBRACE() {
	    return this.getToken(BibTeX.RBRACE, 0);
	};

	field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldContext);
	    } else {
	        return this.getTypedRuleContext(FieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BibTeXListener ) {
	        listener.enterInproceedings(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BibTeXListener ) {
	        listener.exitInproceedings(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BibTeXVisitor ) {
	        return visitor.visitInproceedings(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ProceedingsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BibTeX.RULE_proceedings;
    }

	PROCEEDINGS() {
	    return this.getToken(BibTeX.PROCEEDINGS, 0);
	};

	LBRACE() {
	    return this.getToken(BibTeX.LBRACE, 0);
	};

	IDENTIFIER() {
	    return this.getToken(BibTeX.IDENTIFIER, 0);
	};

	COMMA() {
	    return this.getToken(BibTeX.COMMA, 0);
	};

	RBRACE() {
	    return this.getToken(BibTeX.RBRACE, 0);
	};

	field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldContext);
	    } else {
	        return this.getTypedRuleContext(FieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BibTeXListener ) {
	        listener.enterProceedings(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BibTeXListener ) {
	        listener.exitProceedings(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BibTeXVisitor ) {
	        return visitor.visitProceedings(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ManualContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BibTeX.RULE_manual;
    }

	MANUAL() {
	    return this.getToken(BibTeX.MANUAL, 0);
	};

	LBRACE() {
	    return this.getToken(BibTeX.LBRACE, 0);
	};

	IDENTIFIER() {
	    return this.getToken(BibTeX.IDENTIFIER, 0);
	};

	COMMA() {
	    return this.getToken(BibTeX.COMMA, 0);
	};

	RBRACE() {
	    return this.getToken(BibTeX.RBRACE, 0);
	};

	field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldContext);
	    } else {
	        return this.getTypedRuleContext(FieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BibTeXListener ) {
	        listener.enterManual(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BibTeXListener ) {
	        listener.exitManual(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BibTeXVisitor ) {
	        return visitor.visitManual(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MastersthesisContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BibTeX.RULE_mastersthesis;
    }

	MASTERTHESIS() {
	    return this.getToken(BibTeX.MASTERTHESIS, 0);
	};

	LBRACE() {
	    return this.getToken(BibTeX.LBRACE, 0);
	};

	IDENTIFIER() {
	    return this.getToken(BibTeX.IDENTIFIER, 0);
	};

	COMMA() {
	    return this.getToken(BibTeX.COMMA, 0);
	};

	RBRACE() {
	    return this.getToken(BibTeX.RBRACE, 0);
	};

	field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldContext);
	    } else {
	        return this.getTypedRuleContext(FieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BibTeXListener ) {
	        listener.enterMastersthesis(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BibTeXListener ) {
	        listener.exitMastersthesis(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BibTeXVisitor ) {
	        return visitor.visitMastersthesis(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PhdthesisContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BibTeX.RULE_phdthesis;
    }

	PHDTHESIS() {
	    return this.getToken(BibTeX.PHDTHESIS, 0);
	};

	LBRACE() {
	    return this.getToken(BibTeX.LBRACE, 0);
	};

	IDENTIFIER() {
	    return this.getToken(BibTeX.IDENTIFIER, 0);
	};

	COMMA() {
	    return this.getToken(BibTeX.COMMA, 0);
	};

	RBRACE() {
	    return this.getToken(BibTeX.RBRACE, 0);
	};

	field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldContext);
	    } else {
	        return this.getTypedRuleContext(FieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BibTeXListener ) {
	        listener.enterPhdthesis(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BibTeXListener ) {
	        listener.exitPhdthesis(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BibTeXVisitor ) {
	        return visitor.visitPhdthesis(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MiscContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BibTeX.RULE_misc;
    }

	MISC() {
	    return this.getToken(BibTeX.MISC, 0);
	};

	LBRACE() {
	    return this.getToken(BibTeX.LBRACE, 0);
	};

	IDENTIFIER() {
	    return this.getToken(BibTeX.IDENTIFIER, 0);
	};

	COMMA() {
	    return this.getToken(BibTeX.COMMA, 0);
	};

	RBRACE() {
	    return this.getToken(BibTeX.RBRACE, 0);
	};

	field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldContext);
	    } else {
	        return this.getTypedRuleContext(FieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BibTeXListener ) {
	        listener.enterMisc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BibTeXListener ) {
	        listener.exitMisc(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BibTeXVisitor ) {
	        return visitor.visitMisc(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TechreportContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BibTeX.RULE_techreport;
    }

	TECHREPORT() {
	    return this.getToken(BibTeX.TECHREPORT, 0);
	};

	LBRACE() {
	    return this.getToken(BibTeX.LBRACE, 0);
	};

	IDENTIFIER() {
	    return this.getToken(BibTeX.IDENTIFIER, 0);
	};

	COMMA() {
	    return this.getToken(BibTeX.COMMA, 0);
	};

	RBRACE() {
	    return this.getToken(BibTeX.RBRACE, 0);
	};

	field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldContext);
	    } else {
	        return this.getTypedRuleContext(FieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BibTeXListener ) {
	        listener.enterTechreport(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BibTeXListener ) {
	        listener.exitTechreport(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BibTeXVisitor ) {
	        return visitor.visitTechreport(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UnpublishedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BibTeX.RULE_unpublished;
    }

	UNPUBLISHED() {
	    return this.getToken(BibTeX.UNPUBLISHED, 0);
	};

	LBRACE() {
	    return this.getToken(BibTeX.LBRACE, 0);
	};

	IDENTIFIER() {
	    return this.getToken(BibTeX.IDENTIFIER, 0);
	};

	COMMA() {
	    return this.getToken(BibTeX.COMMA, 0);
	};

	RBRACE() {
	    return this.getToken(BibTeX.RBRACE, 0);
	};

	field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldContext);
	    } else {
	        return this.getTypedRuleContext(FieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BibTeXListener ) {
	        listener.enterUnpublished(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BibTeXListener ) {
	        listener.exitUnpublished(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof BibTeXVisitor ) {
	        return visitor.visitUnpublished(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




BibTeX.BibTexContext = BibTexContext; 
BibTeX.EntryContext = EntryContext; 
BibTeX.FieldContext = FieldContext; 
BibTeX.KeyContext = KeyContext; 
BibTeX.ValueContext = ValueContext; 
BibTeX.ArticleContext = ArticleContext; 
BibTeX.BookContext = BookContext; 
BibTeX.BookletContext = BookletContext; 
BibTeX.InbookContext = InbookContext; 
BibTeX.IncollectionContext = IncollectionContext; 
BibTeX.InproceedingsContext = InproceedingsContext; 
BibTeX.ProceedingsContext = ProceedingsContext; 
BibTeX.ManualContext = ManualContext; 
BibTeX.MastersthesisContext = MastersthesisContext; 
BibTeX.PhdthesisContext = PhdthesisContext; 
BibTeX.MiscContext = MiscContext; 
BibTeX.TechreportContext = TechreportContext; 
BibTeX.UnpublishedContext = UnpublishedContext; 
