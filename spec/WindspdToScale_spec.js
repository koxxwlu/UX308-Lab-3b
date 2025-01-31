import {WindspdToScale} from "../WindspdToScale.js";

describe("test WindspdToScale()", function() {
    it("test speed = 1", function() {
        let speed = 1;
        let desc = WindspdToScale(speed);
        expect(desc).toBe("Calm");
    });
});