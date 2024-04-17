// import { drizzle } from 'drizzle-orm/node-postgres';
// import { DynamicModule, Module, Provider } from '@nestjs/common';
// import { DRIZZLE_ORM } from './constants';
// import { Pool } from 'pg';

// import { DrizzleConfig } from 'drizzle-orm';
// import { drizzleProvider } from './drizzle.provider';
// @Module({
//   providers: [...drizzleProvider],
// })
// export class DrizzleModule {
//     static forRoot({
//       databaseUrl,
//       config,
//     }: {
//       databaseUrl: string;
//       config: DrizzleConfig;
//     }): DynamicModule {
//       const pool = new Pool({
//         connectionString: databaseUrl,
//       });
//       const db = drizzle(pool, config);
//       const drizzleProvider: Provider = {
//         provide: DRIZZLE_ORM,
//         useValue: db,
//       };
//   return {
//     module: DrizzleModule,
//     providers: [drizzleProvider],
//     exports: [drizzleProvider],
//     global: true,
//   };
// }
// // }
// //   static registerAsync(options: NestDrizzleAsyncOptions): DynamicModule {
// //     return {
// //       module: DrizzleModule,
// //       providers: [...this.createProviders(options)],
// //     };
// //   }
