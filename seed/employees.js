const db = require("../db")
const Employee = require("../models/employee")

db.on("error", console.error.bind(console, "MongoDB connection error"))

const main = async () => {
    const employees = 
    [
        {first_name: "Ray", last_name: "Willis", email: "ray@willis.com", job_title: "UX Designer", address: {
            street: "123 Test Ave", city: "New York", state: "NY", zip: 12345
        }},
        {first_name: "Blue", last_name: "Iris", email: "blue@iris.com", job_title: "Software Engineer", address: {
            street: "34 AZ st", city: "New York", state: "NY", zip: 65543
        }},
        {first_name: "Felix", last_name: "Lone", email: "fe@lone.com", job_title: "Program Manager", address: {
            street: "89 Used St", city: "New York", state: "NY", zip: 98765
        }},
    ]

    await Employee.insertMany(employees)
    console.log("Employees document has been created")
}

const run = async () => {
    await main();
    db.close();
}

run();