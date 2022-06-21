import { TTheme } from '../types/';

class StyleTheme {
    currentTheme: TTheme;

    static get themes(): TTheme[] {
        return ["LIGHT", "DARK"]
    };

    static get defaultTheme() {
        return StyleTheme.themes[1]
    };

    constructor(theme: TTheme) {

        this.getLocalTheme = this.getLocalTheme.bind(this);
        this.setTheme = this.setTheme.bind(this);

        this._findTheme = this._findTheme.bind(this);
        this._isLocalStorage = this._isLocalStorage.bind(this);

        this.currentTheme = this._findTheme(this.getLocalTheme()) || theme || StyleTheme.defaultTheme;
        this.setTheme(this.currentTheme);
    }


    getLocalTheme() {
        if (this._isLocalStorage()) {
            return localStorage.getItem('theme')
        }
    }

    setTheme(value: TTheme) {
        const newTheme: TTheme | undefined = this._findTheme(value);
        if (!!newTheme) {
            document.querySelector('body')!.className = newTheme.toLowerCase();

            localStorage.setItem('theme', newTheme);
            this.currentTheme = newTheme;
        }
    }

    _findTheme(value?: string | null) {
        return StyleTheme.themes.find(item => item === value);
    }

    _isLocalStorage() {
        try {
            localStorage.setItem("test", "TEST");
            localStorage.removeItem("test");
            return true;
        } catch (e) {
            console.log("LocalStorage isn't available", e)
            return false;
        }
    };

}


export default StyleTheme;