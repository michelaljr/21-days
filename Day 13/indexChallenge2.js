class Car{
    name
    horsePower
    maxSpeed
    acceleration

constructor(name, horsePower, maxSpeed, acceleration){
    this.name = name;
    this.HorsePower = horsePower;
    this.MaxSpeed = maxSpeed;
    this.Acceleration = acceleration;
}   

CalculateTime(distance){
let result =  distance / (this.MaxSpeed / this.Acceleration)
return result
    }

  present(){
        console.log("my cars name is" + this.name + "its horsepower is " + this.HorsePower + "its maxspeed is " + this.MaxSpeed + "its acceleration is " + this.Acceleration)
    }


    Information() {
    console.log("car information:");
    console.log(`horse:  ${this.HorsePower}`);
    console.log(`Processor: ${this.MaxSpeed}`);
    console.log(`Video: ${this.Acceleration}`);
        }



console.log("========= Register the cars ==========")
    let cars = [];
    let continuee = true;
    let carIndex = 0;

    while(continuee){
        let name = prompt("enter cars name")
        let horsePower = parseInt(prompt("enter cars horsepower"))
        let maxSpeed = parseInt(prompt("enter cars maxspeed"))
        let acceleration = parseFloat(prompt("enter cars acceleration"))
        let car = new Car(name, horsePower, maxSpeed, acceleration, acceleration)

        cars[carIndex] = car;
    let wishToContinue = prompt("enter 1 if you wish to register a new car")
    if(wishToContinue != "1")
    {
    continuee = false
    }else{
        carIndex++ 
        }
    }

const myCar = new Car("cayenne", 500, 300 , 4);
myCar.CalculateTime(); 




class Race{
    Name
    Type
    Distance
    Winner
    Participants
    
    constructor(name, type, distance) {
    this.Name = name
    this.Type = type
    this.Distance = distance
    this.Winner = ""
    this.Participants = []
    }
    
    DefineWinner(){
    let worseTime = time.Participants[0].CalculateTime(this.Distance)
    let winner = this.Participants[0]
    
    for (let index = 1; index < this.Participants.length; index++) {
    let time = this.Participants[index].CalculateTime(this.Distance)
    if (time < worseTime) {
    worseTime = time
    winner = this.Participants[index]
            }
        }
    
        return this.Winner = winner
    }
    
    ExhibitWinner() {
        alert("The winner is: " + this.Winner.Name)
        }
    }
    
    let race = new Race("camaro, drag race, 60000")
    
    race.Participants[0] = new Car("mikes" , 120, 300, 4)
    race.Participants[1] = new Car("thay" , 200, 235, 7)
    race.Participants[2] = new Car("dad" , 350, 300, 4)
    
    race.DefineWinner()
    race.ExhibitWinner()
}