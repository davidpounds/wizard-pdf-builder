import { PaperSizeEnum, PaperSizeUnitsEnum } from "../types/store.types";
import { paperSizeAspectRatios } from "../components/form/PaperSize";

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

export const getPagePixelSize = (paperSize: PaperSizeEnum): { width: number, height: number } => {
    const unitToPixelMap = new Map<PaperSizeUnitsEnum, number>([
        [PaperSizeUnitsEnum.Millimeter, 96 / 25.4],
        [PaperSizeUnitsEnum.Inch, 96],
    ]);
    const paperSizeProperties = paperSizeAspectRatios.get(paperSize);
    if (!paperSizeProperties) {
        return { width: 0, height: 0 };
    }
    const unitMultiplier = unitToPixelMap.get(paperSizeProperties.units) ?? 0;
    return {
        width: Math.ceil(paperSizeProperties.width * unitMultiplier),
        height: Math.ceil(paperSizeProperties.height * unitMultiplier),
    }
};
