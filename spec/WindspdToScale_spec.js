import {WindspdToScale} from "../WindspdToScale.js";

describe("test WindspdToScale()", function() {
    it("test speed = 1", function() {
        let speed = 1;
        let desc = WindspdToScale(speed);
        expect(desc).toBe("Calm");
    });
    it("test speed = 97", function() {
        let speed = 97;
        let desc = WindspdToScale(speed);
        expect(desc).toBe("Invalid");
    });
    it("test speed = 37", function() {
        let speed = 37;
        let desc = WindspdToScale(speed);
        expect(desc).toBe("Near Gale");
    });
});