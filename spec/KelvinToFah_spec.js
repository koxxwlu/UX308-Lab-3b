import {KelvinToFah} from "../KelvinToFah.js";

describe("test KelvinToFah()", function() {
    it("test 100 kelvin", function() {
        let kelvin = 100;
        let fah = KelvinToFah(kelvin);
        expect(fah.toFixed(2)).toBe("-279.67");
    });
});