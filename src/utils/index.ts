import React from 'react';

export const selectValuesFromEnum = (enumInput: any): Map<number, string> => {
    const filteredKeys = Object.entries(enumInput).filter(([_, value]) => Number.isNaN(Number(value)));
    const selectValuesMap = filteredKeys.reduce((acc, [key, value]) => {
        const keyVal = Number.parseInt(key, 10);
        if (!Number.isNaN(keyVal)) {
            acc.set(keyVal, String(value));
        }
        return acc;
    }, new Map<number, string>());
    return selectValuesMap;
};

const toDotList = (obj: object): object => {
    const walk = (into: { [index: string]: any }, obj: any, prefix: string[] = []) => {
        Object.entries(obj).forEach(([key, val]) => {
            if (typeof val === "object" && !Array.isArray(val)) {
                walk(into, val, [...prefix, key]);
            } else {
                const dotKey = [...prefix, key].join(".");
                into[dotKey] = val;
            }
        });
    }
    const out: object = {};
    walk(out, obj);
    return out;
};

export const makeCSSCustomProperties = (properties: object): React.CSSProperties => {
    const dottedProperties = toDotList(properties);
    const objectEntriesWithPrefix = Object.entries(dottedProperties)
        .filter(([_, value]) => typeof value !== "boolean")
        .map(([key, value]) => {
            const isPercent = key.endsWith('Percent');
            const dotKey = `--${key.replaceAll(/[\.\s]/g, "-")}`.replace(/Percent$/, '');
            const valueWithUnits = isPercent ? `${value}%` : value;
            return [dotKey, valueWithUnits];
        });
    return Object.fromEntries(objectEntriesWithPrefix) as React.CSSProperties;
};

export const mmToInch = (mm: number): number => mm / 25.4;
