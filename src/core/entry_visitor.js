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

    visitInproceedings(ctx) {
        return this.#newEntry(EntryType.INPROCEEDINGS, ctx);
    }

    #newEntry(type, ctx) {
        return {
            type: type,
            id: ctx.IDENTIFIER().getText(),
            fields: ctx.field().map(field => field.accept(this.#fieldVisitor))
        }
    }
}