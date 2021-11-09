//Configuaration to coneect to our database using 'pg' library
const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'codelikeaboss',
    host: 'localhost',
    port: 5432,
    database: 'perntodo'
});

module.exports = pool;

