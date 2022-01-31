const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

//middleware
app.use(express.json(), express.urlencoded({extended:true}));
app.use(cors());

//connect mongo
require("./config/mongoose.config");
//API routes
require("./routes/author.routes")(app);

//port listener
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));