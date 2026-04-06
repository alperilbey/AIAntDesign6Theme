export function tokenToCssVars(token: any, palettes?: { primary?: string[]; secondary?: string[] }) {

    const map: Record<string, string> = {
        "--ant-color-primary": token.colorPrimary,
        "--ant-color-secondary": token.colorBgSolid,


        "--ant-color-success": token.colorSuccess,
        "--ant-color-warning": token.colorWarning,
        "--ant-color-error": token.colorError,
        "--ant-color-info": token.colorInfo,
        "--ant-color-link": token.colorLink,
        "--ant-color-white": token.colorWhite,
        "--ant-color-text": token.colorText,
        "--ant-color-text-secondary": token.colorTextSecondary,
        "--ant-color-text-tertiary": token.colorTextTertiary,

        "--ant-font-size-heading-1": `${token.fontSizeHeading1}px`,
        "--ant-font-size-heading-2": `${token.fontSizeHeading2}px`,
        "--ant-font-size-heading-3": `${token.fontSizeHeading3}px`,
        "--ant-font-size-heading-4": `${token.fontSizeHeading4}px`,
        "--ant-font-size-heading-5": `${token.fontSizeHeading5}px`,
        "--ant-line-height-heading-1": `${token.lineHeightHeading1}`,
        "--ant-line-height-heading-2": `${token.lineHeightHeading2}`,
        "--ant-line-height-heading-3": `${token.lineHeightHeading3}`,
        "--ant-line-height-heading-4": `${token.lineHeightHeading4}`,
        "--ant-line-height-heading-5": `${token.lineHeightHeading5}`,

        "--ant-font-size-base": `${token.fontSize}px`,
        "--ant-font-size-sm": `${token.fontSizeSM}px`,
        "--ant-font-size-lg": `${token.fontSizeLG}px`,
        "--ant-font-size-xl": `${token.fontSizeXL}px`,

        "--ant-border-radius": `${token.borderRadius}px`,
    };

    // Palet tonları
    if (palettes?.primary) {
        palettes.primary.forEach((color, idx) => {
            map[`--ant-color-primary-${idx + 1}`] = color;
        });
    }
    if (palettes?.secondary) {
        palettes.secondary.forEach((color, idx) => {
            map[`--ant-color-secondary-${idx + 1}`] = color;
        });
    }

    return map;
}