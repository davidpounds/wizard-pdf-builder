export const selectValuesFromEnum = (enumInput: any): Map<number, string> => {

    const filteredKeys = Object.entries(enumInput).filter(([_, value]) => Number.isNaN(Number(value)));
    const selectValuesMap = filteredKeys.reduce((acc, [key, value]) => {
        const keyVal = Number.parseInt(key, 10);
        if (!Number.isNaN(keyVal)) {
            acc.set(keyVal, String(value));
        }
        return acc;
    }, new Map<number, string>());
    return selectValuesMap;
};
