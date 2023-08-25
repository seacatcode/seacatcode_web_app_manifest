"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebAppManifest = void 0;
class WebAppManifest {
    constructor() {
        this._name = null;
        this._description = null;
        this._lang = null;
        this._dir = null;
        this._short_name = null;
        this._icons = [];
        this._id = null;
        this._start_url = null;
        this._theme_color = null;
        this._background_color = null;
        this._scope = null;
        this._display = null;
        this._display_override = [];
        this._orientation = null;
        this._screenshots = [];
    }
    getName() {
        return this._name;
    }
    setName(name, lang, dir) {
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
    setShortName(short_name) {
        this._short_name = short_name;
        return this;
    }
    appendIcon(icon) {
        this._icons.push(icon);
        return this;
    }
    getIcon(arg1) {
        if (typeof arg1 === 'number') {
            return this._icons[arg1];
        }
        return this._icons;
    }
    setId(id) {
        this._id = id;
        return this;
    }
    getId() {
        return this._id;
    }
    setStartUrl(start_url) {
        this._start_url = start_url;
        return this;
    }
    setThemeColor(theme_color) {
        this._theme_color = theme_color;
        return this;
    }
    setBackgroundColor(background_color) {
        this._background_color = background_color;
        return this;
    }
    setScope(scope) {
        this._scope = scope;
        return this;
    }
    setDisplay(display) {
        this._display = display;
        return this;
    }
    appendDisplayOverride(display_override) {
        this._display_override.push(display_override);
        return this;
    }
    setDescription(description) {
        this._description = description;
        return this;
    }
    setOrientation(orientation) {
        this._orientation = orientation;
        return this;
    }
    appendScreenshots(screenshots) {
        this._screenshots.push(screenshots);
    }
    json() {
        const json = {};
        json.name = this._name;
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
        return json;
    }
    toJSON() {
        return this.json();
    }
    toString() {
        return JSON.stringify(this, null, 3);
    }
}
exports.WebAppManifest = WebAppManifest;
