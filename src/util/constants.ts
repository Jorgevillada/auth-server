import { Config } from "../util/config";

export const Constants = {
    CHECK_USER_TOKEN: Config.getBoolean("CHECK_USER_TOKEN", false),
    CODE_INVALID_AUTH_HEADER: 403,
    CODE_INVALID_STORE_HEADER: 403,
    CODE_INVALID_USER_HEADER: 403,
    CODE_STORE_NOT_FOUND: 403,
    CONSUL_KV_PREFIX: "config/auth-server/",
    DEFAULT_PROPERTY_PROVIDER: "CONSUL",
    DEFAULT_PROPERTY_TOKEN: "default_token",
    DEFAULT_TOKEN: Config.getString("DEFAULT_TOKEN", "hZmFS05wPfV1sEgqdWhkIk6XC8p5u129"),
    HEADER_AUTH: "x-auth-user",
    HEADER_STORE: "x-store-id",
    HEADER_USER: "x-user-id",
    PROPERTY_PROVIDER: "PROPERTY_PROVIDER",
    PROPERTY_PROVIDER_CONSUL: "CONSUL",
    STATUS_MISSING_INFO: 401,
    STATUS_OK: 200,
};
