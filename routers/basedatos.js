const { Pool } = require("pg");
const Router = require("express-promise-router");

const pool = new Pool({
  user: "xnilnafysbemkw",
  host: "ec2-184-73-249-9.compute-1.amazonaws.com",
  database: "d2g2hsl8s8oq35",
  password: "9b29cd206aa2fb18a01a2377af9c3b5000fdb6c91b86ddee3c10542fd9c58717",
  port: 5432,
});

const router = new Router();
// export our router to be mounted by the parent application
module.exports = router;

router.get("/consultatotalpacientes", async (req, res) => {
  //const { id } = req.params
  const { rows } = await pool.query("SELECT * FROM pacientes");
  res.send(rows);
});

router.post("/insertarpacientes", async (req, res) => {
  const { nombre, apellido, numid } = req.body;
  await pool.query(
    `INSERT INTO pacientes(nombre, apellido, numid) VALUES('${nombre}','${apellido}','${numid}')`
  );
  res.send("INSERTADO");
});
