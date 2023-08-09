//This is the file that runs the system's server
//The server utilizes Express to provide the REST routes (in this case, just 1 GET)

global.__basedir = __dirname;

const express = require("express");
const cors = require("cors");

const app = express();
const port = 8080;

const path = __dirname + '/app/views/';

app.use(express.static(path));

var corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({
    extended: true,
}));


const skuRouter = require("./app/routes/sku");

app.use("/", skuRouter);

app.get('/', function (req,res) {
    res.sendFile(path + "index.html");
  });

/* error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});


app.listen(port, () => {
    console.log(`server listening on PORT ${port}`);
    console.log(`Go to http://localhost:${port} for the Web Interface`)

});