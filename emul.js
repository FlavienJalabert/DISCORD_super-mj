let express = require("express");

let app = express();

app.set("port", 80);

app.set("view engine", 'ejs');

app.get("/", (req, res) => {
    res.render('emulator.ejs');
});

app.listen(app.get("port"), () => {
    console.log("emulator listening on port " + app.get("port"))
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});