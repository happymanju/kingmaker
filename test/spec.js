const { expect } = require("chai");
const kingmaker = require('../kingmaker.js');



describe("kingmaker", function () {
    it("should not accept non-string values for name", () => {
        const invalid = kingmaker.generateTitles.bind(null, 14);
        const valid = kingmaker.generateTitles.bind(null, "Mike");
        expect(kingmaker.generateTitles.bind((kingmaker, 14))).to.throw();
        expect(valid).to.not.throw();
    });

});