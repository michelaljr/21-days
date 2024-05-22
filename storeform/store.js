class User {
    username
    password

    constructor(username, password) {
    
        username = this.username;
        password = this.password;
    }
}

class Store {

    storename
    address
    openDays
    opencloseTimes

    constructor (storename, address, openDays, opencloseTimes){

    storename = this.brand;
    address = this.model;
    openDays = this.category
    opencloseTimes = this.year
    }
}

async function postUser(username, password){
    
    let stored = await fetch('api url', {
  
    method: 'POST', // *GET, POST, PUT, DELETE, etc.

    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(username, password)
  });

  if (!stored.ok){
      throw new Error("error")};
  let data = await stored.json();
  console.log(data);
  console.log("registration success")

}

function registerUser(newusername, newpassword){

    let newUser = {
        
        name: newusername,
        password: newpassword
    }

    postUser(newUser)
}


async function getUserByLogin(username, password, id) {
 
    let stored = await fetch(`api.url.${id}`);
    if(!stored.ok){
        console.log("error")};
    let data = await stored.json(username, password);
    console.log(data);
    console.log("login successful")

}


async function postStore(Store){
    
    let stored = await fetch('api url', {
  
    method: 'POST', // *GET, POST, PUT, DELETE, etc.

    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(Store)
  });

  if (!stored.ok){
      throw new Error("error")};
  let data = await stored.json();
  console.log(data);
  console.log("Store information submitted")

}

function registerStore(newstorename, newaddress, newopenDays, newopencloseTimes){

    let newStore = {
        storename: newstorename, 
        address: newaddress, 
        openDays: newopenDays, 
        opencloseTimes: newopencloseTimes
        
    }

    postStore(newStore)
}