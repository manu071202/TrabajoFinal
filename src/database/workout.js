const DB = require('./db.json')
const { saveToDatabase } = require("./utils")

const getallWorkouts = ()=>{
    return DB.workout;
};

const createNewWorkout = (newWorkout)=>{
    const isAlreadyAdded = DB.workout.findIndex((workout)=>workout.name===newWorkout.name)
if(isAlreadyAdded){
    return;
}
DB.workouts.push(newWorkout);
saveToDatabase(DB);

}
module.exports = {getallWorkouts}