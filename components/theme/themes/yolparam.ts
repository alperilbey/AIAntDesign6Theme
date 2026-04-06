import { ThemeConfig } from "antd";
import { generate } from '@ant-design/colors';

const primaryPalette = generate('#A4EE00');   // colorPrimary
const secondaryPalette = generate('#0036FF'); // colorBgSolid

export const yolparamTheme: ThemeConfig = {
    hashed: false,
    cssVar: {
        prefix: 'yolparam',
        key: 'yolparam-theme',
    },
    token: {
        colorPrimary: "#A4EE00",
        colorBgSolid: '#0036FF',
        colorLink: "#0036FF",
        colorText: "#020101ff",
        colorTextSecondary: "#7D8E9F",
        colorTextTertiary: "#ccd1d5",
        fontSize: 18,
        fontSizeSM: 14,
        fontSizeLG: 20,
        fontSizeXL: 26,
        fontFamily: "Param, sans-serif",
    },
    components: {
        Typography: {
            fontWeightStrong: 700,
            fontSizeHeading1: 48,
            fontSizeHeading2: 40,
            fontSizeHeading3: 32,
            fontSizeHeading4: 24,
            fontSizeHeading5: 16,
        },
        Button: {
            fontSize: 18,
            primaryShadow: 'none',
            paddingInline: 40,
            paddingBlock: 8,
            contentLineHeight: 2,
            borderRadius: 12,
            fontWeight: 600,
            controlHeight: 48,
            controlHeightSM: 32,
            controlHeightLG: 56,
            primaryColor: "#000000",

        },
        Input: {
            paddingInline: 14,
            paddingBlock: 8,
            lineHeight: 1,
            borderRadius: 8,
            controlHeight: 40,
        },
        Select: {
            controlHeight: 40,
            borderRadius: 8,
        },
        Form: {
            itemMarginBottom: 24,
        }
    }
};

export const yolparamPalettes = {
    primary: primaryPalette,
    secondary: secondaryPalette,
};