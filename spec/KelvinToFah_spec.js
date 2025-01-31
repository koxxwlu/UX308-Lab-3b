import {KelvinToFah} from "../KelvinToFah.js";

describe("test KelvinToFah()", function() {
    it("test 100 kelvin", function() {
        let kelvin = 100;
        let fah = KelvinToFah(kelvin);
        expect(fah.toFixed(2)).toBe("-279.67");
    });
    it("test 127 kelvin", function() {
        let kelvin = 127;
        let fah = KelvinToFah(kelvin);
        expect(fah.toFixed(2)).toBe("-231.07");
    });
});