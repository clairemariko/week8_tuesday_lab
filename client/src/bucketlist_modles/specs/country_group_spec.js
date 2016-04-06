var assert = require('chai').assert;
var CountryGroup = require('../country_group.js')
var Country = require('../country.js')

var countryGroup1 = new CountryGroup ("Europe")
var country1 = new Country("Norway", "Oslo", "Europe", "krone", [62, 10])
var country2 = new Country("Hungary", "Budapest", "Europe", "forint", [47,20])

describe("countryGroup", function(){
  it("should have a name", function(){
  assert.equal("Europe", countryGroup1.name)
});

  it("should have an emptry country collection", function(){
    assert.deepEqual([], countryGroup1.countryCollection)
  });
  it("should be able to add one country to its collection", function(){
    countryGroup1.addCountry(country1)
    assert.deepEqual([country1], countryGroup1.countryCollection)
  });
  it("should be able to hold two countries in its collection", function(){
    countryGroup1.addCountry(country2)
    assert.deepEqual([country1, country2], countryGroup1.countryCollection)
  });
  it("should be able to return country object by country's name", function(){
    assert.deepEqual(country1, countryGroup1.searchFor("Norway"))
  });


})