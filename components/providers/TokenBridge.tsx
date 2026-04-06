"use client";

import { theme } from "antd";
import { useEffect } from "react";
import { tokenToCssVars } from "@/components/theme/tokenToCssVar";

interface TokenBridgeProps {
    palettes?: {
        primary?: string[];
        secondary?: string[];
    };
}

export default function TokenBridge({ palettes }: TokenBridgeProps) {
    const { token } = theme.useToken();

    useEffect(() => {
        const vars = tokenToCssVars(token, palettes);

        const cssText = `:root { ${Object.entries(vars)
            .filter(([_, value]) => value !== undefined && value !== null)
            .map(([key, value]) => `${key}: ${value};`)
            .join(' ')} }`;

        let styleTag = document.getElementById('antd-token-vars');
        if (!styleTag) {
            styleTag = document.createElement('style');
            styleTag.id = 'antd-token-vars';
            document.head.appendChild(styleTag);
        }
        styleTag.textContent = cssText;
    }, [token, palettes]);

    return null;
}