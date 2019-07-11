export class LocalStorage {
    public localStorage: any;
    constructor() {
        if (!localStorage) {
            throw new Error('Current browser does not support Local Storage');
        }
        this.localStorage = localStorage;
    }

    public set(key: string, value: string) {
        this.localStorage[key] = value;
    }

    public get(key: string) {
        return this.localStorage[key];
    }

    public remove(key: string) {
        this.localStorage.removeItem(key);
    }

    public setObject(key: string, value: object) {
        this.localStorage[key] = JSON.stringify(value);
    }

    public getObject<T>(key: string): T {
        return JSON.parse(this.localStorage[key] || null);
    }
}
