const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Only change code below this line
  let count = 0;

  for(let user in usersObj){
	  
	  //   note here : usersObj[user] to access first object, then you can use dot notation after that :
    if(usersObj[user].online === true){
      count = count + 1;
    }else{
      count;
    }
  }
  return count;

  // Only change code above this line
}

console.log(countOnline(users));