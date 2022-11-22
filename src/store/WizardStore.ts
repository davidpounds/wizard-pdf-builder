import { Store } from 'pullstate';
import { WizardStepProps } from '../components/WizardStep';
import SizeAndLayout from '../components/SizeAndLayout';
import ColoursAndTypography from '../components/ColoursAndTypography';
import {
    PaperSizeEnum,
    FontType,
    TypographyType,
    BackgroundColoursType,
    LayoutColumnsType,
    WizardStoreType,
} from '../types/store.types';

const steps: WizardStepProps[] = [
    {
        id: crypto.randomUUID(),
        name: 'Size and layout',
        showPane: false,
        Component: SizeAndLayout,
    },
    {
        id: crypto.randomUUID(),
        name: 'Colours and typography',
        showPane: false,
        Component: ColoursAndTypography,
    },
];

const paperSize = PaperSizeEnum.A4;

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

const sidebar: FontType = {
    fontFamily: SANS_SERIF_FONT,
    fontSizePt: 12,
    fontColour: '#444',
    fontWeight: 400,
};

const sidebarHeading: FontType = {
    fontFamily: SANS_SERIF_FONT,
    fontSizePt: 24,
    fontColour: '#666',
    fontWeight: 200,
};

const sidebarSubHeading: FontType = {
    fontFamily: SANS_SERIF_FONT,
    fontSizePt: 18,
    fontColour: '#666',
    fontWeight: 600,
};

const typography: TypographyType = {
    base,
    heading,
    subHeading,
    sidebar,
    sidebarHeading,
    sidebarSubHeading,
}

const backgroundColors: BackgroundColoursType = {
    main: '#fff',
    sidebar: '#eee',
};

const layoutColumns: LayoutColumnsType = {
    sidebar: false,
    sidebarWidth: 40,
};

const WizardStore = new Store<WizardStoreType>({
    steps,
    paperSize,
    backgroundColors,
    typography,
    layoutColumns,
});

export default WizardStore;
