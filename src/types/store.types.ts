import { WizardStepProps } from '../components/WizardStep';

export enum PaperSizeEnum {
    A4,
    Letter,
};

export enum PaperSizeUnitsEnum {
    Millimeter,
    Inch,
};

export type PaperSizePropertiesType = {
    size: PaperSizeEnum;
    aspectRatio: number;
    width: number;
    height: number;
    units: PaperSizeUnitsEnum;
}

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

export enum SidebarPositionEnum {
    Left,
    Right,
}

export type LayoutColumnsType = {
    sidebar: boolean;
    sidebarPosition: SidebarPositionEnum;
    sidebarWidth: number;
}

export type WizardStoreType = {
    steps: WizardStepProps[];
    paperSize: PaperSizeEnum;
    backgroundColors: BackgroundColoursType;
    typography: TypographyType;
    layoutColumns: LayoutColumnsType;
}