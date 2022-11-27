import { FC } from 'react';
import FormItemWrapper from './FormItemWrapper';
import WizardStore from '../../store/WizardStore';
import { BackgroundColoursEnum } from '../../types/store.types';
import ColourInput from './ColourInput';

const Colours: FC = () => {
    const backgroundColors = WizardStore.useState(s => s.backgroundColors);

    const changeColourFactory = (backgroundType: BackgroundColoursEnum): Function => (value: string) => {
        WizardStore.update(s => {
            s.backgroundColors[backgroundType] = value;
        });
    };

    return (
        <>
            <FormItemWrapper>
                <fieldset>
                    <legend>Page background colour</legend>
                    <ColourInput
                        value={backgroundColors.main}
                        changeHandler={changeColourFactory(BackgroundColoursEnum.Main)}
                    />
                </fieldset>
            </FormItemWrapper>
            <FormItemWrapper>
                <fieldset>
                    <legend>Sidebar background colour</legend>
                    <ColourInput
                        value={backgroundColors.sidebar}
                        changeHandler={changeColourFactory(BackgroundColoursEnum.Sidebar)}
                    />
                </fieldset>
            </FormItemWrapper>
        </>
    );
};

export default Colours;