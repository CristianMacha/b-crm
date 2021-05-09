import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/user/user.module';
import { ClientModule } from './modules/client/client.module';
import { ProductModule } from './modules/product/product.module';
import { AuthModule } from './modules/auth/auth.module';
import { ActionModule } from './modules/action/action.module';
import { StatusModule } from './modules/status/status.module';

@Module({
    imports: [
        DatabaseModule,
        UserModule,
        ClientModule,
        ProductModule,
        AuthModule,
        ActionModule,
        StatusModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
