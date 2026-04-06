import { ThemeConfig } from "antd";
import { generate } from '@ant-design/colors';

const primaryPalette = generate('#FF4D4F');   // colorPrimary
const secondaryPalette = generate('#1a428a'); // colorBgSolid

export const finrotaTheme: ThemeConfig = {
    hashed: false,
    cssVar: {
        prefix: 'finrota',
        key: 'finrota-theme',
    },
    token: {
        colorBgSolid: '#FF4D4F',
        colorPrimary: '#1a428a',
        colorLink: '#FF4D4F',
        colorText: "#191919",
        colorTextSecondary: "#7D8E9F",
        colorTextTertiary: "#ccd1d5",
        fontSize: 14,
        fontSizeSM: 12,
        fontSizeLG: 18,
        fontSizeXL: 24,
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

export const finrotaPalettes = {
    primary: primaryPalette,
    secondary: secondaryPalette,
};