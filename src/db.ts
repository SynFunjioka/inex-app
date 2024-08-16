import { DataSource } from 'typeorm';
import { DataSourceConfig } from './db/orm.config';

export const AppDataSource = new DataSource(DataSourceConfig);

export const initializeDatabase = async () => {
  if (AppDataSource.isInitialized) return 

  try {
    await AppDataSource.initialize();
    console.log('🚀 Database connected!');
  } catch (error) {
    console.error('Error initializing DB:', error);
  }
};