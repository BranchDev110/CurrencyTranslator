const EXP_K = 1e3;
const EXP_M = 1e6;
const EXP_B = 1e9;

export const getExpFromChar = (char) => {
    switch(char){
        case 'k':
            return EXP_K;
        case 'K':
            return EXP_K;
        case 'm':
            return EXP_M;
        case 'M':
            return EXP_M;
        case 'b':
            return EXP_B;
        case 'B':
            return EXP_B;
        default:
            return 1;
    }
}

export const checkValidation = (str) => {
    if(!!str.match(/^0\d+/g) || str === "")
        return false;
    return !!str.match(/^\d*(,\d{3,3})*(.\d+)?[KMB]?$/i);
}

export const getRealDataFromString = (str) => {
    const lastChar = str.at(-1);
    const exp = getExpFromChar(lastChar);
    const value = exp === 1 ? str : str.slice(0 , str.length - 1);
    return exp * parseFloat(value.toLocaleString().replaceAll(',',''));
}