const express = require("express");
const pool = require("./database");
const app = express();

app.use(express.json());

// CORS Policy keeps blocking requests.. stop it!
const cors = require('cors');
app.use(cors({
    origin: '*'
}));

const PORT = process.env.PORT || 4201;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.json({ message: "Server is up!" })
});

// EXAMPLE FOR TED AND HIEN
app.get("/testTable", async (req, res) => {
    const query = "SELECT * FROM testTable"; // Write your "PURE SQL" here
    pool.query(query, [req.params.testTable], (error, results) => {
        if (!results)
            res.json({ status: "Query Not Found!!" });
        else
            res.json(results);
    })
});

app.get("/customerInfo", (req, res) => {
    const query = "SELECT f_name, l_name, email, phoneNumber FROM customer";
    pool.query(query, [req.params.customerInfo], (error, results) => {
        if (!results)
            res.json({ status: "Query Not Found!!" });
        else
            res.json(results);
    })
});

