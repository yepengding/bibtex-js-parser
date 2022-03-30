// Generated from /BibTeX-Grammar/BibTeX.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import BibTeXListener from './BibTeXListener.js';
import BibTeXVisitor from './BibTeXVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u001b\u00d4\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0003\u0002\u0007\u0002(\n\u0002\f\u0002\u000e\u0002+\u000b\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u0003:\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0006\u0007J",
    "\n\u0007\r\u0007\u000e\u0007K\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0006\bU\n\b\r\b\u000e\bV\u0003\b\u0003\b",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0006\t`\n\t\r\t\u000e\ta\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0006\nk\n\n\r\n",
    "\u000e\nl\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0006\u000bv\n\u000b\r\u000b\u000e\u000bw\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0006\f\u0081\n",
    "\f\r\f\u000e\f\u0082\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0006\r\u008c\n\r\r\r\u000e\r\u008d\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0006\u000e\u0097\n",
    "\u000e\r\u000e\u000e\u000e\u0098\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0006\u000f\u00a2\n",
    "\u000f\r\u000f\u000e\u000f\u00a3\u0003\u000f\u0003\u000f\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0006\u0010\u00ad\n",
    "\u0010\r\u0010\u000e\u0010\u00ae\u0003\u0010\u0003\u0010\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0006\u0011\u00b8\n",
    "\u0011\r\u0011\u000e\u0011\u00b9\u0003\u0011\u0003\u0011\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0006\u0012\u00c3\n",
    "\u0012\r\u0012\u000e\u0012\u00c4\u0003\u0012\u0003\u0012\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0006\u0013\u00ce\n",
    "\u0013\r\u0013\u000e\u0013\u00cf\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0002\u0002\u0014\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016",
    "\u0018\u001a\u001c\u001e \"$\u0002\u0003\u0003\u0002\u0018\u0019\u0002",
    "\u00db\u0002)\u0003\u0002\u0002\u0002\u00049\u0003\u0002\u0002\u0002",
    "\u0006;\u0003\u0002\u0002\u0002\b@\u0003\u0002\u0002\u0002\nB\u0003",
    "\u0002\u0002\u0002\fD\u0003\u0002\u0002\u0002\u000eO\u0003\u0002\u0002",
    "\u0002\u0010Z\u0003\u0002\u0002\u0002\u0012e\u0003\u0002\u0002\u0002",
    "\u0014p\u0003\u0002\u0002\u0002\u0016{\u0003\u0002\u0002\u0002\u0018",
    "\u0086\u0003\u0002\u0002\u0002\u001a\u0091\u0003\u0002\u0002\u0002\u001c",
    "\u009c\u0003\u0002\u0002\u0002\u001e\u00a7\u0003\u0002\u0002\u0002 ",
    "\u00b2\u0003\u0002\u0002\u0002\"\u00bd\u0003\u0002\u0002\u0002$\u00c8",
    "\u0003\u0002\u0002\u0002&(\u0005\u0004\u0003\u0002\'&\u0003\u0002\u0002",
    "\u0002(+\u0003\u0002\u0002\u0002)\'\u0003\u0002\u0002\u0002)*\u0003",
    "\u0002\u0002\u0002*\u0003\u0003\u0002\u0002\u0002+)\u0003\u0002\u0002",
    "\u0002,:\u0005\f\u0007\u0002-:\u0005\u000e\b\u0002.:\u0005\u0010\t\u0002",
    "/:\u0005\u0012\n\u00020:\u0005\u0014\u000b\u00021:\u0005\u0016\f\u0002",
    "2:\u0005\u0018\r\u00023:\u0005\u001a\u000e\u00024:\u0005\u001c\u000f",
    "\u00025:\u0005\u001e\u0010\u00026:\u0005 \u0011\u00027:\u0005\"\u0012",
    "\u00028:\u0005$\u0013\u00029,\u0003\u0002\u0002\u00029-\u0003\u0002",
    "\u0002\u00029.\u0003\u0002\u0002\u00029/\u0003\u0002\u0002\u000290\u0003",
    "\u0002\u0002\u000291\u0003\u0002\u0002\u000292\u0003\u0002\u0002\u0002",
    "93\u0003\u0002\u0002\u000294\u0003\u0002\u0002\u000295\u0003\u0002\u0002",
    "\u000296\u0003\u0002\u0002\u000297\u0003\u0002\u0002\u000298\u0003\u0002",
    "\u0002\u0002:\u0005\u0003\u0002\u0002\u0002;<\u0005\b\u0005\u0002<=",
    "\u0007\u0011\u0002\u0002=>\u0005\n\u0006\u0002>?\u0007\u0012\u0002\u0002",
    "?\u0007\u0003\u0002\u0002\u0002@A\u0007\u0010\u0002\u0002A\t\u0003\u0002",
    "\u0002\u0002BC\t\u0002\u0002\u0002C\u000b\u0003\u0002\u0002\u0002DE",
    "\u0007\u0003\u0002\u0002EF\u0007\u0016\u0002\u0002FG\u0007\u0010\u0002",
    "\u0002GI\u0007\u0012\u0002\u0002HJ\u0005\u0006\u0004\u0002IH\u0003\u0002",
    "\u0002\u0002JK\u0003\u0002\u0002\u0002KI\u0003\u0002\u0002\u0002KL\u0003",
    "\u0002\u0002\u0002LM\u0003\u0002\u0002\u0002MN\u0007\u0017\u0002\u0002",
    "N\r\u0003\u0002\u0002\u0002OP\u0007\u0004\u0002\u0002PQ\u0007\u0016",
    "\u0002\u0002QR\u0007\u0010\u0002\u0002RT\u0007\u0012\u0002\u0002SU\u0005",
    "\u0006\u0004\u0002TS\u0003\u0002\u0002\u0002UV\u0003\u0002\u0002\u0002",
    "VT\u0003\u0002\u0002\u0002VW\u0003\u0002\u0002\u0002WX\u0003\u0002\u0002",
    "\u0002XY\u0007\u0017\u0002\u0002Y\u000f\u0003\u0002\u0002\u0002Z[\u0007",
    "\u0005\u0002\u0002[\\\u0007\u0016\u0002\u0002\\]\u0007\u0010\u0002\u0002",
    "]_\u0007\u0012\u0002\u0002^`\u0005\u0006\u0004\u0002_^\u0003\u0002\u0002",
    "\u0002`a\u0003\u0002\u0002\u0002a_\u0003\u0002\u0002\u0002ab\u0003\u0002",
    "\u0002\u0002bc\u0003\u0002\u0002\u0002cd\u0007\u0017\u0002\u0002d\u0011",
    "\u0003\u0002\u0002\u0002ef\u0007\u0006\u0002\u0002fg\u0007\u0016\u0002",
    "\u0002gh\u0007\u0010\u0002\u0002hj\u0007\u0012\u0002\u0002ik\u0005\u0006",
    "\u0004\u0002ji\u0003\u0002\u0002\u0002kl\u0003\u0002\u0002\u0002lj\u0003",
    "\u0002\u0002\u0002lm\u0003\u0002\u0002\u0002mn\u0003\u0002\u0002\u0002",
    "no\u0007\u0017\u0002\u0002o\u0013\u0003\u0002\u0002\u0002pq\u0007\u0007",
    "\u0002\u0002qr\u0007\u0016\u0002\u0002rs\u0007\u0010\u0002\u0002su\u0007",
    "\u0012\u0002\u0002tv\u0005\u0006\u0004\u0002ut\u0003\u0002\u0002\u0002",
    "vw\u0003\u0002\u0002\u0002wu\u0003\u0002\u0002\u0002wx\u0003\u0002\u0002",
    "\u0002xy\u0003\u0002\u0002\u0002yz\u0007\u0017\u0002\u0002z\u0015\u0003",
    "\u0002\u0002\u0002{|\u0007\b\u0002\u0002|}\u0007\u0016\u0002\u0002}",
    "~\u0007\u0010\u0002\u0002~\u0080\u0007\u0012\u0002\u0002\u007f\u0081",
    "\u0005\u0006\u0004\u0002\u0080\u007f\u0003\u0002\u0002\u0002\u0081\u0082",
    "\u0003\u0002\u0002\u0002\u0082\u0080\u0003\u0002\u0002\u0002\u0082\u0083",
    "\u0003\u0002\u0002\u0002\u0083\u0084\u0003\u0002\u0002\u0002\u0084\u0085",
    "\u0007\u0017\u0002\u0002\u0085\u0017\u0003\u0002\u0002\u0002\u0086\u0087",
    "\u0007\t\u0002\u0002\u0087\u0088\u0007\u0016\u0002\u0002\u0088\u0089",
    "\u0007\u0010\u0002\u0002\u0089\u008b\u0007\u0012\u0002\u0002\u008a\u008c",
    "\u0005\u0006\u0004\u0002\u008b\u008a\u0003\u0002\u0002\u0002\u008c\u008d",
    "\u0003\u0002\u0002\u0002\u008d\u008b\u0003\u0002\u0002\u0002\u008d\u008e",
    "\u0003\u0002\u0002\u0002\u008e\u008f\u0003\u0002\u0002\u0002\u008f\u0090",
    "\u0007\u0017\u0002\u0002\u0090\u0019\u0003\u0002\u0002\u0002\u0091\u0092",
    "\u0007\n\u0002\u0002\u0092\u0093\u0007\u0016\u0002\u0002\u0093\u0094",
    "\u0007\u0010\u0002\u0002\u0094\u0096\u0007\u0012\u0002\u0002\u0095\u0097",
    "\u0005\u0006\u0004\u0002\u0096\u0095\u0003\u0002\u0002\u0002\u0097\u0098",
    "\u0003\u0002\u0002\u0002\u0098\u0096\u0003\u0002\u0002\u0002\u0098\u0099",
    "\u0003\u0002\u0002\u0002\u0099\u009a\u0003\u0002\u0002\u0002\u009a\u009b",
    "\u0007\u0017\u0002\u0002\u009b\u001b\u0003\u0002\u0002\u0002\u009c\u009d",
    "\u0007\u000b\u0002\u0002\u009d\u009e\u0007\u0016\u0002\u0002\u009e\u009f",
    "\u0007\u0010\u0002\u0002\u009f\u00a1\u0007\u0012\u0002\u0002\u00a0\u00a2",
    "\u0005\u0006\u0004\u0002\u00a1\u00a0\u0003\u0002\u0002\u0002\u00a2\u00a3",
    "\u0003\u0002\u0002\u0002\u00a3\u00a1\u0003\u0002\u0002\u0002\u00a3\u00a4",
    "\u0003\u0002\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002\u0002\u00a5\u00a6",
    "\u0007\u0017\u0002\u0002\u00a6\u001d\u0003\u0002\u0002\u0002\u00a7\u00a8",
    "\u0007\f\u0002\u0002\u00a8\u00a9\u0007\u0016\u0002\u0002\u00a9\u00aa",
    "\u0007\u0010\u0002\u0002\u00aa\u00ac\u0007\u0012\u0002\u0002\u00ab\u00ad",
    "\u0005\u0006\u0004\u0002\u00ac\u00ab\u0003\u0002\u0002\u0002\u00ad\u00ae",
    "\u0003\u0002\u0002\u0002\u00ae\u00ac\u0003\u0002\u0002\u0002\u00ae\u00af",
    "\u0003\u0002\u0002\u0002\u00af\u00b0\u0003\u0002\u0002\u0002\u00b0\u00b1",
    "\u0007\u0017\u0002\u0002\u00b1\u001f\u0003\u0002\u0002\u0002\u00b2\u00b3",
    "\u0007\r\u0002\u0002\u00b3\u00b4\u0007\u0016\u0002\u0002\u00b4\u00b5",
    "\u0007\u0010\u0002\u0002\u00b5\u00b7\u0007\u0012\u0002\u0002\u00b6\u00b8",
    "\u0005\u0006\u0004\u0002\u00b7\u00b6\u0003\u0002\u0002\u0002\u00b8\u00b9",
    "\u0003\u0002\u0002\u0002\u00b9\u00b7\u0003\u0002\u0002\u0002\u00b9\u00ba",
    "\u0003\u0002\u0002\u0002\u00ba\u00bb\u0003\u0002\u0002\u0002\u00bb\u00bc",
    "\u0007\u0017\u0002\u0002\u00bc!\u0003\u0002\u0002\u0002\u00bd\u00be",
    "\u0007\u000e\u0002\u0002\u00be\u00bf\u0007\u0016\u0002\u0002\u00bf\u00c0",
    "\u0007\u0010\u0002\u0002\u00c0\u00c2\u0007\u0012\u0002\u0002\u00c1\u00c3",
    "\u0005\u0006\u0004\u0002\u00c2\u00c1\u0003\u0002\u0002\u0002\u00c3\u00c4",
    "\u0003\u0002\u0002\u0002\u00c4\u00c2\u0003\u0002\u0002\u0002\u00c4\u00c5",
    "\u0003\u0002\u0002\u0002\u00c5\u00c6\u0003\u0002\u0002\u0002\u00c6\u00c7",
    "\u0007\u0017\u0002\u0002\u00c7#\u0003\u0002\u0002\u0002\u00c8\u00c9",
    "\u0007\u000f\u0002\u0002\u00c9\u00ca\u0007\u0016\u0002\u0002\u00ca\u00cb",
    "\u0007\u0010\u0002\u0002\u00cb\u00cd\u0007\u0012\u0002\u0002\u00cc\u00ce",
    "\u0005\u0006\u0004\u0002\u00cd\u00cc\u0003\u0002\u0002\u0002\u00ce\u00cf",
    "\u0003\u0002\u0002\u0002\u00cf\u00cd\u0003\u0002\u0002\u0002\u00cf\u00d0",
    "\u0003\u0002\u0002\u0002\u00d0\u00d1\u0003\u0002\u0002\u0002\u00d1\u00d2",
    "\u0007\u0017\u0002\u0002\u00d2%\u0003\u0002\u0002\u0002\u0011)9KVal",
    "w\u0082\u008d\u0098\u00a3\u00ae\u00b9\u00c4\u00cf"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class BibTeX extends antlr4.Parser {

    static grammarFileName = "BibTeX.g4";
    static literalNames = [ null, "'@article'", "'@book'", "'@booklet'", 
                            "'@inbook'", "'@incollection'", "'@inproceedings'", 
                            "'@proceedings'", "'@manual'", "'@mastersthesis'", 
                            "'@phdthesis'", "'@misc'", "'@techreport'", 
                            "'@unpublished'", null, "'='", "','", "'\"'", 
                            "'('", "')'", "'{'", "'}'" ];
    static symbolicNames = [ null, "ARTICLE", "BOOK", "BOOKLET", "INBOOK", 
                             "INCOLLECTION", "INPROCEEDINGS", "PROCEEDINGS", 
                             "MANUAL", "MASTERTHESIS", "PHDTHESIS", "MISC", 
                             "TECHREPORT", "UNPUBLISHED", "IDENTIFIER", 
                             "EQ", "COMMA", "DQUOTE", "LPAREN", "RPAREN", 
                             "LBRACE", "RBRACE", "STRING_LITERAL", "INTEGER_LITERAL", 
                             "WS", "LINE_COMMENT" ];
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
BibTeX.STRING_LITERAL = 22;
BibTeX.INTEGER_LITERAL = 23;
BibTeX.WS = 24;
BibTeX.LINE_COMMENT = 25;

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
