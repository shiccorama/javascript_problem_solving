//my solution :

function factorialize(num) {
    let i = 1;
    let count = 1;
  if(num <= 1){
    return 1;
  }else{
    while (i<num){
      count=count*(i+1);
      i++;
      // console.log(count);
      // return count;
    }
  }
        // console.log(count);
  return count;
}

factorialize(6);

__________________________________

function factorialize(num) {
  let product = 1;
  for (let i = 2; i <= num; i++) {
    product *= i;
  }
  return product;
}

factorialize(5);

__________________________________

// Recursion :

function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

factorialize(5);

_____________________________________

// tail recursion :

function factorialize(num, factorial = 1) {
  if (num === 0) {
    return factorial;
  } else {
    return factorialize(num - 1, factorial * num);
  }
}

factorialize(5);

__________________________________

function factorialize(num) {
  return num < 0 ? 1 :
    new Array(num)
      .fill(undefined)
      .reduce((product, _, index) => product * (index + 1), 1);
}
factorialize(5);

