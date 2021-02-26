/** Use */
const props = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 15];

console.log('findKey(5, props): ', findKey(11, props));

/** Function */
function findKey(value, array) {
    let keyStart = 0;
    let keyEnd = array.length - 1;

    while (keyStart <= keyEnd) {
        let keyMiddle = Math.round((keyEnd - keyStart) / 2) + keyStart;

        if (value == array[keyMiddle]) {
            return keyMiddle;
        } else if (value < array[keyMiddle]) {
            keyEnd = keyMiddle - 1;
        } else {
            keyStart = keyMiddle + 1;
        }
    }

    return -1;
}

/** Prototype */
Array.prototype.findKey = function (value) {
    let keyStart = 0;
    let keyEnd = this.length - 1;

    while (keyStart <= keyEnd) {
        let keyMiddle = Math.round((keyEnd - keyStart) / 2) + keyStart;

        if (value == this[keyMiddle]) {
            return keyMiddle;
        } else if (value < this[keyMiddle]) {
            keyEnd = keyMiddle - 1;
        } else {
            keyStart = keyMiddle + 1;
        }
    }

    return -1;
};
console.dir(Array.prototype);
console.dir(props.__proto__);
console.log('props.findKey(7): ', props.findKey(7));
