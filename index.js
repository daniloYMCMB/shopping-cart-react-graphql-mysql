const express = require("express");
let app = express();

const PORT = 3000;

//DB Connection
require("./src/database/connection");

require("./src/bootstrap")();

app.listen(PORT, err => {
    if(err) return console.log(`Cannot Listen on PORT: ${PORT}`)
    console.log(`Server is listening on http://localhost:${PORT}`)
})