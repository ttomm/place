import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { EntitiesProvider } from './entities-provider';

@Injectable()
export class DatabaseConfigProviderService implements TypeOrmOptionsFactory {
    constructor(private configService: ConfigService) { }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions {
        return {
            entities: EntitiesProvider.get(),
            type: this.configService.get<'postgres' | 'sqlite'>('DB_TYPE'),
            host: this.configService.get<string>('DB_HOST'),
            port: +this.configService.get<string>('DB_PORT'),
            schema: this.configService.get<string>('DB_SCHEMA'),
            database: this.configService.get<string>('DB_DATABASE'),
            username: this.configService.get<string>('DB_USERNAME'),
            password: this.configService.get<string>('DB_PASSWORD'),
            logging: this.configService.get<string>('DB_LOGGING') === 'true' || false,
            synchronize: this.configService.get<string>('DB_SYNCHRONIZE') === 'true' || false,
            cache: this.configService.get<string>('DB_CACHE') === 'true' || false,
        };
    }
}
