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

export enum TypographyTypeEnum {
    BASE = 'base',
    HEADING = 'heading',
    SUB_HEADING = 'subHeading',
    SIDEBAR = 'sidebar',
    SIDEBAR_HEADING = 'sidebarHeading',
    SIDEBAR_SUB_HEADING = 'sidebarSubHeading',
}

export type TypographyType = {
    base: FontType;
    heading: FontType;
    subHeading: FontType;
    sidebar: FontType;
    sidebarHeading: FontType;
    sidebarSubHeading: FontType;
}

export enum BackgroundColoursEnum {
    Main = 'main',
    Sidebar = 'sidebar',
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
    sidebarWidthPercent: number;
}

export type WizardStoreType = {
    steps: WizardStepProps[];
    paperSize: PaperSizeEnum;
    backgroundColors: BackgroundColoursType;
    typography: TypographyType;
    layoutColumns: LayoutColumnsType;
}