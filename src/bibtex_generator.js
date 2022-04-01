import {ValueType} from "./core/type";

/**
 * Parse bib object to JSON object
 *
 * @param bib
 * @returns {*}
 */
const parseBibToJSON = (bib) => {
    return bib.entries.map(entry => {
        const entryJSON = {
            id: entry.id,
            type: entry.type,
            raw: entry.raw
        }
        entry.fields.forEach(field => {
            if (field.type === ValueType.STRING) {
                entryJSON[field.key] = toPlainString(field.value);
            } else if (field.type === ValueType.INTEGER) {
                entryJSON[field.key] = parseInt(field.value);
            }
        })
        return entryJSON
    })

}

/**
 * Convert BibTeX string to plain string
 *
 * @param str BibTeX string
 * @returns {string} plain string
 */
const toPlainString = (str) => {
    return str.replaceAll(/[{}]/g, "").replace("\"", "\\\"");
}

export {parseBibToJSON}