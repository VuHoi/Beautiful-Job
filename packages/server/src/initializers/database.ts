import { createConnection } from 'typeorm';
import { Card } from '../entity/Card';
import { User } from '../entity/User';

export const databaseInitializer = async () => {

    return await createConnection({
        type     : 'postgres',
        // process.env.TYPEORM_CONNECTION
        host     : process.env.TYPEORM_HOST,
        port     : +process.env.TYPEORM_PORT,
        username : process.env.TYPEORM_USERNAME,
        password : process.env.TYPEORM_PASSWORD,
        database : process.env.TYPEORM_DATABASE,
        entities: [
            Card,
            User
        ],
        logging: JSON.parse(process.env.TYPEORM_LOGGING),
        synchronize: JSON.parse(process.env.TYPEORM_SYNCHRONIZE),
    }).then((connection:any) => {
        console.log('Database connection established');
    }) .catch((err: Error) => `Cannot connect to TypeOrm ${err.message}`);
};
