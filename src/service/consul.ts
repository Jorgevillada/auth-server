import * as Consul from "consul-kv";
import { Config } from "../util/config";
import { Constants } from "../util/constants";
import PropertyProvider from "./spi/PropertyProvider";

export class ConsulService implements PropertyProvider {

    protected connection: any;

    constructor() {
        this.connection = new Consul({
            host: Config.getString("CONSUL_HOST", "localhost"),
            port: Config.getNumber("CONSUL_PORT", 8500),
            protocol: Config.getString("CONSUL_PROTOCOL", "http"),
            strictSSL: Config.getBoolean("CONSUL_STRICT_SSL", false),
            tlsCert: Config.getString("CONSUL_TLS_CERT", ""),
            tlsKey: Config.getString("CONSUL_TLS_KEY", ""),
            token: Config.getString("CONSUL_TOKEN", ""),

        });
    }
    public async getProperty(key: string) {
        return (await this.connection.get(Constants.CONSUL_KV_PREFIX + key)).value;
    }
}
