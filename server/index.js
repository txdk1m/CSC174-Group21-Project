const PORT = process.env.PORT || 4201;
const express = require("express");
const sqlConnect = require("./database");
const app = express();

app.get("/", (req, res) => {
    res.json({ message: "Server is up!" })
});

// EXAMPLE FOR TED AND HIEN
// app.get("/query1", async (req, res) => {
//     const query = "SELECT * FROM table1"; // Write your "PURE SQL" here
//     sqlConnect.query(query, [req.params.tablename], (error, results) => {
//         if (!results[0])
//             res.json({ status: "Query Not Found!!" });
//         else
//             res.json(results[0]);
//     })
// });

app.set('port', PORT);
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}. To access API please use: http://localhost:4201/`);
});