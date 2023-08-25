interface WebAppManifestJson {
    /** PWA 이름 */
    name: string
    description: string
    /** PWA 아이콘 */
    icons: Array<WebAppManifestIcon>
    lang?: string
    dir?: WebAppManifestDir
    short_name?: string
    id?: string
    start_url?: string
    theme_color?: Color
    background_color?: Color
    scope?: string
    display?: WebAppManifestDisplay
    display_override: WebAppManifestDisplayOverride[]
    orientation?: WebAppManifestOrientation
    screenshots?: WebAppManifestSreenshot[]
}

// REFERENCE : https://stackoverflow.com/a/71909826
type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type Color = RGB | RGBA | HEX;

interface WebAppManifestIcon {
    src: string
    sizes?: string
    type?: string
}

interface WebAppManifestSreenshot {
    src: string
    type?: string
    sizes?: string
    form_factor?: string
}

/**
 * REFERENCE : https://www.w3.org/TR/appmanifest/#dir-member
 * auto (default) - No explicit directionality.
 * ltr - Left-to-right text.
 * rtl - Right-to-left text.
 */
type WebAppManifestDir = 'auto' | 'ltr' | 'rtl';

type WebAppManifestDisplay = 'fullscreen' | 'standalone' | 'minimal-ui' | 'browser';

type WebAppManifestDisplayOverride = 'fullscreen' | 'standalone' | 'minimal-ui' | 'browser' | 'window-controls-overlay';

type WebAppManifestOrientation = 'any' | 'natural' | 'landscape' | 'landscape-primary' | 'landscape-secondary' | 'portrait' | 'portrait-primary' | 'portrait-secondary';

export class WebAppManifest {
    private _name: string | null = null
    private _description: string | null = null
    private _lang: string | null = null
    private _dir: WebAppManifestDir | null = null
    private _short_name: string | null = null
    private _icons: Array<WebAppManifestIcon> = []
    private _id: string | null = null
    private _start_url: string | null = null
    private _theme_color: Color | null = null
    private _background_color: Color | null = null
    private _scope: string | null = null
    private _display: WebAppManifestDisplay | null = null
    private _display_override: WebAppManifestDisplayOverride[] = []
    private _orientation: WebAppManifestOrientation | null = null
    private _screenshots: WebAppManifestSreenshot[] = [];

    constructor() { }

    getName() {
        return this._name;
    }

    setName(name: string, lang?: string, dir?: WebAppManifestDir): WebAppManifest {
        this._name = name;

        if (typeof lang === 'string') {
            this._lang = lang;
        }

        if (typeof dir === 'string') {
            this._dir = dir;
        }

        return this;
    }

    getShortName() {
        return this._short_name;
    }

    setShortName(short_name: string): WebAppManifest {
        this._short_name = short_name;
        return this;
    }

    appendIcon(icon: WebAppManifestIcon): WebAppManifest {
        this._icons.push(icon);
        return this;
    }

    public getIcon(): Array<WebAppManifest>;
    public getIcon(index: number): WebAppManifest;
    public getIcon(arg1?: any): any {
        if (typeof arg1 === 'number') { return this._icons[arg1]; }
        return this._icons;
    }

    setId(id: string): WebAppManifest {
        this._id = id;
        return this;
    }

    getId(): string {
        return this._id as string;
    }

    setStartUrl(start_url: string): WebAppManifest {
        this._start_url = start_url;
        return this;
    }

    setThemeColor(theme_color: Color): WebAppManifest {
        this._theme_color = theme_color;
        return this;
    }

    setBackgroundColor(background_color: Color): WebAppManifest {
        this._background_color = background_color;
        return this;
    }

    setScope(scope: string): WebAppManifest {
        this._scope = scope;
        return this;
    }

    setDisplay(display: WebAppManifestDisplay): WebAppManifest {
        this._display = display;
        return this;
    }

    appendDisplayOverride(display_override: WebAppManifestDisplayOverride): WebAppManifest {
        this._display_override.push(display_override);
        return this;
    }

    setDescription(description: string): WebAppManifest {
        this._description = description;
        return this;
    }

    setOrientation(orientation: WebAppManifestOrientation): WebAppManifest {
        this._orientation = orientation;
        return this;
    }

    appendScreenshots(screenshots: WebAppManifestSreenshot) {
        this._screenshots.push(screenshots);
    }

    json(): WebAppManifestJson {
        const json = {} as WebAppManifestJson;

        json.name = this._name as string;

        if (this._lang != null) {
            json.lang = this._lang;
        }

        if (this._dir != null) {
            json.dir = this._dir;
        }

        if (this._short_name != null) {
            json.short_name = this._short_name;
        }


        if (this._description != null) {
            json.description = this._description;
        }

        if (this._icons != null && this._icons.length > 0) {
            json.icons = this._icons;
        }

        if (this._id != null) {
            json.id = this._id;
        }

        if (this._start_url != null) {
            json.start_url = this._start_url;
        }

        if (this._theme_color != null) {
            json.theme_color = this._theme_color;
        }

        if (this._background_color != null) {
            json.background_color = this._background_color;
        }

        if (this._scope != null) {
            json.scope = this._scope;
        }

        if (this._display != null) {
            json.display = this._display;
        }

        if (this._display_override != null && this._display_override.length > 0) {
            json.display_override = this._display_override;
        }

        if (this._orientation != null) {
            json.orientation = this._orientation;
        }

        if (this._screenshots != null && this._screenshots.length > 0) {
            json.screenshots = this._screenshots;
        }

        return json as WebAppManifestJson;
    }

    toJSON(): WebAppManifestJson {
        return this.json();
    }

    toString(): string {
        return JSON.stringify(this, null, 3);
    }
}