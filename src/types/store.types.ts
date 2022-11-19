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
}

export type BackgroundColoursType = {
    main: string;
    sidebar: string;
}
