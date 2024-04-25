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
if (time <worseTime) {
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
