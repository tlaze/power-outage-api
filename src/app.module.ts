import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OutagesModule } from './outages/outages.module';

@Module({
  //LOCAL HOST CONNECTION
  // imports: [
  //   ConfigModule.forRoot({ isGlobal: true }),
  //   TypeOrmModule.forRoot({
  //     type: 'postgres',
  //     host: process.env.DB_HOST,
  //     port: parseInt(process.env.DB_PORT),
  //     username: process.env.DB_USERNAME,
  //     password: process.env.DB_PASSWORD,
  //     database: process.env.DB_NAME,
  //     entities: [__dirname + '/**/*.entity{.ts,.js}'],
  //     synchronize: true,
  //   }),
  //   OutagesModule,
  // ],
    imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    OutagesModule,
  ],
})
export class AppModule {}