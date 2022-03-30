import {expect} from "chai";
import {parseBibToJSON} from "../src/bibtex_generator";
import {MyPublicationsBib} from "./inputs";


describe('Generator', function () {
    describe('#parseToJSON(bib)', function () {
        it('should a correct JSON', function () {
            const bibJSON = parseBibToJSON(MyPublicationsBib)
            expect(bibJSON[0]['id']).to.equal("ding_dagbase_2020");
            expect(bibJSON[0]['title']).to.equal("Dagbase: a decentralized database platform Using DAG-based consensus");
        });
    });
});