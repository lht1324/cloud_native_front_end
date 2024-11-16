function getIntList(length) {
    return [...Array.from({length: length}, (v, i) => i)];
}

if (!Array.prototype.sum) {
    Array.prototype.sum = function () {
        return this.reduce((acc, cur) => { return acc + cur }, 0)
    }
}

export {getIntList};