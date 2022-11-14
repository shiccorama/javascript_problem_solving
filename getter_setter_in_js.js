// Only change code below this line
class Thermostat{
  constructor(Fahrenheit){
    this._Fahrenheit = Fahrenheit;
  }
  get temperature(){
    const Celsius = (5/9)*(this._Fahrenheit - 32);
    return Celsius;
  }

  set temperature(updateCelsius){
    this._Fahrenheit = (updateCelsius*(9/5)) + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26; // set temp to 26
temp = thermos.temperature; // 26 in Celsius

const u = new Thermostat(75);
// console.log(u);
let x = u.temperature;
console.log(x);
u.temperature  = 44;
x = u.temperature;
console.log(x);