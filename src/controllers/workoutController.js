const workoutServices = require("../services/workoutService")


const getAllWorkouts = (req,res)=>{
    const getAllWorkouts= workoutServices.getAllWorkouts();
    res.send({status:'OK', data: allworkout})
}
const getOneWorkout = (req, res) => {
    const Workout=workoutServices.getOneWorkout(req.params.workoutID)
    res.send(`get workout ${req.params.workoutID}`)
}

const createNewWorkout = (res, req)=>{
const { body }= req;
if(!body.name || !body.mode || !body.equipment || !body.exercises ||!body.trainerTips){
    return;
}
const newWorkout= {
    name:body.name,
mode:body.mode,
equipment:body.equipment,
exercises:body.exercises,
trainerTips:body.trainerTips

}


    const CreatedWorkout=workoutServices.NewWorkout()
    res.status(201).send({status:"OK",data:CreatedWorkout});

    const UpdateOneWorkout = (res, req)=>{
        const Updateworkout=workoutServices.UpdateOneWorkout(req.params.workoutID)
        res.send(`Update workout ${req.params.workoutID}`)
}
const deleteOneWorkout = (res, req)=>{
    workoutServices.deleteOneWorkout(req.params.workoutID)
    res.send(`delete workout ${req.params.workoutID}`)
}
module.exports={
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    UpdateWorkout,
    UpdateWorkout
}