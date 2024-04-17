import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
// import { DrizzleModule } from './drizzle/drizzle.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    // DrizzleModule.forRoot({
    //   databaseUrl: process.env.DATABASE_URL,
    //   config: { logger: true },
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
