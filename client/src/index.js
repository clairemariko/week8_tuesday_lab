
var Country = require('./bucketlist_modles/country.js');

populateDropDown= function(array, dropDown){
  
  array.forEach(function(country){
    // console.log(country)
    var option = document.createElement("option");
    option.innerText = country.name
    option.value = country;
    console.log(option.value)
    dropDown.appendChild(option)
  });


}


createCountry = function(constructorFunction, country){
  var country = new Country(country.object.name, country.object.capital, country.object.currency, country.object.region, country.object.latlng);
  return country;
}

window.onload = function(){

 
  console.log('hello app');

  var url = 'https://restcountries.eu/rest/v1/all'
  var request = new XMLHttpRequest();
  request.open('GET', url)
  request.onload = function(){
    if(request.status === 200)
    console.log('we have connection');
    var countries = JSON.parse(request.responseText)
    // console.log(countries)
    // countries.forEach(function(country){
    //   console.log(country)
    // })
  
    var dropDown1=document.getElementById("dropDown1")
    var dropDown2=document.getElementById("dropDown2")
    var dropDown3=document.getElementById("dropDown3")
    var dropDown4=document.getElementById("dropDown4")
    var dropDown5=document.getElementById("dropDown5")

    populateDropDown(countries, dropDown1);
    populateDropDown(countries, dropDown2);
    populateDropDown(countries, dropDown3);
    populateDropDown(countries, dropDown4);
    populateDropDown(countries, dropDown5);
    
    var form = document.getElementById("countrySelection")
    form.onsubmit = function(event){
      event.preventDefault();

      // var country = createCountry(Country, document.getElementById("dropDown1").value )
      // console.log(country)
      var country = document.getElementById("dropDown1").value
      console.log(country.name)
      var countrySelections = {
        country1: document.getElementById("dropDown1").value,
        country2: document.getElementById("dropDown2").value,
        country3: document.getElementById("dropDown3").value,
        country4: document.getElementById("dropDown4").value,
        country5: document.getElementById("dropDown5").value
      };

      console.log(countrySelections)
    }
  



  }
request.send(null)


};