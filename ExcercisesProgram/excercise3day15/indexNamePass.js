
let personname;
let vtypeofaction;

names = ["mike", "thay"];
passwords = ["123", "456"];

continueUntil = true;


function typeOfAction(){

    return prompt("would you like to" + " \n1 = register \n2 = login \n3 = delete \n4 = close program");
    
    // let vOption = prompt("would you like to" + " \n1 = register \n2 = login \n3 = delete \n4 = close program");
   // return vOption;
}


function register(){
    console.log("you chose to register");
    personname = prompt("type name")
    password = prompt("type password")

    names[names.length] = personname
    passwords[passwords.length] = password
}

function login(){
    console.log("you chose to login");

}

function deleteAccount(){
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

}

while(continueUntil){

    switch (typeOfAction()) {
        
        case "1":
                register();
            break;
        
        case "2":
                login();
            personname = prompt("type name")
            password = prompt("type password")
            // let index = [];
            let loginValid = false;

            for (let i = 0; i < names.length; i++){
                    if(personname = names[i] && password == passwords[i]) {
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

                continueUntil = false
                break;  

        case "3":
                
                personname = prompt("type name");
                deleteAccount();
                break;
            
        case "4":
                console.log("end program")
                continueUntil = false;
                break;
        default:
                console.log("invalid option, try again.");
                break;
    }

}