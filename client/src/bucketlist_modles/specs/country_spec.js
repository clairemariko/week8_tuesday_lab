var assert = require('chai').assert;
var Country = require('../country.js');


var country1 = new Country("Italy", "Rome","Europe", "Euros", [42.83333333,     12.83333333]);

describe("country", function(){

  it("should have a name", function(){
    assert.equal("Italy", country1.name);
  })
  it('should have a latlng', function(){
    assert.deepEqual([42.83333333, 12.83333333], country1.latlng)
  })
})