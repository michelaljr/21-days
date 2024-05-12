      let distance = Number(prompt("type distance"))
      let fuelType = prompt("type fuel")
      


    function liters(distance, fuelType) {

    if (distance < 0) {
      console.log('Distance must be a non negative number');
      return;
    } 
  
    if (fuelType !== 'gasoline' && fuelType !== 'ethanol') {
      console.log('Fuel type must be either "gasoline" or "ethanol".');
      return;
    }
    
    
        // fuel consumption rate
      const consumptionRate = {
        'gasoline': 16,  // km per liter
        'ethanol': 11     // km per liter
      };

      // calculate fuel consumption give distance and fuel type
      const fuelConsumed = distance / consumptionRate[fuelType];
      return fuelConsumed;
    }

    console.log(liters(distance, fuelType));