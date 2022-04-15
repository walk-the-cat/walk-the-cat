require("dotenv").config();
const express = require("express");
const cors = require("cors")
const app = express();

const PORT = 5050;
const { Pool } = require('pg');

const pool = new Pool({
  database: 'wtc_db',
})

app.use(express.json());
app.use(cors())


//Get all
// app.get("/item/", async (req, res) => {
//   const allTodo = await pool.query("SELECT * FROM card_table")
//   res.json(allTodo.rows);
// })

//Get a todo
app.get('/item/', async (req, res) => {
  const todo = await pool.query(`
    SELECT title, id, item_id, description FROM card_table 
    INNER JOIN item_table 
    ON card_table.id = item_table.card_id 
    `);
  res.send(todo.rows)
});


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));