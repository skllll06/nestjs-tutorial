import {
  integer,
  pgEnum,
  pgTable,
  uniqueIndex,
  varchar,
  uuid,
} from 'drizzle-orm/pg-core';
// declaring enum in database
export const userRoleEnum = pgEnum('role', ['MANAGER', 'EMPLOYEE', 'INTERN']);
export const users = pgTable(
  'users',
  {
    id: uuid('id').primaryKey(),
    name: varchar('name', { length: 256 }),
    age: integer('age'),
  },
  (users) => {
    return {
      nameIndex: uniqueIndex('name_idx').on(users.name),
    };
  },
);
