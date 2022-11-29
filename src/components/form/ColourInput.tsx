import { FC, useState, useEffect } from "react";
import classnames from 'classnames';
import styles from './ColourInput.module.scss';
import { getColourType } from '../../utils/colours';
import RangeLabel from './RangeLabel';

const ColourInput: FC<{ value: string, changeHandler: Function, label?: string }> = (props: { value: string, changeHandler: Function, label?: string }) => {
    const { value, changeHandler, label = null } = props;
    const uuid = crypto.randomUUID();
    const [colourValue, setColourValue] = useState<string>(value);
    const [colourTypeName, setColourTypeName] = useState<string>('');
    const [valid, setValid] = useState<boolean>(true);

    const setColourValues = (value: string): boolean => {
        const colourType = getColourType(value);
        const colourTypeName = colourType ?? 'unknown';
        const isValid = colourType !== null;
        setValid(isValid);
        setColourValue(value);
        setColourTypeName(colourTypeName);
        return isValid;
    };

    const colourChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const isValid = setColourValues(value);
        if (isValid) {
            changeHandler(value);
        }
    };

    useEffect(() => {
        setColourValues(value);
    }, [value]);

    return (
        <>
            <label htmlFor={`colourValue_${uuid}`}>
                {label ?? "Colour value"}{" "}
                {valid
                    ? <RangeLabel>detected as {colourTypeName}</RangeLabel>
                    : <RangeLabel>unable to detect format</RangeLabel>
                }
            </label>
            <span
                className={styles.inputWrapper}
                style={{ "--input-colour": colourValue } as React.CSSProperties}
            >
                <input
                    id={`colourValue_${uuid}`}
                    type="text"
                    value={colourValue}
                    onChange={colourChangeHandler}
                    className={classnames(styles.colourInput, { [styles.valid]: valid })}
                />
            </span>
        </>
    );
};

export default ColourInput;
