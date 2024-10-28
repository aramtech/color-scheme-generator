import { argbFromHex, themeFromSourceColor } from "@material/material-color-utilities";
import color from "color";
import { Merge } from "../common";

const opacity = {
    level1: 0.08,
    level2: 0.12,
    level3: 0.16,
    level4: 0.38,
};

export function createThemeFromSystemSchemes(schemes: any) {
    const { light, dark, palettes } = generateSchemesFromSourceColor(schemes.light.primary);
    schemes = {
        light: { ...light, ...schemes.light },
        dark: { ...dark, ...schemes.dark },
    };
    return {
        light: { ...schemes.light, ...generateMissingFields(schemes.light, palettes, "light") },
        dark: { ...schemes.dark, ...generateMissingFields(schemes.dark, palettes, "dark") },
    };
}

export type MD3Colors = {
    primary: string;
    primaryContainer: string;
    secondary: string;
    secondaryContainer: string;
    tertiary: string;
    tertiaryContainer: string;
    surface: string;
    surfaceVariant: string;
    surfaceDisabled: string;
    background: string;
    error: string;
    errorContainer: string;
    onPrimary: string;
    onPrimaryContainer: string;
    onSecondary: string;
    onSecondaryContainer: string;
    onTertiary: string;
    onTertiaryContainer: string;
    onSurface: string;
    onSurfaceVariant: string;
    onSurfaceDisabled: string;
    onError: string;
    onErrorContainer: string;
    onBackground: string;
    outline: string;
    outlineVariant: string;
    inverseSurface: string;
    inverseOnSurface: string;
    inversePrimary: string;
    shadow: string;
    scrim: string;
    backdrop: string;
};

export type Colors = {
    success: string;

    black: string;

    white: string;

    primary: string;

    warning: string;

    error: string;

    theme: string;

    slighterYellow: string;

    slighterGreen: string;

    slighterBlue: string;

    slighterPurple: string;

    slightGrey: string;

    slightGreen: string;

    slightYellow: string;

    slightRed: string;

    slightBlue: string;

    noiceGreen: string;

    noiceYellow: string;

    noiceRed: string;

    noiceBlue: string;

    blue1: string;

    royal: string;

    primaryButtons: string;

    info: string;

    secondary: string;

    secondary2: string;

    secondary3: string;

    secondary4: string;

    secondary5: string;

    fmaSecondary: string;

    greyButton: string;

    lightgrey: string;

    fmaiconsecondary: string;

    "almost-black": string;

    fmared: string;

    accent: string;

    onPrimary: string;

    primaryContainer: string;

    onPrimaryContainer: string;

    onSecondary: string;

    secondaryContainer: string;

    onSecondaryContainer: string;

    tertiary: string;

    onTertiary: string;

    tertiaryContainer: string;

    onTertiaryContainer: string;

    onError: string;

    errorContainer: string;

    onErrorContainer: string;

    background: string;

    onBackground: string;

    surface: string;

    onSurface: string;

    surfaceVariant: string;

    onSurfaceVariant: string;

    outline: string;

    outlineVariant: string;

    shadow: string;

    scrim: string;

    inverseSurface: string;

    inverseOnSurface: string;

    inversePrimary: string;

    surfaceDisabled: string;

    onSurfaceDisabled: string;

    backdrop: string;

    surfaceContainer: string;

    surfaceContainerLow: string;

    surfaceContainerLowest: string;

    surfaceContainerHigh: string;

    surfaceContainerHighest: string;

    surfaceBright: string;

    surfaceDim: string;

    surfaceTint: string;
};

export type ColorScheme = Merge<Colors, MD3Colors>;

export const colors = {
    success: "#4CAF50",
    black: "#000000",
    white: "#ffffff",

    // primary: "#FE3C50",
    primary: "#FE3C50",
    warning: "#FB8C00",
    error: "#FF5252",
    theme: "#064C86",

    // slighter
    slighterYellow: "#FFEADA",
    slighterGreen: "#DDF9E4",
    slighterBlue: "#E4F0FF",
    slighterPurple: "#F2EEF7",

    // slights
    slightGrey: "#F5F5F5",
    slightGreen: "#BAF2D0",
    slightYellow: "#FEE7A5",
    slightRed: "#FF787C",
    slightBlue: "#C6E7FF",

    // noice
    noiceGreen: "#02A443",
    noiceYellow: "#FAD160",
    noiceRed: "#FD2831",
    noiceBlue: "#51A6E3",

    // blue
    blue1: "#2F93F6",
    royal: "#064c86",
    primaryButtons: "#4372EA",

    // light blue
    info: "#00CAE3",

    // greys
    secondary: "#9C27b0",
    secondary2: "#EFEDF0",
    secondary3: "#CCD2E3",
    secondary4: "#888891",
    secondary5: "#404040",

    fmaSecondary: "#686868",
    greyButton: "#F2F2F4",
    lightgrey: "#C7C7C7",
    fmaiconsecondary: "#A8A8A8",
    "almost-black": "#18020C",

    // reds
    fmared: "#FE3C50",
    accent: "#e91e63",
};

export function createThemeFromSourceColor(sourceColor: any): {
    light: ColorScheme;
    dark: ColorScheme;
} {
    const { light, dark, palettes } = generateSchemesFromSourceColor(sourceColor);
    return {
        light: { ...colors, ...light, ...generateMissingFields(light, palettes, "light") } as any,
        dark: { ...colors, ...dark, ...generateMissingFields(dark, palettes, "dark") } as any,
    };
}

function generateMissingFields(scheme: any, palettes: any, colorScheme: any) {
    const customColors = {
        surfaceDisabled:
            process.env.NODE_ENV === "test" ? "#FFF" : color(scheme.onSurface).alpha(opacity.level2).rgb().string(),
        onSurfaceDisabled:
            process.env.NODE_ENV === "test" ? "#FFF" : color(scheme.onSurface).alpha(opacity.level4).rgb().string(),
        backdrop:
            process.env.NODE_ENV === "test"
                ? "#FFF"
                : color(palettes.neutralVariant.tone(20)).alpha(0.4).rgb().string(),
        surfaceContainer:
            process.env.NODE_ENV === "test"
                ? "#FFF"
                : color(palettes.neutral.tone(colorScheme === "dark" ? 12 : 94)).hex(),
        surfaceContainerLow:
            process.env.NODE_ENV === "test"
                ? "#FFF"
                : color(palettes.neutral.tone(colorScheme === "dark" ? 10 : 96)).hex(),
        surfaceContainerLowest:
            process.env.NODE_ENV === "test"
                ? "#FFF"
                : color(palettes.neutral.tone(colorScheme === "dark" ? 4 : 100)).hex(),
        surfaceContainerHigh:
            process.env.NODE_ENV === "test"
                ? "#FFF"
                : color(palettes.neutral.tone(colorScheme === "dark" ? 17 : 92)).hex(),
        surfaceContainerHighest:
            process.env.NODE_ENV === "test"
                ? "#FFF"
                : color(palettes.neutral.tone(colorScheme === "dark" ? 22 : 90)).hex(),
        surfaceBright:
            process.env.NODE_ENV === "test"
                ? "#FFF"
                : color(palettes.neutral.tone(colorScheme === "dark" ? 24 : 98)).hex(),
        surfaceDim:
            process.env.NODE_ENV === "test"
                ? "#FFF"
                : color(palettes.neutral.tone(colorScheme === "dark" ? 6 : 87)).hex(),
        surfaceTint: scheme.primary,
    };

    return {
        ...customColors,
    };
}

function generateSchemesFromSourceColor(sourceColor: any) {
    const { schemes, palettes } = themeFromSourceColor(argbFromHex(sourceColor));

    return {
        light: transformScheme(schemes.light),
        dark: transformScheme(schemes.dark),
        palettes,
    };
}

function transformScheme(scheme: any) {
    const jsonScheme = scheme.toJSON();

    return Object.entries(jsonScheme).reduce((acc, [key, value]: any) => {
        return {
            ...acc,
            [key]: process.env.NODE_ENV === "test" ? "#FFF" : color(value).hex(),
        };
    }, {});
}
