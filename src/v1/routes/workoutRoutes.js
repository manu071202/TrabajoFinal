const express=require('express')
const router = express.Router();
const workoutController=require("../../controllers/workoutControllers")



router
.get("/",workoutController.getallworkouts)
.get ("/:workoutID",workoutController.getOneworkout)
.post("/:workoutID",workoutController.createNewWorkout)
.patch("/:workoutID",workoutController.UpdateOneWorkout)
.delete("/:workoutID",workoutController.deleteOneWorkout)
module.exports= router;