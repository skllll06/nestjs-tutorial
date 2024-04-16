DO $$ BEGIN
 CREATE TYPE "role" AS ENUM('MANAGER', 'EMPLOYEE', 'INTERN');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"age" integer
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "name_idx" ON "users" ("name");