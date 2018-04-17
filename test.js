
const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');
const calculateDistancePoints = require('./calculateDistancePoints');


describe('Jumper', () => {

   it('ABC', () => {
    const actual = calculateStylePoints(19.5,19.5,19.5,19.5,19.0);
    const expected = 58.5;
    assert.equal(actual,expected);
  });

  it('should return zero, when there is lack of arguments', ()=>{
   const actual = calculateStylePoints(19.5,19.5,19.5,19.0);
    const expected = 0;
    assert.equal(actual,expected);
  })
 });

//const calculateDistancePoints = (distance, hillSize, kPoint) => {
describe('Jumper', () => {

  it('ABC', () => {
  const actual = calculateDistancePoints(135.0, 2, 125);
  const expected = 78.0;

  console.log(actual, expected);
  assert.equal(actual,expected);
 });

});
