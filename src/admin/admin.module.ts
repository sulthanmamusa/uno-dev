import { Module, forwardRef } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { MerchantsConroller } from "./controllers/merchants.controller";

@Module({
    imports: [
        forwardRef(()=> DatabaseModule)
    ],
    controllers: [
        MerchantsConroller
    ]
})
export class AdminModule {}