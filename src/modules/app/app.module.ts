import Config, { loadConfigs } from '#configs';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ModuleV1 } from 'src/v1';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: loadConfigs() }),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) =>
        config.get(Config.Database) as TypeOrmModuleOptions,
      inject: [ConfigService],
    }),
    ModuleV1,
  ],
})
export class AppModule {}
