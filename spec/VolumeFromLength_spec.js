import {VolumeFromLength} from "../VolumeFromLength.js";

describe("test VolumeFromLength()", function() {
    it("test triangle side of 5(cm) and height of 12(cm)", function() {
        let triangleLength = 5;
        let height = 12;
        let volume = VolumeFromLength(triangleLength, height);
        expect(volume.toFixed(1)).toBe("129.9");
    });
    it("test triangle side of 72(cm) and height of 3(cm)", function() {
        let triangleLength = 72;
        let height = 3;
        let volume = VolumeFromLength(triangleLength, height);
        expect(volume.toFixed(1)).toBe("6734.2");
    });
});