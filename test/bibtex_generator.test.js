import {expect} from "chai";
import {parseBibToJSON} from "../src/bibtex_generator";



describe('Generator', function () {
    describe('#parseToJSON(bib)', function () {
        it('should a correct JSON string', function () {
            expect(parseBibToJSON(true)).to.equal(true);
        });
    });
});