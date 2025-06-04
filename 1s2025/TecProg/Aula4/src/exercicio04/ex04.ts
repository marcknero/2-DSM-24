class Carro2 {
    constructor(private _marca: string,private _modelo: string){
        this._marca = _marca;
        this._modelo = _modelo;
    }

    get marca(): string {
        return this._marca;
    }
    get modelo(): string {
        return this._modelo;
    }
}

export {Carro2};