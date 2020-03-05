const mongoose = require('mongoose');

// DB connection
const url = 'mongodb://localhost/practice';
mongoose.connect(url,{ useNewUrlParser: true , useUnifiedTopology: true });
mongoose.connection.once('open',function(){
    console.log("Connection has been established");
}).on('error',function(error){
    console.log("Error occured" , error);
});
