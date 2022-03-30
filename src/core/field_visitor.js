import BibTeXVisitor from "../base/BibTeXVisitor";
import {ValueType} from "./type";

/**
 * Field Visitor
 *
 * @author Yepeng Ding
 */
export default class FieldVisitor extends BibTeXVisitor {

    visitField(ctx) {
        // Get key
        const key = ctx.key().IDENTIFIER().getText();

        // Set value and value type
        if (ctx.value().STRING_LITERAL()) {
            // String literal
            let value = ctx.value().STRING_LITERAL().getText();
            value = value.substring(1, value.length - 1);
            return FieldVisitor.#newField(key, value, ValueType.STRING);
        } else if (ctx.value().INTEGER_LITERAL()) {
            // Integer literal
            return FieldVisitor.#newField(key, parseInt(ctx.value().INTEGER_LITERAL().getText()), ValueType.INTEGER)
        } else {
            throw new Error(`The type of field ${key} value is not supported.`)
        }
    }

    static #newField(key, value, type) {
        return {
            key: key,
            value: value,
            type: type
        }
    }
}