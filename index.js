class Robot {
    constructor(direction, simulateRotation = false) {
        this.validDirections = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
        if (!this.isValidDirection(direction)) {
            throw new Error("Invalid direction");
        }
        this.directionIndex = this.validDirections.indexOf(direction);
        this.simulateRotation = typeof simulateRotation === "boolean" ? simulateRotation : false;
    }

    isValidDirection(direction) {
        return direction && this.validDirections.indexOf(direction) !== -1;
    }

    setNewDirection(finalDirectionIndex) {
        this.directionIndex = finalDirectionIndex;
    }

    simulateRealRotation(finalDirectionIndex) {
        setTimeout(() => {
            this.setNewDirection(finalDirectionIndex);
        }, 200);
    }

    rotate(finalDirectionIndex) {
        if (this.simulateRotation) {
            this.simulateRealRotation(finalDirectionIndex);
        } else {
            this.setNewDirection(finalDirectionIndex);
        }
    }

    getDirection() {
        return this.validDirections[this.directionIndex];
    }

    rotateCW() {
        this.rotate(this.directionIndex + 1);
    }

    rotateCCW() {
        this.rotate(this.directionIndex - 1);
    }
}


module.exports = Robot;
