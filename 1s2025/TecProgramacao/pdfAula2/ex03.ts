class Aleatorio {
    get():number {
        return Math.floor(Math.random()*100);
    };
};
let b = new Aleatorio();
console.log(`
    ${b.get()}
    ${b.get()}
    ${b.get()}
    ${b.get()}
    ${b.get()}
    `);