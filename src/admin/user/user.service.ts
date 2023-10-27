import { Injectable } from '@nestjs/common';
import * as Sequelize from 'sequelize'; // 引入 Sequelize 库
import sequelize from '../../database/sequelize'; // 引入 sequelize 实例

@Injectable()
export class UserService {
    async findOne(username: string, phone: string): Promise<any | undefined> {
        let sql = `SELECT * FROM BASE_USER WHERE 1=1`;
        sql = username ? `${sql} AND NAME = '${username}'` : `${sql}`;
        sql = phone ? `${sql} AND PHONE = '${phone}'` : `${sql}`;
        try {
            const res = await sequelize.query(sql, {
                type: Sequelize.QueryTypes.SELECT, // 查询方式
                raw: true, // 是否使用数组组装的方式返回结果
                logging: true, // 是否将 SQL 语句打印在控制台，默认 true
            })
            const user = res[0]; // 查出来的结果是数组，该需求取第一个
            if (user) {
                return {
                    code: 1,
                    data: {
                        user,
                    },
                    message: '查询成功',
                }
            } else {
                return {
                    code: 0,
                    data: null,
                    message: '用户不存在',
                }
            }
        } catch (error) {
            return {
                code: 503,
                message: `Service error: ${error}`
            }
        }
    }
}
