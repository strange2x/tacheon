import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { log } from 'alt-server';
config();

export const MainDataStore = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ['resources/**/*.entity.js'],
    synchronize: true,
    ssl: {
        ca: process.env.DB_SSL,
        rejectUnauthorized: false,
    },
});

(async () => {
    try {
        await MainDataStore.initialize();
        log('Connected to Database');
    } catch (error) {
        log('Failed to connect to DB', error);
    }
})();
