class Robot {
    constructor(direction) {
        this.validDirections = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
        if (!this._isValidDirection(direction)) {
            throw new Error("Invalid direction");
        }
        this.directionIndex = this.validDirections.indexOf(direction);
    }

    _isValidDirection(direction) {
        return direction && this.validDirections.indexOf(direction) != -1;
    }

    _setNewDirection(finalDirectionIndex) {
        if (finalDirectionIndex < 0) {
            this.directionIndex = this.validDirections.length - 1;
        } else {
            this.directionIndex = finalDirectionIndex % this.validDirections.length;
        }
    }

    _simulateRealRotation(finalDirectionIndex) {
        setTimeout(() => {
            this._setNewDirection(finalDirectionIndex);
        }, 200);
    }

    getDirection() {
        return this.validDirections[this.directionIndex];
    }

    rotateCW() {
        this._simulateRealRotation(this.directionIndex + 1);
    }

    rotateCCW() {
        this._simulateRealRotation(this.directionIndex - 1);
    }
}

module.exports = Robot;
