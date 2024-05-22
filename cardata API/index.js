class Car {

    brand
    model
    category
    year
    kilometer
    value

constructor (brand, model, category, year, kilometer, value) {
    
    brand = this.brand;
    model = this.model;
    category = this.category
    year = this.year;
    kilometer = this.kilometer;
    value = this.value;
    }

}


// Get:

async function getAllCars() {
 
        let stored = await fetch('https://apigenerator.dronahq.com/api/A9F1ZuDp/car_data');
        if(!stored.ok){
            throw new Error("error")};
        let data = await stored.json();
        console.log(data);
    
}

async function getCarbyId(id) {
 
    let stored = await fetch(`https://apigenerator.dronahq.com/api/A9F1ZuDp/car_data/${id}`);
    if(!stored.ok){
        console.log("error")};
    let data = await stored.json();
    console.log(data);

}

  
  // post, put, delete:
  
  async function postAddCar(Car) {
    
    //console.log(car)

    let stored = await fetch('https://apigenerator.dronahq.com/api/A9F1ZuDp/car_data', {
  
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
  
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Car)
    });

    if (!stored.ok){
        throw new Error("error")};
    let data = await stored.json();
    console.log(data);
    console.log("car added successfully")

}

function createCar(newbrand, newmodel, newcat, newyear, newkm, newvalue){
    
    let newCar = {
        
        brand: newbrand,
        model: newmodel,
        category: newcat,
        year: newyear,
        kilometer: newkm,
        value: newvalue
    }
    
    //let newCar = new Car(newbrand, newmodel, newcat, newyear, newkm, newvalue)

    postAddCar(newCar); 

};


async function PutUpdateCar(id, car) {

    let stored = await fetch (`https://apigenerator.dronahq.com/api/A9F1ZuDp/car_data/${id}`, {

        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
  
        headers: {
            'Content-Type': 'application/json'
      },
      body: JSON.stringify(car)
    });
    if (!stored.ok){
        throw new Error("error")};
    let data = await stored.json();
    console.log(data);
  console.log("car updated successfully")


    }
    function updateCar(id, updbrand, updmodel, updcat, updyear, updkm, updvalue){
        
        id = id;

        let updatedcar = {   
        brand: updbrand,
        model: updmodel,
        category: updcat,
        year: updyear,
        kilometer:updkm,
        value: updvalue
        }
    PutUpdateCar(id, updatedcar)
}


async function deleteCar(id) {
    let stored = await fetch(`https://apigenerator.dronahq.com/api/A9F1ZuDp/car_data/${id}`,{
    method: 'DELETE',
    });
    if (!stored.ok) {
        throw new Error("error")};
        
    console.log("car deleted")

    let data = await stored.json();
    console.log(data);

}

