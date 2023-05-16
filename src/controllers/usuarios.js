let express = require("express")
let app = express();
let port = process.env.PORT ||4200


app.get('/', function(req, res){
    res.json({mensaje:'<h1>2323</h1>'})
})
app.listen(port)
console.log('apipi' + port)

