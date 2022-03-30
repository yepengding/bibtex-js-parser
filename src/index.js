import {parse} from "./bibtex_parser";
import {parseBibToJSON} from "./bibtex_generator";

export const parseToJSON = (input) => {
    const bib = parse(input);
    return parseBibToJSON(bib);
}

