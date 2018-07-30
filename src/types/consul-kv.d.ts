
interface ConsulArgs {
    host: any,
    token: any,
    tlsCert: any,
    tlsKey: any,
    port: any,
    protocol: any,
    strictSSL: any
}

interface ConsulResponse {
    value: string,
    responseStatus: number,
    responseBody: any
}

declare module 'consul-kv' {
    export class Consul {
        constructor(args: ConsulArgs);
        get(key: string): ConsulResponse
    }

}