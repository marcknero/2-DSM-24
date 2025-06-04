class Carro3 {
    private static _count: number = 0;
    constructor(private _marca: string, private _modelo: string) {
        this._marca = _marca;
        this._modelo = _modelo;
        Carro3._count++
    }

    get marca(): string {
        return this._marca;
    }
    get modelo(): string {
        return this._modelo;
    }
    static get count(): number {
        return Carro3._count;
    }
}

export { Carro3 };