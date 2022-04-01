import {parse} from "./bibtex_parser";
import {parseBibToJSON} from "./bibtex_generator";

/**
 * Parse BibTeX string to JSON object
 *
 * @param input BibTeX string
 * @returns {*} BibTeX JSON object
 */
export const parseToJSON = (input) => {
    const bib = parse(input);
    return parseBibToJSON(bib);
}

/**
 * Parse BibTeX string to JSON string
 *
 * @param input BibTeX string
 * @returns {string} BibTeX JSON string without raw texts
 */
export const parseToJSONString = (input) => {
    const bib = parse(input);
    bib.entries.forEach(entry => delete entry.raw);
    return JSON.stringify(parseBibToJSON(bib));
}
