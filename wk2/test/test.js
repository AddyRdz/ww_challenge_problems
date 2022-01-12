/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***********************/

var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var reverseOddRange = tryRequire('../problems/1_reverse_odd_range.js');
var isSquare = tryRequire('../problems/2_is_square.js');
var separateNames = tryRequire('../problems/3_separate_names.js');


describe('reverseOddRange()', function () {
  it('should return an array of odd numbers between "start" and "end" in reverse order', function () {
    assert.deepEqual(reverseOddRange(10, 20), [ 19, 17, 15, 13, 11 ]);
    assert.deepEqual(reverseOddRange(3, 7), [ 7, 5, 3 ]);
  });

  it('should return an empty array if there are no numbers in the given range', function () {
    assert.deepEqual(reverseOddRange(9, 5), []);
  });
});

describe('isSquare()', function () {
  it('should return a boolean indicating whether or not a number is a perfect square', function () {
    assert.equal(isSquare(7), false);
    assert.equal(isSquare(15), false);
    assert.equal(isSquare(18), false);
    assert.equal(isSquare(25), true);
    assert.equal(isSquare(100), true);
  });
});

describe('separateNames()', function () {
  it('should return an array containing two strings (the first and last name) with the first characters capitalizied', function () {
    assert.deepEqual(separateNames("john doe"), [ "John", "Doe" ]);
    assert.deepEqual(separateNames("ryan lugtu"), [ "Ryan","Lugtu" ]);
  });
});


