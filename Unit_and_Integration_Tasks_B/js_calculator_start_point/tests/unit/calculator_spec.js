var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })
  it("can add 2 numbers together", function () {
    calculator.previousTotal = 1
    calculator.add(4)
    assert.equal(calculator.runningTotal, 5)
  })
  it("can subtract 4 from 7 and get 3", function () {
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.equal(calculator.runningTotal, 3)
  })
  it("can multiply 3 by 5 and get 15", function () {
    calculator.previousTotal = 3
    calculator.multiply(5)
    assert.equal(calculator.runningTotal, 15)
  })
  it("can divide 21 by 3 and get 7", function () {
    calculator.previousTotal = 21
    calculator.divide(3)
    assert.equal(calculator.runningTotal, 7)
  })

  it("can concatenate multiple number button clicks", function () {
    calculator.numberClick(1)
    calculator.numberClick(2)
    calculator.numberClick(4)
    calculator.numberClick(5)
    calculator.numberClick(3)
    assert.equal(calculator.runningTotal, 12453)
  })

  it("can chain multiple operations together", function () {
    calculator.numberClick(1)
    calculator.operatorClick("+")
    calculator.numberClick(4)
    calculator.operatorClick("*")
    calculator.numberClick(3)
    calculator.operatorClick("/")
    calculator.numberClick(2)
    calculator.operatorClick("=")
    assert.equal(calculator.runningTotal, 7.5)
  })

  it("can clear the running total without affecting the calculation", function() {
    calculator.numberClick(4)
    calculator.operatorClick("*")
    calculator.numberClick(3)
    calculator.clearClick()
    assert.equal(calculator.runningTotal, 0)
    assert.equal(calculator.previousTotal, 4)
  })
});
