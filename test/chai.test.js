//chai testing
const math = require('../src/math');
const expect = require('chai').expect;

describe('Math Operations', () => {
  it('should add 1 + 2 to equal 3', () => {
    expect(math.add(1, 2)).to.equal(3);
  });

  it('should subtract 5 - 3 to equal 2', () => {
    expect(math.subtract(5, 3)).to.equal(2);
  });
});
