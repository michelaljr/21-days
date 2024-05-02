function liters(distance, fuelType) {
    
    distance = parseInt(prompt("Enter the distance you will travel in kilometers"))
    if (distance < 0) {
      console.log('Distance must be a non negative number')
    } else {
      return distance
    }

    let fuelType = prompt("What kind of fuel are you using? gasoline/ethanol")
    if (fuelType !== 'gasoline' && fuelType !== 'ethanol') {
      console.log('Fuel type must be either "gasoline" or "ethanol".')
    } else {
        return fuelType
    }

switch (calculateLiters) {
    case "gasoline":
        console.log("you will use " + (distance / 16) + "liters for your trip." )
        break;
    case "ethanol":
        console.log("you will use " + (distance / 11) + "liter for your trip")
    }

}


