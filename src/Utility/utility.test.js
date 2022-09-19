const {checkValidation, getRealDataFromString, getExpFromChar} = require('./index');

test('Validation test' , () => {
    expect(checkValidation(".5b")).toBeTruthy();
    expect(checkValidation("10m")).toBeTruthy();
    expect(checkValidation("1000k")).toBeTruthy();
    expect(checkValidation(".5d")).toBeFalsy();
    expect(checkValidation("34a")).toBeFalsy();
    expect(checkValidation("asdf")).toBeFalsy();
    expect(checkValidation("0000003333")).toBeTruthy();
})

test('GetExpFromChar test' , () => {
    const data = {
        b: 1e9,
        B: 1e9,
        m: 1e6,
        M: 1e6,
        k: 1e3,
        K: 1e3,
    }
    Object.keys(data).forEach(item => expect(getExpFromChar(item)).toBe(data[item]));
    [...Array(10)].forEach((value, index) => {
        expect(getExpFromChar(index)).toBe(1);
    })
})

test('GetRealDataFromString test' , () => {
    expect(getRealDataFromString(".5b")).toBe(5e8);
    expect(getRealDataFromString("10m")).toBe(1e7);
    expect(getRealDataFromString("1000k")).toBe(1e6);
    expect(getRealDataFromString("0000003333")).toBe(3333);
    expect(getRealDataFromString("1,123,123.34")).toBe(1123123.34);
    expect(getRealDataFromString("1,123.35b")).toBe(112335*1e7);
})