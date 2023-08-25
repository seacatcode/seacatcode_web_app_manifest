interface WebAppManifestJson {
    name: string;
    description: string;
    icons: Array<WebAppManifestIcon>;
    lang?: string;
    dir?: WebAppManifestDir;
    short_name?: string;
    id?: string;
    start_url?: string;
    theme_color?: Color;
    background_color?: Color;
    scope?: string;
    display?: WebAppManifestDisplay;
    display_override: WebAppManifestDisplayOverride[];
    orientation?: WebAppManifestOrientation;
    screenshots?: WebAppManifestSreenshot[];
}
type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type Color = RGB | RGBA | HEX;
interface WebAppManifestIcon {
    src: string;
    sizes?: string;
    type?: string;
}
interface WebAppManifestSreenshot {
    src: string;
    type?: string;
    sizes?: string;
    form_factor?: string;
}
type WebAppManifestDir = 'auto' | 'ltr' | 'rtl';
type WebAppManifestDisplay = 'fullscreen' | 'standalone' | 'minimal-ui' | 'browser';
type WebAppManifestDisplayOverride = 'fullscreen' | 'standalone' | 'minimal-ui' | 'browser' | 'window-controls-overlay';
type WebAppManifestOrientation = 'any' | 'natural' | 'landscape' | 'landscape-primary' | 'landscape-secondary' | 'portrait' | 'portrait-primary' | 'portrait-secondary';
export declare class WebAppManifest {
    private _name;
    private _description;
    private _lang;
    private _dir;
    private _short_name;
    private _icons;
    private _id;
    private _start_url;
    private _theme_color;
    private _background_color;
    private _scope;
    private _display;
    private _display_override;
    private _orientation;
    private _screenshots;
    constructor();
    getName(): string | null;
    setName(name: string, lang?: string, dir?: WebAppManifestDir): WebAppManifest;
    getShortName(): string | null;
    setShortName(short_name: string): WebAppManifest;
    appendIcon(icon: WebAppManifestIcon): WebAppManifest;
    getIcon(): Array<WebAppManifest>;
    getIcon(index: number): WebAppManifest;
    setId(id: string): WebAppManifest;
    getId(): string;
    setStartUrl(start_url: string): WebAppManifest;
    setThemeColor(theme_color: Color): WebAppManifest;
    setBackgroundColor(background_color: Color): WebAppManifest;
    setScope(scope: string): WebAppManifest;
    setDisplay(display: WebAppManifestDisplay): WebAppManifest;
    appendDisplayOverride(display_override: WebAppManifestDisplayOverride): WebAppManifest;
    setDescription(description: string): WebAppManifest;
    setOrientation(orientation: WebAppManifestOrientation): WebAppManifest;
    appendScreenshots(screenshots: WebAppManifestSreenshot): void;
    json(): WebAppManifestJson;
    toJSON(): WebAppManifestJson;
    toString(): string;
}
export {};
//# sourceMappingURL=index.d.ts.map