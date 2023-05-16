let express = require("express")
const v1WorkoutRouter = require('./v1/routes/workoutRoutes')


let app = express();
let PORT = process.env.PORT ||3000

app.use(express.json())
app.use("/api/v1/workouts", v1WorkoutRouter)

app.listen(PORT),()=>{
console.log(`servidor leyendo en` + PORT)

}

{/*
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
*/}
/*routes */
{/*
require("./database/database")
app.set("PORT", process.env.PORT || 5000);

app.use(cors());
app.use(express.json());

app.listen(app.get("PORT"), () => {
    console.log(`servidor ejecutandoser en puerto
 ${app.get("PORT")}`);
});
*/}