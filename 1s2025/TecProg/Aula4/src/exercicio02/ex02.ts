class Operacao2 {
    public constructor(private x: number, private y: number) {
        this.x = x;
        this.y = y;
    }
    public somar(): number {
        return this.x + this.y;
    }
}

export {Operacao2};