//mongodb+srv://nahusepatagua:<password>@cluster0.deu6brs.mongodb.net/?retryWrites=true&w=majority


const mongoose = require("mongoose")

//let mongoUri = "mongodb+srv:nahusepatagua:contraseña@cluster0.deu6brs.mongodb.net/?retryWrites=true&w=majority"
//mongoose.set("useCreateIndex", false)


let mongoUri =
  "mongodb+srv://manuelibanez:<Clave>@cluster0.37ypkgf.mongodb.net/";
mongoose.set("strictQuery", true);
mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB conectada");
  })
  .catch((err) => {
    console.log("ERROR: " + err);
  });
