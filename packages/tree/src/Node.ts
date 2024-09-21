export class Node {
    private name: string;
    private info: Record<string, any>;

    constructor(name: string, info?: Record<string, any>) {
        this.name = name;
        this.info = info || {};
    }

    getName () {
        return this.name;
    }

    getInfo () {
        return JSON.parse(JSON.stringify(this.info));
    }
}