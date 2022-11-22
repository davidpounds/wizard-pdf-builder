import { WizardStepProps } from '../components/WizardStep';

export enum PaperSizeEnum {
    A4,
    Letter,
};

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