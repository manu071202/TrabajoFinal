const { v4: uuid} =require("uuid")
const Workout = require('../database/workout')


const getAllWorkouts = ()=>{
    const getAllWorkouts = Workout.getallWorkouts();
    return allWorkouts;
}
const getOneWorkouts = (workoutID)=>{
    const workout = Workout.getOneWorkouts(workoutID)
    return workout;
}
const createNewWorkouts = (newWorkout)=>{
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAT:new Date().toLocaleString("en-es", {timeZone: "UTC"}),
        updateAT:new Date().toLocaleString("en-es", {timeZone: "UTC"})
        
    }
const createdWorkout= Workout.createNewWorkouts(workoutToInsert);
return createdWorkout
}
const UpdateOneWorkout = (workoutID, changes)=>{
    const UpdateWorkout = workout.UpdateOneWorkout(workoutID, changes)
    return UpdateWorkout
}
const deleteWorkous = ()=>{
    return;
}

module.exports= {getAllWorkouts,getOneWorkouts,createNewWorkouts,UpdateOneWorkouts,deleteWorkous}