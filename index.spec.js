require("mocha");
const { expect } = require("chai");
const Robot = require("./index");

//
//  cardinal directions
// 
//           N     
//      NW   |   NE
//         \ | /
//    W - - -x- - - E      
//         / | \   
//      SW   |   SE     
//           S
//

describe("Robot", () => {

    describe("constructor", () => {
        it("should throw when direction is null", () => {
            expect(() => {
                new Robot(null);
              }).to.throw();
        });
        it("should throw when direction is invalid", () => {
            expect(() => {
                new Robot("invalid...");
              }).to.throw();
        });
        it("should set simulateRotation to false by default", () => {
            const robot = new Robot("N");
            expect(robot.simulateRotation).to.be.false;
        });
        it("should set simulateRotation to false when anything other than a boolean is passed", () => {
            const robot = new Robot("N", [1, 2, 3]);
            expect(robot.simulateRotation).to.be.false;
        });
        it("should set simulateRotation to true when 'true' is passed", () => {
            const robot = new Robot("N", true);
            expect(robot.simulateRotation).to.be.true;
        });
    });

    describe("Instant rotation", () => {
        const simulateRotation = false;

        describe("rotate clockwise", () => {
            it("should rotate 45° when called once", () => {
                const robot = new Robot("W", simulateRotation);
                robot.rotateCW();
                expect(robot.getDirection()).to.equal("NW");
            });
            it("should rotate 90° when called twice", () => {
                const robot = new Robot("W", simulateRotation);
                robot.rotateCW();
                robot.rotateCW();
                expect(robot.getDirection()).to.equal("N");
            });
        });

        describe("rotate counter-clockwise", () => {
            it("should rotate -45° when called once", () => {
                const robot = new Robot("NE", simulateRotation);
                robot.rotateCCW();
                expect(robot.getDirection()).to.equal("N");
            });
            it("should rotate -90° when called twice", () => {
                const robot = new Robot("NE", simulateRotation);
                robot.rotateCCW();
                robot.rotateCCW();
                expect(robot.getDirection()).to.equal("NW");
            });
        });
    });

    // describe("Simulated rotation", () => {
    //     const simulateRotation = true;

    //     describe("rotate clockwise", () => {
    //         it("should rotate 45° when called once", () => {
    //             const robot = new Robot("W", simulateRotation);
    //             robot.rotateCW();
    //             expect(robot.getDirection()).to.equal("NW");
    //         });
    //         it("should rotate 90° when called twice", () => {
    //             const robot = new Robot("W", simulateRotation);
    //             robot.rotateCW();
    //             robot.rotateCW();
    //             expect(robot.getDirection()).to.equal("N");
    //         });
    //     });

    //     describe("rotate counter-clockwise", () => {
    //         it("should rotate -45° when called once", () => {
    //             const robot = new Robot("NE", simulateRotation);
    //             robot.rotateCCW();
    //             expect(robot.getDirection()).to.equal("N");
    //         });
    //         it("should rotate -90° when called twice", () => {
    //             const robot = new Robot("NE", simulateRotation);
    //             robot.rotateCCW();
    //             robot.rotateCCW();
    //             expect(robot.getDirection()).to.equal("NW");
    //         });
    //     });
    // });
});
