import { Config } from "../util/config";
import { Constants } from "../util/constants";
import { ConsulService } from "./consul";


export class PropertyService {

    public static async getProperty(key: string) {
        const propertyProvider = PropertyService.property[Config.getString(
            Constants.PROPERTY_PROVIDER, Constants.DEFAULT_PROPERTY_PROVIDER)
        ];
        return await propertyProvider.getProperty(key);
    }

    private static property: any = { [Constants.PROPERTY_PROVIDER_CONSUL]: new ConsulService() };
}
