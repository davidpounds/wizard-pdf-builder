import { FC } from "react";
import FormItemWrapper from './FormItemWrapper';
import ColourInput from './ColourInput';
import RangeLabel from './RangeLabel';
import WizardStore from '../../store/WizardStore';
import { TypographyTypeEnum, FontType } from '../../types/store.types';
import styles from './Typography.module.scss';

const Typography: FC = () => {
    const typography = WizardStore.useState(s => s.typography);
    const hasSidebar = WizardStore.useState(s => s.layoutColumns.sidebar);

    const changeSizeFactory = (type: TypographyTypeEnum) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.valueAsNumber;
        WizardStore.update(s => {
            s.typography[type].fontSizePt = value;
        });
    };

    const changeColourFactory = (type: TypographyTypeEnum) => (value: string) => {
        WizardStore.update(s => {
            s.typography[type].fontColour = value;
        });
    };

    const changeWeightFactory = (type: TypographyTypeEnum) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.valueAsNumber;
        WizardStore.update(s => {
            s.typography[type].fontWeight = value;
        });
    };

    const changeFontFactory = (type: TypographyTypeEnum) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        WizardStore.update(s => {
            s.typography[type].fontFamily = value;
        });
    };


    return (
        <>
            <h2>Main page</h2>

            {[TypographyTypeEnum.BASE, TypographyTypeEnum.HEADING, TypographyTypeEnum.SUB_HEADING].map(type => (
                <FontDetails
                    key={type}
                    type={type}
                    fontDetails={typography[type]}
                    sizeChangeHandler={changeSizeFactory(type)}
                    colourChangeHandler={changeColourFactory(type)}
                    weightChangeHandler={changeWeightFactory(type)}
                    fontChangeHandler={changeFontFactory(type)}
                />
            ))}

            {hasSidebar && (
                <>
                    <h2>Sidebar</h2>

                    {[TypographyTypeEnum.SIDEBAR, TypographyTypeEnum.SIDEBAR_HEADING, TypographyTypeEnum.SIDEBAR_SUB_HEADING].map(type => (
                        <FontDetails
                            key={type}
                            type={type}
                            fontDetails={typography[type]}
                            sizeChangeHandler={changeSizeFactory(type)}
                            colourChangeHandler={changeColourFactory(type)}
                            weightChangeHandler={changeWeightFactory(type)}
                            fontChangeHandler={changeFontFactory(type)}
                        />
                    ))}
                </>
            )}
        </>
    )
};

type FontDetailsType = {
    type: TypographyTypeEnum;
    fontDetails: FontType;
    sizeChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
    colourChangeHandler: Function;
    weightChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
    fontChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

const FontDetails: FC<FontDetailsType> = (props: FontDetailsType) => {
    const {
        type,
        fontDetails,
        sizeChangeHandler,
        colourChangeHandler,
        weightChangeHandler,
        fontChangeHandler,
    } = props;
    const id = type.replaceAll(' ', '-').toLowerCase();

    const isHeading = type !== TypographyTypeEnum.SIDEBAR && type !== TypographyTypeEnum.BASE;

    return (
        <fieldset className={styles.fieldset}>
            <legend>{type}</legend>
            <FormItemWrapper>
                <label htmlFor={`${id}-size`}>Size</label>
                <span className={styles.rangeWrapper}>
                    <input
                        id={`${id}-size`}
                        type="range"
                        min={isHeading ? 14 : 8}
                        max={isHeading ? 72 : 18}
                        step={isHeading ? 2 : 1}
                        value={fontDetails.fontSizePt}
                        onChange={sizeChangeHandler}
                    />
                    <RangeLabel>{fontDetails.fontSizePt}pt</RangeLabel>
                </span>
            </FormItemWrapper>

            <FormItemWrapper>
                <ColourInput changeHandler={colourChangeHandler} value={fontDetails.fontColour} label="Colour" />
            </FormItemWrapper>

            <FormItemWrapper>
                <label htmlFor={`${id}-weight`}>Weight</label>
                <span className={styles.rangeWrapper}>
                    <input
                        id={`${id}-weight`}
                        type="range"
                        min={100}
                        max={900}
                        step={100}
                        value={fontDetails.fontWeight}
                        onChange={weightChangeHandler}
                    />
                    <RangeLabel>{fontDetails.fontWeight}</RangeLabel>
                </span>
            </FormItemWrapper>

            <FormItemWrapper>
                <label htmlFor={`${id}-fontFamily`}>Font</label>
                <input
                    id={`${id}-fontFamily`}
                    type="text"
                    value={fontDetails.fontFamily}
                    onChange={fontChangeHandler}
                />
            </FormItemWrapper>
        </fieldset>
    );
};

export default Typography;
