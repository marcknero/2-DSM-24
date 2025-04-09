class Size {
    array: number[] = [];
    executionTime: number[] = [];

    add (value:number){
        this.array.push(value);
    }

    print(){
        console.log(this.array);
    }

    printCombinations(): void {
        this.array.forEach(element => {
        console.time('calcularCombinacoes');
        let count:number = 0;
    
        for (let i = 0; i < element; i++) { 
            for (let j = 0; j < element; j++) { 
                for (let k = 0; k < element; k++) { 
                    count++;
                    console.log(`(${i}, ${j}, ${k})`);
                };
            };
        };
        console.log(` tamanho do size: ${element}
            quantas vezes o k foi chamado ${count}`); 
        console.timeEnd('calcularCombinacoes');
        });
    }
    dataCombinations(): void {
        this.array.forEach(element => {
            console.log(element);            
           console.time('calcularCombinacoes');
            let count:number = 0;
        
            for (let i = 0; i < element; i++) { 
                for (let j = 0; j < element; j++) { 
                    for (let k = 0; k < element; k++) { 
                        count++;
                        let temp:number[] = []; // teste comparativo, para verificar se ha mudança significativa
                        temp.push(i); // no tempo de execução ou na entrega com e sem a atriuição dos valores de i, j, k.
                        temp.push(j);
                        temp.push(k);
                        
                    };
                };
            };
            
            console.timeEnd('calcularCombinacoes');
            
          
        });
    }
}

let a = new Size;
a.add(10);
a.add(20);
a.add(30);
a.add(40);
a.add(50);
a.add(60);
a.add(70);
a.add(80);
a.add(90);
a.add(100);
a.add(110);
a.dataCombinations();

