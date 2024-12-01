import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      connectionString:
        'postgresql://postgresdb_owner:HrgEuvNdm3L7@ep-ancient-dew-a5mdjvyu-pooler.us-east-2.aws.neon.tech/postgresdb?sslmode=require',
    });
  }

  async onModuleInit() {
    try {
      await this.pool.connect();
      console.log('Connected to the PostgreSQL database');
    } catch (err) {
      console.error('Database connection error:', err);
    }
  }

  async onModuleDestroy() {
    await this.pool.end();
    console.log('Database connection closed');
  }

  async query<T>(query: string, params?: any[]): Promise<T> {
    const result = await this.pool.query(query, params);
    return result.rows;
  }
}
