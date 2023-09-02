import express from 'express'
import mysql from 'mysql'

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password:"papaito1"
})

const app = express()

app.use(express.json())

const PORT = 5000

app.get("/", (_req, res) => {
  const msg = {
    message: "Hola mundo\n",
	 port: 5000
  }
  res.send(JSON.stringify(msg))
} )

app.post("/add", (req, res) => {
  let data = req.body;
  console.log(data);  
  res.send(data)
})

app.get("/db", (_req, res) => {
  connection.query("SELECT 1 + 1 AS solution", (err, rows, _fields) => {
    if(err) {
      console.log(err.message);
      return;
    }
    console.log("Solution is: ", rows[0].solution);
  })
})


app.listen(PORT, () => {
  console.log("App listen on port: ", PORT);
  
})

connection.end()