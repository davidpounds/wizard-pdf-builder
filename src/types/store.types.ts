import { WizardStepProps } from '../components/WizardStep';
import { PaperSizeEnum } from '../components/form/PaperSize';

export type FontType = {
    fontFamily: string;
    fontSizePt: number;
    fontColour: string;
    fontWeight: number;
}

export type TypographyType = {
    base: FontType;
    heading: FontType;
    subHeading: FontType;
    sidebar: FontType;
    sidebarHeading: FontType;
    sidebarSubHeading: FontType;
}

export type BackgroundColoursType = {
    main: string;
    sidebar: string;
}

export type LayoutColumnsType = {
    sidebar: boolean;
    sidebarWidth: number;
}

export type WizardStoreType = {
    steps: WizardStepProps[];
    paperSize: PaperSizeEnum;
    backgroundColors: BackgroundColoursType;
    typography: TypographyType;
    layoutColumns: LayoutColumnsType;
}