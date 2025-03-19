import { CSSProperties,useState } from "react";

function Exercise2() {
      const [nros, setNros] = useState<string>();
      const [list,setList] = useState<number[]>([]);


      function set(value:number){
        const tempList = [...list,value];
        if (tempList.length>12){
            tempList.shift();
        }

        setList(tempList);
        setNros('');
       }

      function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>){
        if(e.key === 'Enter' && nros !== '' && nros !== undefined){
            set(parseInt(nros));
        }}

        function remove(index:number){
            const tempList = [...list];
            tempList.splice(index,1);
            setList(tempList);
        }
            
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
            return <Ball 
            key={index} 
            label={value}
            onContextMenu={(e)=>{
                e.preventDefault();
                remove(index);
            }}
            />
          })}
          </div>
          </div>
        </>
      );
}

interface BallProps {
    label: number;
    onContextMenu: (e: React.MouseEvent<HTMLButtonElement,MouseEvent>) => void;
}

function Ball({label,onContextMenu}: BallProps) {
  return ( <>
    <button style={ballStyle} onContextMenu={onContextMenu}>{label}</button>
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