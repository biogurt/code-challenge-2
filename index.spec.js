require("mocha");
const { expect } = require("chai");
const Robot = require("./index");

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
    });

    describe("rotateCW", () => {
        it("should rotate 45° when called once", () => {
            const robot = new Robot("W");
            robot.rotateCW();
            expect(robot.getDirection()).to.equal("NW");

        });
        it("should rotate 90° when called twice", () => {
            const robot = new Robot("W");
            robot.rotateCW();
            robot.rotateCW();
            expect(robot.getDirection()).to.equal("N");
        });
    });

    describe("rotateCCW", () => {
        it("should rotate -45° when called once", () => {
            const robot = new Robot("NE");
            robot.rotateCCW();
            expect(robot.getDirection()).to.equal("N");
        });
        it("should rotate -90° when called twice", () => {
            const robot = new Robot("NE");
            robot.rotateCCW();
            robot.rotateCCW();
            expect(robot.getDirection()).to.equal("NW");
        });
    });
});
