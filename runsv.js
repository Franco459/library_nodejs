
const express = require("express");


const app = express();
app.use(express.json());

require("./app/routes/students.routes")(app);

app.listen(3000, () => console.log("works!"))
