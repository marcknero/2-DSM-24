import { CSSProperties,useState } from "react";

function Exercise1() {
      const [nros, setNros] = useState<string>();
      const [raffled,setRaffled] = useState<number[]>([]);

      function raffle(){
        const stop = Math.min(nros,12);

      }
            
      return (
        <>
          <h2>Exercicio 1:</h2>
          <input 
          type='number' 
          value={nros} 
          onChange={(e)=>setNros(e.target.value)}
          placeholder="Digite um numero de 1 a 12" />
          {raffledShow()}
        </>
      );
}

// interface Props {
//     action: () => void;
//     children: React.ReactNode;
// }

const buttonStyle: CSSProperties = {
      backgroundColor: "#567196",
      color: "white",
      padding: "10px 20px",
      marginRight: "10px",
      fontSize: "16px",
      fontWeight: "bold",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      display: "flex", // flexbox para alinhamento
      alignItems: "center", // alinha ícone e texto verticalmente
      gap: "8px", // espaçamento entre ícone e texto
};


export default Exercise1;