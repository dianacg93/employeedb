const db = require("./db");
const Employee = require("./models/employee");

db.on("error", console.error.bind(console, "Error connecting to MongoDB"))

const findAllEmployees = async () => {
    await Employee.find();
}

const run = async () => {
    await findAllEmployees();
    process.exit();
}

run();