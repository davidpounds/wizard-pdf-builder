import { ChangeEvent, FC } from 'react';
import FormItemWrapper from './FormItemWrapper';
import { selectValuesFromEnum } from '../../utils';
import WizardStore from '../../store/WizardStore';
import { PaperSizeEnum, PaperSizeUnitsEnum, PaperSizePropertiesType } from '../../types/store.types';

export const paperSizeAspectRatios = new Map<PaperSizeEnum, PaperSizePropertiesType>([
    [PaperSizeEnum.A4, {
        size: PaperSizeEnum.A4,
        width: 210,
        height: 297,
        aspectRatio: 0.7070707071,
        units: PaperSizeUnitsEnum.Millimeter,
    }],
    [PaperSizeEnum.Letter, {
        size: PaperSizeEnum.Letter,
        width: 17,
        height: 22,
        aspectRatio: 0.7727272727,
        units: PaperSizeUnitsEnum.Inch,
    }],
]);

const PaperSize: FC<{}> = () => {
    const size = WizardStore.useState(s => s.paperSize);
    const selectValues = [...selectValuesFromEnum(PaperSizeEnum)];

    const pageSizeChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectValue = e.target.value;
        const intValue = Number.parseInt(selectValue, 10);
        WizardStore.update(s => {
            s.paperSize = intValue as PaperSizeEnum;
        });
    };

    return (
        <FormItemWrapper>
            <label htmlFor="paperSize">Paper size</label>
            <select
                id="paperSize"
                value={size}
                onChange={pageSizeChangeHandler}
            >
                {selectValues.map(([key, value]) => (
                    <option
                        key={key}
                        value={key}
                    >{value}</option>
                ))}
            </select>
        </FormItemWrapper>
    )
};

export default PaperSize;
