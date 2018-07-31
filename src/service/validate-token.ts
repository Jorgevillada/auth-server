import { Constants } from "../util/constants";
import { Validation } from "../util/validation";
import { PropertyService } from "./property";

export class ValidationService {


    public static async validateToken(authToken: string, storeId: string, userId: string) {
        let value;
        try {

            // find auth token for store
            if (userId || Constants.CHECK_USER_TOKEN) {
                value = await PropertyService.getProperty(userId);
            }
            value = await PropertyService.getProperty(storeId);

            // if empty, find default auth token
            if (Validation.isEmpty(value)) {
                value = await PropertyService.getProperty(Constants.DEFAULT_PROPERTY_TOKEN);
            }
            // if empty, default token
            if (Validation.isEmpty(value)) {
                value = Constants.DEFAULT_TOKEN;
            }
            return Validation.equals(value, authToken);

        } catch (error) {
            return false;
        }

    }
}
