export class Node {
    private name: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private info: Record<string, any>;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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