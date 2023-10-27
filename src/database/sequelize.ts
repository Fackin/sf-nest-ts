import { Sequelize } from "sequelize-typescript";
import db from '../../config/db';

const { port, user, password, host, database, connectionLimit} = db.mysqlData;

// 创建链接
const sequelize = new Sequelize(database, user, password || null, {
    // 主机 默认 localhost
    host,
    // 端口 默认 3306
    port,
    dialect: 'mysql',
    pool: {
        max: connectionLimit,   // 连接池中最大连接数
        min: 0,                 // 连接池中最小连接数
        acquire: 30000,
        idle: 10000,            // 如果一个线程 10 秒内没有被使用，就释放
    },
    timezone: '+08:00',         // 东八时区
});

// 测试数据库连接
sequelize.authenticate().then(() => {
    console.log('数据库连接成功');
}).catch((err: any) => {
    // 数据库失败时打印日志
    console.error(err);
    throw err;
});

export default sequelize;