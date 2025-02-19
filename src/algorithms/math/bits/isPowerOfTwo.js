/**
 * @param {number} number
 * @return {boolean}
 */
export default function isPowerOfTwo(number) {
  // 1 (2^0) is the smallest power of two.
  if (number < 1) {
    return false;
  }
  /*
   * Powers of two in binary look like this:
   * 1: 0001
   * 2: 0010
   * 4: 0100
   * 8: 1000
   *
   * Note that there is always exactly 1 bit set. The only exception is with a signed integer.
   * e.g. An 8-bit signed integer with a value of -128 looks like:
   * 10000000
   *
   * So after checking that the number is greater than zero, we can use a clever little bit
   * hack to test that one and only one bit is set.
   *
   * For example for number `8` the operations will look like:
   *
   *   1000
   * - 0001
   *   ----
   *   0111
   *
   *   1000
   * & 0111
   *   ----
   *   0000
   *
   * References: http://www.graphics.stanford.edu/~seander/bithacks.html#DetermineIfPowerOf2
   */
  return (number & (number - 1)) === 0;
}
