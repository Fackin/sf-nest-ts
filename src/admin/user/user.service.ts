import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize';
import sequelize from '../../database/sequelize';

@Injectable()
export class UserService {
    findOne(username: string): string {
        const sql = `SELECT * FROM BASE_USER WHERE USER = ${username}`
        if (username == 'kid') {
            return '答对了'
        }
        return '没有找到'
    }
}
