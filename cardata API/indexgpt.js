const express = require('express');
const app = express();
app.use(express.json());

class Car {
    constructor(brand, model, year, kilometer, value) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.kilometer = kilometer;
        this.value = value;
    }
}

let cars = []; // In-memory storage for simplicity

// GET all cars
app.get('/cars', (req, res) => {
    res.json(cars);
});

// GET car by id
app.get('/cars/:id', (req, res) => {
    const id = req.params.id;
    const car = cars[id];
    if (!car) {
        res.status(404).send('Car not found');
    } else {
        res.json(car);
    }
});

// POST a new car
app.post('/cars', (req, res) => {
    const { brand, model, year, kilometer, value } = req.body;
    const car = new Car(brand, model, year, kilometer, value);
    cars.push(car);
    res.status(201).send('Car added successfully');
});

// PUT (update) a car by id
app.put('/cars/:id', (req, res) => {
    const id = req.params.id;
    const { brand, model, year, kilometer, value } = req.body;
    const car = cars[id];
    if (!car) {
        res.status(404).send('Car not found');
    } else {
        car.brand = brand;
        car.model = model;
        car.year = year;
        car.kilometer = kilometer;
        car.value = value;
        res.send('Car updated successfully');
    }
});

// DELETE a car by id
app.delete('/cars/:id', (req, res) => {
    const id = req.params.id;
    const car = cars[id];
    if (!car) {
        res.status(404).send('Car not found');
    } else {
        cars.splice(id, 1);
        res.send('Car deleted successfully');
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
