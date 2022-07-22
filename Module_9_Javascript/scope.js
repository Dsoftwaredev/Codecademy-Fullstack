const city = 'New York City';

const logCitySkyline = () => {
  let skyscraper = 'Empire State Building';
 return 'The stars over the ' + skyscraper + ' in ' + city;
}

console.log(logCitySkyline());

//global scope

let satellite = 'The Moon';
let galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
console.log(callMyNightSky());

const logVisibleLightWaves = () => {
    const lightWaves = 'Moonlight';
    console.log(lightWaves);
  }
  
  logVisibleLightWaves();
    console.log(lightWaves);
  