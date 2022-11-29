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
    SidebarPositionEnum,
    BackgroundColoursEnum,
    TypographyTypeEnum,
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
    fontWeight: 200,
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
    fontWeight: 200,
};

const typography: TypographyType = {
    [TypographyTypeEnum.BASE]: base,
    [TypographyTypeEnum.HEADING]: heading,
    [TypographyTypeEnum.SUB_HEADING]: subHeading,
    [TypographyTypeEnum.SIDEBAR]: sidebar,
    [TypographyTypeEnum.SIDEBAR_HEADING]: sidebarHeading,
    [TypographyTypeEnum.SIDEBAR_SUB_HEADING]: sidebarSubHeading,
}

const backgroundColors: BackgroundColoursType = {
    [BackgroundColoursEnum.Main]: '#FFFFFF',
    [BackgroundColoursEnum.Sidebar]: '#FFCC00',
};

const layoutColumns: LayoutColumnsType = {
    sidebar: false,
    sidebarPosition: SidebarPositionEnum.Right,
    sidebarWidthPercent: 40,
};

const WizardStore = new Store<WizardStoreType>({
    steps,
    paperSize,
    backgroundColors,
    typography,
    layoutColumns,
});

export default WizardStore;
