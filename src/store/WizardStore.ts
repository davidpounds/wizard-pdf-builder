import { Store } from 'pullstate';
import { WizardStepProps } from '../components/WizardStep';
import { FontType, TypographyType, BackgroundColoursType } from '../types/store.types';

const steps: WizardStepProps[] = [
    {
        id: crypto.randomUUID(),
        name: 'Size and colours',
        showPane: false,
    },
    {
        id: crypto.randomUUID(),
        name: 'Typography',
        showPane: false,
    },
    {
        id: crypto.randomUUID(),
        name: 'Layout',
        showPane: false,
    },
    {
        id: crypto.randomUUID(),
        name: 'Images',
        showPane: false,
    },
];

const SANS_SERIF_FONT: string = 'Helvetica, Arial, sans-serif';

const base: FontType = {
    fontFamily: SANS_SERIF_FONT,
    fontSizePt: 12,
    fontColour: '#444',
    fontWeight: 400,
};

const heading: FontType = {
    fontFamily: SANS_SERIF_FONT,
    fontSizePt: 24,
    fontColour: '#666',
    fontWeight: 200,
};

const subHeading: FontType = {
    fontFamily: SANS_SERIF_FONT,
    fontSizePt: 18,
    fontColour: '#666',
    fontWeight: 600,
};

const typography: TypographyType = {
    base,
    heading,
    subHeading,
}

const backgroundColors: BackgroundColoursType = {
    main: '#fff',
    sidebar: '#eee',
};

const WizardStore = new Store({
    steps,
    backgroundColors,
    typography,
});

export default WizardStore;
