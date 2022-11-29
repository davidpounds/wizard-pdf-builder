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
    BASE = 'Page',
    HEADING = 'Heading',
    SUB_HEADING = 'Sub-heading',
    SIDEBAR = 'Sidebar',
    SIDEBAR_HEADING = 'Sidebar heading',
    SIDEBAR_SUB_HEADING = 'Sidebar sub-heading',
}

export type TypographyType = {
    [TypographyTypeEnum.BASE]: FontType;
    [TypographyTypeEnum.HEADING]: FontType;
    [TypographyTypeEnum.SUB_HEADING]: FontType;
    [TypographyTypeEnum.SIDEBAR]: FontType;
    [TypographyTypeEnum.SIDEBAR_HEADING]: FontType;
    [TypographyTypeEnum.SIDEBAR_SUB_HEADING]: FontType;
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