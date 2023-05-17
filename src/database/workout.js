const DB = require('./db.json')
const { saveToDatabase } = require("./utils")

const getallWorkouts = ()=>{
    return DB.workouts;
};
const getOneWorkout= (workoutID)=>{
    const workout = DB.workouts.find((workout)=>workout.id === workoutID)
if(!workout){
    return;
}
    return workout;
}


const createNewWorkout = (newWorkout)=>{
    const isAlreadyAdded = DB.workouts.findIndex((workout)=>workout.name===newWorkout.name) > -1
if(isAlreadyAdded){
    return;
}
DB.workouts.push(newWorkout);
saveToDatabase(DB);
return newWorkout;
}

const UpdateOneWorkout = (workout, changes) =>{
    const indexForUpdated =DB.workouts.findIndex((workout)=>(workout.id= workoutID))

    if(indexForUpdated === -1){
        return
    }
const updateWorkout= {
    ...DB.workouts[indexForUpdated],
    ...changes,


}


}




module.exports = {getallWorkouts, getOneWorkout, createNewWorkout}