export default interface PropertyProvider {
    getProperty(key: string): Promise<string>;
}