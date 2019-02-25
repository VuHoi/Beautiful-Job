import { createConnection } from 'typeorm';
import { Card } from '../entity/Card';
import { User } from '../entity/User';


export const databaseInitializer = async () => {

    return await createConnection({
        type     : 'postgres',
        host     : '0.0.0.0',
        port     : 5432,
        username : 'postgres',
        password : 'Thatvuhaix@X',
        database : 'slearning',
        entities: [
            Card,
            User
        ],
        logging: ['query', 'error'],
        synchronize: true,
    }).then((connection) => {
        console.log('Database connection established');
    }) .catch((err: Error) => `Cannot connect to TypeOrm ${err.message}`);
};
