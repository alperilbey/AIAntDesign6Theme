import { ThemeConfig } from "antd";
import { generate } from '@ant-design/colors';

const primaryPalette = generate('#00BBB4');   // colorPrimary
const secondaryPalette = generate('#450D87'); // colorBgSolid

export const paramTheme: ThemeConfig = {
    hashed: false,
    cssVar: {
        prefix: 'param',
        key: 'param-theme',
    },
    token: {
        colorPrimary: primaryPalette[5],
        colorBgSolid: secondaryPalette[5],
        colorLink: secondaryPalette[5],
        colorText: "#191919",
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
export const paramPalettes = {
    primary: primaryPalette,
    secondary: secondaryPalette,
};