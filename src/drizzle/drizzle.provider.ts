import { DRIZZLE_ORM } from './constants';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

export const drizzleProvider = [
  {
    provider: DRIZZLE_ORM,
    useFactory: async () => {
      const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
      });
      return drizzle(pool, { logger: true });
    },
    exports: [DRIZZLE_ORM],
  },
];
