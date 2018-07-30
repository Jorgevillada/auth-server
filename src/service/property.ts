import { Constants } from "../util/constants";
import { Config } from "../util/config";
import { ConsulService } from "./consul";

export class PropertyService {
    protected property: any = {}
    constructor() {
        //add providers {getProperty = async () => {} }
        this.property[Constants.PROPERTY_PROVIDER_CONSUL] = ConsulService;
    }
    async getProperty(key: string) {
        let propertyProvider = this.property[Config.getString(Constants.PROPERTY_PROVIDER, Constants.DEFAULT_PROPERTY_PROVIDER)];
        return await propertyProvider.getProperty(key);
    }
}