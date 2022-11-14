function titleCase(str) {
  let arr,newArr = [];
  let x,y,z,w,i,result;
  
  arr = (str.toLowerCase()).split(" ");

  for(x=0; x<arr.length; x++) {
    y = arr[x].charAt(0);
    z = y.toUpperCase();
    console.log(z);
    w = arr[x].slice(1);
    i = z + w;
    console.log(i);
    newArr.push(i);
  }

  console.log(newArr);

  result = newArr.join(" ");
  console.log(result);
  return result;

}

titleCase("top gun");

//________ this solution's similar to mine ________
function titleCase(str) {
  const newTitle = str.split(" ");
  const updatedTitle = [];
  for (let st in newTitle) {
    updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
  }
  return updatedTitle.join(" ");
}

// ____________ using map && replace functions ___________

function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(" ");
}

titleCase("I'm a little tea pot");

// ______ using replace function && regex ________

function titleCase(str) {
  return str
    .toLowerCase()
    .replace(/(^|\s)\S/g, L => L.toUpperCase());
}