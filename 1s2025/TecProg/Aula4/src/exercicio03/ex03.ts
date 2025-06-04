class Carro {
    private _marca: string = "";
    private _modelo: string = "";

    get marca(): string {
        return this._marca;
    }
    get modelo(): string {
        return this._modelo;
    }
    set marca(_marca:string){
        this._marca = _marca;
    }
    set modelo(_modelo:string){
        this._modelo = _modelo;
    }
}

export {Carro};