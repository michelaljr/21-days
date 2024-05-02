
names = ["mike", "thay"];
passwords = ["123", "456"];

function typeOfAction(){

return typeOfAction = prompt("would you like to" + " \n1 = register \n2 = login \n3 = delete \n4 = close program");
}

function register(){
    console.log("you chose to register");
}

function login(){
    console.log("you chose to login");

}

function deleteAccount(){
    console.log("you chose to delete account");

}

switch (typeOfAction()) {
    
    case "1":
            register();
        name = prompt("type name")
        password = prompt("type password")

        names[names.length] = name
        passwords[passwords.length] = password

        // make it ask if we want to register another name
    
console.log(names)
console.log(passwords)
          break;

    
        case "2":
             login();
        name = prompt("type name")
        password = prompt("type password")
        // let index = [];
        let loginValid = false;

    for (let i = 0; i < names.length; i++){
        if(name = names[i] && password == passwords[i]) {
                loginValid = true;
                i = names.length;
        }
    }
        
 if(loginValid) {
        console.log("login in successful");   
    } else {
        console.log("login incorrect")
    }

    console.log(names)  
    console.log(passwords)

   
    break;

     case "3":
            deleteAccount();
            let personname = prompt("type name")

           // let deleted1 = names.indexOf(i) 
            //let deleted2 = passwords.indexOf(i)
            // let i = 1;

            for (let i = 0; i < names.length; i++){
                if(personname = names[i])
                    {
                       names[i] = "";
                       passwords[i] = "";
                        i = names.length;
                }
            }
            console.log("account deleted");
            
           

            let filteredArrayName = names.filter(item => item.trim() !== "");
            let filteredArrayPW = passwords.filter(item => item.trim() !== "");

            console.log(filteredArrayName);
            console.log(filteredArrayPW);
            console.log(names);
            console.log(passwords);

            names = filteredArrayName;
            passwords = filteredArrayPW;

            console.log(names);  
            console.log(passwords);

    break;
            
    case "4":
 console.log("end program")
    break;


}

/*var name = prompt("enter name")
var password = prompt("enter password")


if (register())

function Register(names, passwords) {
    names = []
    passwords = []
}

function Login(nameA, passwordA){
    var nameA = names[0]
    var passwordA = passwords[0]

for ( i = 0; i = names.length; i++) {

    for (j = 0; j = password.length; j++){

if (nameA == name[i] && passwordA == password[j]){
    console.log("login complete")

else (console.log("login failed"))

}

}


}

    

}
*/
