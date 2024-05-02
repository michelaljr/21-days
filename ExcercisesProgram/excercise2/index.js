let hungry = prompt("hungry? yes/no")
let gotMoney = prompt("got money? yes/no")
let restrauntOpen = prompt("restraunt open? yes/no")

 if ( hungry === "yes" && gotMoney === "yes" && restrauntOpen === "yes"){
    console.log("eat at your desired restraunt");
} else if ( hungry === "yes" && gotMoney === "yes" && restrauntOpen === "no") {
console.log("order online")
}   else {console.log("eat at home")}
