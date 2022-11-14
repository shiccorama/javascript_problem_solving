function booWho(bool) {

const check = typeof(bool);
let result = (check === "boolean") ? true : false;
console.log(check);
return result;
}

booWho(0);

//____________________ another solution _________________

function booWho(bool) {
  return typeof bool === "boolean";
}

// test here
booWho(null);