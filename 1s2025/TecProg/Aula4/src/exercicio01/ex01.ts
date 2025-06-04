class Operacao {
    private x: number;
    private y: number;
    public constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    public somar(): number {
        return this.x + this.y;
    }
}

export {Operacao};