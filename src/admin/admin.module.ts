import { Module, forwardRef } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { MerchantsConroller } from "./controllers/merchants.controller";
import { RequestCategoriesController } from "./controllers/request_categories.controller";
import { RequestSourcesController } from "./controllers/request_sources.controller";
import { ServiceRequestsController } from "./controllers/service_requests.controller";

@Module({
    imports: [
        forwardRef(()=> DatabaseModule)
    ],
    controllers: [
        RequestCategoriesController,
        RequestSourcesController,
        ServiceRequestsController,
        MerchantsConroller
    ]
})
export class AdminModule {}