import { PropertyService } from "./property"
import { Validation } from "../util/validation"
import { Constants } from "../util/constants"

export class ValidationService {

    protected propertyService: PropertyService;

    constructor() {
        this.propertyService = new PropertyService();
    }

    async validateToken(authToken: string, storeId: string, userId: string) {
        let value;
        try {

            //find auth token for store
            if (userId || Constants.CHECK_USER_TOKEN) {
                value = await this.propertyService.getProperty(userId);
            }
            value = await this.propertyService.getProperty(storeId);

            //if empty, find default auth token
            if (Validation.isEmpty(value)) {
                value = await this.propertyService.getProperty(Constants.DEFAULT_PROPERTY_TOKEN);
            }
            //if empty, default token    
            if (Validation.isEmpty(value)) {
                value = Constants.DEFAULT_TOKEN;
            }
            return Validation.equals(value, authToken);

        } catch (error) {
            return false;
        }

    }
}