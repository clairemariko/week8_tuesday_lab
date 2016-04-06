var CountryGroup = function(name){
  this.name = name,
  this.countryCollection = []
};

CountryGroup.prototype={
  addCountry: function(country){
    this.countryCollection.push(country)
  },
  searchFor: function(countryName){
    for (country of this.countryCollection){
      if (country.name === countryName){
        return country
      }
    }
  }
};

module.exports = CountryGroup