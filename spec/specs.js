describe('typeOfTriangle', function() {
  it("is equalaterial for all sides even", function() {
    expect(typeOfTriangle(4, 4, 4)).to.equal("n equalateral");
  });
  it("is scalene for 2 sides even", function() {
    expect(typeOfTriangle(2, 2, 4)).to.equal(" scalene");
  });
  it("is isosceles for no sides even", function() {
    expect(typeOfTriangle(2, 3, 4)).to.equal("n isosceles");
  });

});

//removed functions
/*
describe('isTriangle', function() {
  it("it is true when all sides are even", function() {
    expect(isTriangle(4, 4, 4)).to.equal(true);
  });

});
describe('isEqual', function() {
  it("it is true when all sides are even", function() {
    expect(isEqual(4, 4, 4)).to.equal(true);
  });

});
*/
