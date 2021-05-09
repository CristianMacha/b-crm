import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

const defaultOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  port: 3306,
  username: 'u1h5a0wreot4vh0z',
  password: 'MaAnOIH4IqiptkzTVLVH',
  database: 'bkh3cljs1kzfylreh01g',
  host: 'bkh3cljs1kzfylreh01g-mysql.services.clever-cloud.com',
};

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...defaultOptions,
      synchronize: true,
      entities: [__dirname + '/../modules/**/*.entity{.ts,.js}'],
    }),
  ],
})
export class DatabaseModule {}
