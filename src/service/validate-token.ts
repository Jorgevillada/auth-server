import { Constants } from "../util/constants";
import { Logger } from "../util/logger";
import { Validation } from "../util/validation";
import { PropertyService } from "./property";


export class ValidationService {


    public static async validateToken(authToken: string, storeId: string, userId: string) {
        let value;
        try {

            // find auth token for store
            if (userId || Constants.CHECK_USER_TOKEN) {
                Logger.debug("check auth token by user ", userId);
                value = await PropertyService.getProperty(userId);
                Logger.debug("user token found ", userId, value);
            }
            if (Validation.isEmpty(value)) {
                Logger.debug("check auth token by store ", storeId);
                value = await PropertyService.getProperty(storeId);
                Logger.debug("auth token by store ", storeId, value);
            }


            // if empty, find default auth token
            if (Validation.isEmpty(value)) {
                Logger.debug("token by user and store is null, check default property token ");
                value = await PropertyService.getProperty(Constants.DEFAULT_PROPERTY_TOKEN);
                Logger.debug("default token property ", value);
            }
            // if empty, default token
            if (Validation.isEmpty(value)) {
                Logger.debug("all tokens is null, check default token constant. please add auth token. ");
                value = Constants.DEFAULT_TOKEN;
                Logger.debug("default token constant", value);
            }
            Logger.debug("token validation", value, authToken, Validation.equals(value, authToken));
            return Validation.equals(value, authToken);
        } catch (error) {
            Logger.error("Error in token validation", error);
            return false;
        }

    }
}
