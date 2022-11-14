let I = 1;
let V = I*5; //5
let X = V*2; //10
let L = X*5; //50
let C = L*2; //100
let D = C*5; //500
let M = D*2; //1000

let IV = V-I; //4
let IX = X-I; //9
let XL = L-X; //40
let XC = C-X; //90
let CD = D-C; //400
let CM = M-C; //900

let arr = [
{"I": 1},
{"V": 5},
{"X": 10},
{"L": 50},
{"C": 100},
{"D": 500},
{"M": 1000},
{"IV": 4},
{"IX": 9},
{"XL": 40},
{"XC": 90},
{"CD": 400},
{"CM": 900}
]




let num = "MXCV";
let splitted = num.split("");
let converted = [];
for(let i=0; i<splitted.length; i++){
  console.log(splitted[i]);
  console.log(parseInt(splitted[i]));
  
  
}
// console.log(converted);