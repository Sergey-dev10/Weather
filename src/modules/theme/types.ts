export enum Theme {
    LIGHT = 'LIGHT',
    DARK = 'DARK',
}

export interface ThemeState {
    theme: string | Theme;
}