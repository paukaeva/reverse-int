module.exports = function reverse (n) {
  if (n < 0) return ((n * -1).toString().split('').reverse().join('')) * 1
  if (n > 0) return (n.toString().split('').reverse().join('')) * 1
}
