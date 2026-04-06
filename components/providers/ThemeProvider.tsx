"use client";

import { ConfigProvider } from "antd";
import { themeMap, palettesMap, AppTheme } from "@/components/theme/themeMap";
import TokenBridge from "./TokenBridge";

interface Props {
    theme?: AppTheme;
    children: React.ReactNode;
}

export default function ThemeProvider({ theme = "param", children }: Props) {
    const activeTheme = themeMap[theme];
    const activePalettes = palettesMap[theme];

    return (
        <ConfigProvider theme={activeTheme}>
            <TokenBridge palettes={activePalettes} />
            {children}
        </ConfigProvider>
    );
}