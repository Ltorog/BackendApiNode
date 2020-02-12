const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '1234',
    database: 'DBUsuarios',
    port: '5433'
});


const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM Usuarios');
    res.status(200).json(response.rows);
}

module.exports = {
    getUsers
}