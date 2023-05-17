const workoutServices = require("../services/workoutService")


const getAllWorkouts = (req,res)=>{
    const AllWorkouts= workoutServices.getAllWorkouts();
    res.send({status:'OK', data: AllWorkouts})
}
const getOneWorkout = (req, res) => {
const{params:{workoutID},}=req;
if(!workoutID){
    return;
}
const workout = workoutServices.getOneWorkouts(workoutID)
res.send({status:"OK", data:workout})
  
//const Workout=workoutServices.getOneWorkout(req.params.workoutID)
//res.send(`get workout ${req.params.workoutID}`)
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


    const CreatedWorkout=workoutService.createNewWorkout(newWorkout)
    res.status(201).send({status:"OK",data:CreatedWorkout});

    const UpdateOneWorkout = (res, req)=>{
        const{
            body,
             params:{workoutID},
            } = req ;

            if(!workoutID){
                return;
            }
const UpdateWorkout = workoutService.UpdateOneWorkout(workoutID, body)
res.send({status:"OK", data: UpdateWorkout})

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