import { ChangeEvent, FC } from 'react';
import FormItemWrapper from './FormItemWrapper';
import { selectValuesFromEnum } from '../../utils';
import WizardStore from '../../store/WizardStore';

export enum PaperSizeEnum {
    A3,
    A4,
    Letter,
};

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
