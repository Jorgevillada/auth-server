import { Config } from "../config"
it('missing property string in config', () => {
    expect(Config.getString("test", "2")).toBe("2");
});
it('missing property number in config', () => {
    expect(Config.getNumber("test", 2)).toBe(2);
});
it('missing property boolean in config', () => {
    expect(Config.getBoolean("test", true)).toBe(true);
});
it('missing property boolean in config', () => {
    expect(Config.getBoolean("test", true)).toBe(true);
});

it('property found in string config', () => {
    process.env["test"] = "test";
    expect(Config.getString("test", "2")).toBe("test");
});

it('property found in number config', () => {
    process.env["test"] = "2";
    expect(Config.getNumber("test", 5)).toBe(2);
});
it('property found in number must not default value', () => {
    process.env["test"] = "2";
    expect(Config.getNumber("test", 5)).not.toBe(5);
});