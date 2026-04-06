// themeMap.ts
import { paramTheme, paramPalettes } from "./themes/param";
import { finrotaTheme, finrotaPalettes } from "./themes/finrota";
import { yolparamTheme, yolparamPalettes } from "./themes/yolparam";

export type AppTheme = "param" | "finrota" | "yolparam";

export const themeMap = {
    param: paramTheme,
    finrota: finrotaTheme,
    yolparam: yolparamTheme
};

export const palettesMap = {
    param: paramPalettes,
    finrota: finrotaPalettes,
    yolparam: yolparamPalettes
};