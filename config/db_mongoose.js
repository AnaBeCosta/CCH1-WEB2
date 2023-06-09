const mongoose = require('mongoose');
const updateCampoVoto = require('./migration');

function connectToDatabase(){
    mongoose.connect(
        "mongodb+srv://adm:UTFPR123@projetos.yu7r5mm.mongodb.net/WEB2?retryWrites=true&w=majority", 
            {
                useUnifiedTopology:true, 
                useNewUrlParser:true
            }
    );
    updateCampoVoto();
    const db = mongoose.connection;
    db.on("error", (error) => console.error(error));
    db.once("open", () => console.log("Connected to the database!"));
}


module.exports = connectToDatabase;