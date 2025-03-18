import { CSSProperties,useState } from "react";

function Exercise2() {
      const [nros, setNros] = useState<string>();
      const [list,setList] = useState<number[]>([]);


      function set(value:number){
        setList((prev)=> [...prev,value]);
        setNros('');
    
      }

      function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>){
        if(e.key === 'Enter' && nros !== '' && nros !== undefined){
            set(parseInt(nros));
        }}
            
      return (
        <>
        <div style={ex1Style}>
          <h2>Exercicio 2:</h2>
          <input 
          type='number' 
          value={nros} 
          onChange={(e)=>{setNros(e.target.value)}}
          onKeyDown={handleKeyDown} 
          placeholder="Digite um numero de 1 a 12" />
          <div style={divBallStyle}>{list.map((value,index)=> {
            return <Ball key={index} label={value}/>
          })}
          </div>
          </div>
        </>
      );
}

interface BallProps {
    label: number;
}

function Ball({label}: BallProps) {
  return ( <>
    <button style={ballStyle}>{label}</button>
  </>
  );
}

const divBallStyle: CSSProperties = {
  margin:"5px",
  display: "flex",
  flexDirection: "row"
}

const ballStyle: CSSProperties = {
      backgroundColor: "blue",
      color: "white",
      padding: "5px 10px",
      marginRight: "10px",
      fontSize: "14px",
      fontWeight: "bold",
      border: "none",
      borderRadius: "20px",
      cursor: "pointer",
      display: "flex", // flexbox para alinhamento
      alignItems: "center", // alinha ícone e texto verticalmente
      gap: "8px", // espaçamento entre ícone e texto
};
const ex1Style: CSSProperties = {
      backgroundColor: "grey",
      color: "black",
      padding: "5px 10px",
      marginRight: "10px",
      fontSize: "12px",
      fontWeight: "bold",
      border: "1px solid black",
      borderRadius: "5px",
      display: "flex", // flexbox para alinhamento
      flexDirection: "column",
      alignItems: "center", // alinha ícone e texto verticalmente
      gap: "8px", // espaçamento entre ícone e texto
};


export default Exercise2;