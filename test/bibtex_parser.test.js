import {expect} from "chai";
import {parse} from "../src/bibtex_parser"
import {MyPublications} from "./inputs";

const bib = parse(MyPublications)
console.log(bib.entries[0])

describe('Parser', function () {
    describe('#parse(input)', function () {
        it('should return a correct bib object', function () {
            const bib = parse(MyPublications);
            const entry0 = bib.entries[0];
            expect(entry0.type).to.equal("inproceedings");
            expect(entry0.id).to.equal("ding_derepo_2020");
            expect(entry0.fields[0].value).to.equal("Derepo: a distributed privacy-preserving data repository with decentralized access control for smart health");
        });
    });
});