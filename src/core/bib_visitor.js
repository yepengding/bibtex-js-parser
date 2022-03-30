import BibTeXVisitor from "../base/BibTeXVisitor";
import EntryVisitor from "./entry_visitor";

/**
 * Bib Visitor
 *
 * @author Yepeng Ding
 */
export default class BibVisitor extends BibTeXVisitor {

    #entryVisitor = new EntryVisitor();

    #bib = {
        entries: []
    }

    visitEntry(ctx) {
        const entry = ctx.accept(this.#entryVisitor);
        this.#bib.entries.push(...entry)
        return super.visitEntry(ctx);
    }

    get bib() {
        return this.#bib;
    }
}