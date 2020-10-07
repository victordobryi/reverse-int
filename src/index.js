module.exports = function reverse(n) {
    let newArr = String(n).split('').reverse().join('');
    return parseFloat(newArr);
}