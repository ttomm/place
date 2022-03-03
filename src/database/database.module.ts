import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseConfigProviderService } from './database-config-provider/database-config-provider.service';

@Module({
    imports: [TypeOrmModule.forRootAsync({
        useClass: DatabaseConfigProviderService
    })],
    providers: [DatabaseConfigProviderService],
})
export class DatabaseModule { }
