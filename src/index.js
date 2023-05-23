const express = require("express");
const cors = require("cors");
const routerUsuarios = require("./routes/usuarios.js");
const app = express();

require("./database/database.js");

app.set("PORT", process.env.PORT || 5000);

app.use(cors());
app.use(express.json());
app.use(routerUsuarios);

app.listen(app.get("PORT"), () => {
  console.log(`Servidor ejecutándose en puerto
    ${app.get("PORT")}`);
});
