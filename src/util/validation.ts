export class Validation {
    public static nonEmpty(value: string, message: any) {
        if (!value || !value.trim()) {
            throw message;
        }
    }

    public static isEmpty(value: string) {
        return !value || !value.trim();
    }

    public static equals(value: any, anotherValue: any) {
        return value === anotherValue;
    }
}
