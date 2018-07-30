export class Config {
    public static getString(key: string, defaultValue?: string): string {
        return process.env[key] || defaultValue;
    }
    public static getNumber(key: string, defaultValue?: number): number {
        return Number.parseInt(process.env[key], 10) || defaultValue;
    }
    public static getBoolean(key: string, defaultValue?: boolean): boolean {
        return process.env[key] === "true" || defaultValue;
    }
}

