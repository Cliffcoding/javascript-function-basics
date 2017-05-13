module.exports = {};

module.exports.sum = function (a, b) {
    return a + b;
};

module.exports.difference = function (a, b) {
    return a - b;
};

module.exports.product = function (a, b) {
    return a * b;
};

module.exports.quotient = function (a, b) {
    return a / b;
};

module.exports.rectangle = function (a, b) {
    return a * b;
};

module.exports.square = function (a) {
    return a * a;
};

module.exports.trapezoid = function (h, b1, b2) {
    return h/2 * (b1 + b2);
};