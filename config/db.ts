const proConfig = {
    mysqlData: {}
}

const devConfig = {
    mysqlData: {
        port: 3306,                 // 端口
        host: 'localhost',          // 数据库地址
        user: 'root',               // 用户名
        password: '1q2w3e4r%T',     // 密码
        database: 'shadowfiend',    // 数据库名称
        connectionLimit: 10,        // 链接限制
    }
}

// process.env.NODE_ENV ? proConfig : 
const config = devConfig

export default config;