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

module.exports.circle = function (r) {
    return 3.14 * (r * r);
};

module.exports.ellipse = function (r1, r2) {
    return 3.14 * r1 * r2;
};

module.exports.triangle = function (b, h) {
    return 1/2 * (b * h);
};