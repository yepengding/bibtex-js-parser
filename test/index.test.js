import {expect} from "chai";
import {parseToJSON, parseToJSONString} from "../src/index"
import {MyPublications} from "./inputs";

describe('Index', function () {
    describe('#parseToJSON(input)', function () {
        it('should return a correct JSON object', function () {
            const bibJSON = parseToJSON(MyPublications);
            expect(bibJSON[1]['id']).to.equal("ding_dagbase_2020");
            expect(bibJSON[1]['title']).to.equal("Dagbase: a decentralized database platform Using DAG-based consensus");
        });
    });

    describe('#parseToJSONString(input)', function () {
        it('should return a correct JSON string', function () {
            const bibJSONString = parseToJSONString(MyPublications);
            const bibJSON = JSON.parse(bibJSONString);
            expect(bibJSON[1]['id']).to.equal("ding_dagbase_2020");
            expect(bibJSON[1]['title']).to.equal("Dagbase: a decentralized database platform Using DAG-based consensus");
        });
    });
});