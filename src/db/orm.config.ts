import '../../envConfig';
import { DataSourceOptions } from "typeorm";
import { User } from './entities';

export const DataSourceConfig: DataSourceOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT!, 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: process.env.AUTO_SYNC === 'true',
  logging: true,
  entities: [ User ],
  subscribers: [],
  migrations: [],
};