import BibTeXVisitor from "../base/BibTeXVisitor";
import FieldVisitor from "./field_visitor";
import {EntryType} from "./type";

/**
 * Entry Visitor
 *
 * @author Yepeng Ding
 */
export default class EntryVisitor extends BibTeXVisitor {

    #fieldVisitor = new FieldVisitor();

    visitArticle(ctx) {
        return this.#newEntry(EntryType.ARTICLE, ctx);
    }

    visitBook(ctx) {
        return this.#newEntry(EntryType.BOOK, ctx);
    }

    visitBooklet(ctx) {
        return this.#newEntry(EntryType.BOOKLET, ctx);
    }

    visitInbook(ctx) {
        return this.#newEntry(EntryType.INBOOK, ctx);
    }

    visitIncollection(ctx) {
        return this.#newEntry(EntryType.INCOLLECTION, ctx);
    }

    visitInproceedings(ctx) {
        return this.#newEntry(EntryType.INPROCEEDINGS, ctx);
    }

    visitProceedings(ctx) {
        return this.#newEntry(EntryType.PROCEEDINGS, ctx);
    }

    visitManual(ctx) {
        return this.#newEntry(EntryType.MANUAL, ctx);
    }

    visitMastersthesis(ctx) {
        return this.#newEntry(EntryType.MASTERTHESIS, ctx);
    }

    visitPhdthesis(ctx) {
        return this.#newEntry(EntryType.PHDTHESIS, ctx);
    }

    visitMisc(ctx) {
        return this.#newEntry(EntryType.MISC, ctx);
    }

    visitTechreport(ctx) {
        return this.#newEntry(EntryType.TECHREPORT, ctx);
    }

    visitUnpublished(ctx) {
        return this.#newEntry(EntryType.UNPUBLISHED, ctx);
    }

    #newEntry(type, ctx) {
        return {
            type: type,
            id: ctx.IDENTIFIER().getText(),
            raw: ctx.start.getInputStream().getText(ctx.start.start, ctx.stop.stop),
            fields: ctx.field().map(field => field.accept(this.#fieldVisitor))
        }
    }
}