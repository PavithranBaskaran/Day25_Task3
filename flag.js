// const flag = document.createElement("img");
// flag.src="https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png";
// flag.setAttribute("class","country-flag")
// // flag.width=300;
// // document.body.appendChild(flag);

// const countryName = document.createElement("h1");
// countryName.innerText = "INDIA";
// countryName.setAttribute("class","country-name")
// // document.body.appendChild(countryName);

// const population = document.createElement("p");
// population.innerText = "Population:12,23,434";
// // document.body.append(population)

// const Region = document.createElement("p");
// Region.innerText = "Region:Asia";
// // document.body.append(Region)

// const Captial = document.createElement("p");
// Captial.innerText = "Captial:New Delhi";
// // document.body.append(flag,countryName,Region,population)


// const countryContainer = document.createElement("div");
// document.body.appendChild(flag);
// const countrySpec = document.createElement("div");
// document.body.appendChild(countryName);
// document.body.append(population)
// document.body.append(Region)
let countriesInfo = [
  {
    name: "India",
    population: " 1,394,975,829",
    region: "Asia",
    flag:
      "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",
    capital: "New delhi"
  },
  {
    name: "Germany",
    population: "81,770,900",
    region: "Europe",
    flag:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
    capital: "Berlin"
  },
  {
    name: "United states",
    population: "323,947,000",
    region: "Americas",
    flag:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png",
    capital: "Washington D.C"
  },
  {
    name: "Brazil",
    population: "206,135,893",
    region: "Americas",
    flag:
      "https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png",
    capital: "Brasilia"
  },
  {
    name: "Iceland",
    population: "334,300",
    region: "Europe",
    flag:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/640px-Flag_of_Iceland.svg.png",
    capital: "Reykjavik"
  }
];
document.body.innerHTML=`<h1  style="text-align:center;">List of Countries</h1> <br>`
  
const ListCountry = document.createElement("section");
ListCountry.setAttribute("class" , "list-country")

function createCountry(countriesInfo)
{
  const container = document.createElement("div");
container.setAttribute("class" , "container")
  container.innerHTML=`
<div class="flag-img">
  <img
    src="${countriesInfo.flags.svg}"
    alt="${countriesInfo.name.common}"
  />
</div>
<div class="country-details">
  <h2 class="country-name">${countriesInfo.name.common}</h2>
  <p><span>Population:</span> ${countriesInfo.population}</p>
  <p><span>Region:</span> ${countriesInfo.region}</p>
  <p><span>Capital:</span>  ${countriesInfo.capital}</p>
</div>
`
document.body.append(container)
}

// countriesInfo.forEach(country => {
//   console.log(country);
//   createCountry(country);
// });


fetch("https://restcountries.com/v3.1/all")
.then((data) => data.json())
.then((countries) =>{
  countries.forEach(country => {
    console.log(country);
    createCountry(country);
  });
});