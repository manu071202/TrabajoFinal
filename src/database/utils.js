const fs  = require('fs')
const { Module } = require('module')

const saveToDatabase= (DB)=>{
    fs.writeFilesync("./src/database/db.json", JSON.stringify(DB, null, 2),{
        encoding:"utf8"
    })
}
module.exports = {saveToDatabase}