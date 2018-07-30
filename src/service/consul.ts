import { Consul } from "consul-kv"
import { Constants } from "../util/constants"
import { Config } from "../util/config"
import PropertyProvider from "./spi/PropertyProvider";

export class ConsulService implements PropertyProvider {

    protected connection: Consul;

    constructor() {
        this.connection = new Consul({
            host: Config.getString("CONSUL_HOST", "localhost"),
            token: Config.getString("CONSUL_TOKEN", ""),
            tlsCert: Config.getString("CONSUL_TLS_CERT", ""),
            tlsKey: Config.getString("CONSUL_TLS_KEY", ""),
            port: Config.getNumber("CONSUL_PORT", 8500),
            protocol: Config.getString("CONSUL_PROTOCOL", "http"),
            strictSSL: Config.getBoolean("CONSUL_STRICT_SSL", false),
        })
    }
    async getProperty(key: string) {
        return (await this.connection.get(Constants.CONSUL_KV_PREFIX + key)).value;
    }
}