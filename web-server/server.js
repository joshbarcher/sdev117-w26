import express from 'express';

//create our server
const app = express();

//give static access to the /public folder
app.use(express.static("public"));

//enable form "parsing"
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => { res.status(200).send("You arrived at our web server!"); })

app.get("/add-equipment", (req, res) => {
    //read in our form values
    const formValues = req.query;

    //do something with the values - save to file, save to database, log the values
    console.log(formValues);

    //send a response back to the client (browser)
    res.status(200).send("Form values received");
})

//pick a port on the local machine and start the server
const port = 3000;
app.listen(port, () => console.log(`App running on http://localhost:${port}`));