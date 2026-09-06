const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "dobby7",
  database: "likeme",
  allowExitOnIdle: true,
});

const probarConexion = async () => {
  
    const resultado = await pool.query("SELECT NOW()");
  console.log(resultado.rows);
};

probarConexion();