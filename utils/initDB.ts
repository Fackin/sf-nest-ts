const mysql = require('mysql2');
import config from '../config/db'

const { port, host, user, password, database, connectionLimit} = config.mysqlData;

// 创建一个链接
export const connection = mysql.createPool({
    port,
    host,
    user,
    password,
    database,
    connectionLimit,
});

// 执行 sql 语句
const statement = 'SELECT * FROM BASE_USER;';

connection.execute(statement, [1,0], (err, values: any) => {
    console.log('======', values)
})