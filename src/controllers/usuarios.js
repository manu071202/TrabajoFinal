let express = require("express")
let app = express();
let port = process.env.PORT ||4200


app.get('/', function(req, res){
    res.json({mensaje:'metodo'})
})
app.listen(port)
console.log('apipi' + port)