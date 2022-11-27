enum ColourTypeEnum {
    Hex3 = "#RGB",
    Hex4 = "#RGBA",
    Hex6 = "#RRGGBB",
    Hex8 = "#RRGGBBAA",
    RGB = "rgb(R G B)",
    RGBA = "rgba(R G B / A)",
    HSL = "hsl(H S L)",
    HSLA = "hsl(H S L / A)",
};

type ColourMatchRegExp = {
    regExp: RegExp;
    colourType: ColourTypeEnum;
}

const COLOUR_MATCH_REG_EXPS: ColourMatchRegExp[] = [
    { regExp: /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i, colourType: ColourTypeEnum.Hex3 },
    { regExp: /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])$/i, colourType: ColourTypeEnum.Hex4 },
    { regExp: /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i, colourType: ColourTypeEnum.Hex6 },
    { regExp: /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i, colourType: ColourTypeEnum.Hex8 },

    { regExp: /^rgb\(([12]?[0-9]{1,2})(?:\s*,\s*|\s+)([12]?[0-9]{1,2})(?:\s*,\s*|\s+)([12]?[0-9]{1,2})\)$/i, colourType: ColourTypeEnum.RGB },
    { regExp: /^rgba\(([12]?[0-9]{1,2})(?:\s*,\s*|\s+)([12]?[0-9]{1,2})(?:\s*,\s*|\s+)([12]?[0-9]{1,2})(?:\s*,\s*|\s*\/\s*|\s+)(1?[0-9]{1,2}|[01]|[01]\.[0-9]{1,})(%?)\)$/i, colourType: ColourTypeEnum.RGBA },

    { regExp: /^hsl\(([123]?[0-9]{1,2})(?:\s*,\s*|\s+)(1?[0-9]{1,2})%(?:\s*,\s*|\s+)(1?[0-9]{1,2})%\)$/i, colourType: ColourTypeEnum.HSL },
    { regExp: /^hsla\(([123]?[0-9]{1,2})(?:\s*,\s*|\s+)(1?[0-9]{1,2})%(?:\s*,\s*|\s+)(1?[0-9]{1,2})%(?:\s*,\s*|\s*\/\s*|\s+)(1?[0-9]{1,2}|[01]|[01]\.[0-9]{1,})(%?)\)$/i, colourType: ColourTypeEnum.HSLA },
];

export const getColourType = (value: string): ColourTypeEnum | null => COLOUR_MATCH_REG_EXPS.find(colourMatchRegExp => colourMatchRegExp.regExp.test(value.trim()))?.colourType ?? null;
