//Get all the countries from Asia continent /region using Filter function

  const req = new XMLHttpRequest();

  req.open("GET", "https://restcountries.com/v3.1/all", true);
  req.send();
  req.onload = function ()   {
    const countryInfo = JSON.parse(this.response);
    console.log("Countries from Asia:", countryInfo.filter(country => country.region === 'Asia'))

//Get all the countries with a population of less than 2 lakhs using Filter function


console.log("Countries less than 2 Lakhs population:", countryInfo.filter(country => country.population < 200000))


//Print the following details name, capital, flag, using forEach function

countryInfo.forEach(country => {

    console.log("Name:", country.name.common);
    console.log("Capital", country.capital);
    console.log("Flag", country.flag);    
})

//Print the total population of countries using reduce function

const overallpop = countryInfo.reduce((acc, country) => acc + country.population, 0)

console.log("The total population of countries:", overallpop);

};