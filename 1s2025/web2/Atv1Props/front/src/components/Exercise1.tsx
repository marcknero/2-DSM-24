import { CSSProperties, useState } from "react";

function Exercise1() {
  const [nros, setNros] = useState<string>();
  const [raffled, setRaffled] = useState<number[]>([]);

  function raffle(nros: number) {
    console.log("oi");
    const stop = Math.min(nros, 12);
    const tempRaffled: number[] = [];
    for (let i: number = 0; i < stop; i++) {
      const random = Math.floor(Math.random() * 99);
      if (!(random in tempRaffled)) {
        tempRaffled.push(random);
      } else {
        i--;
      }
    }
    setRaffled(tempRaffled);
  }

  return (
    <>
      <div style={ex1Style}>
        <h2>Exercicio 1:</h2>
        <input
          type="number"
          value={nros}
          onChange={(e) => {
            setNros(e.target.value);
            raffle(parseInt(e.target.value));
          }}
          placeholder="Digite um numero de 1 a 12"
        />
        <div style={divBallStyle}>
          {raffled.map((value, index) => {
            return <Ball key ={index} label={value} />;
          })}
        </div>
      </div>
    </>
  );
}

interface BallProps {
  label: number;
}

function Ball({ label }: BallProps) {
  return (
    <>
      <button style={ballStyle}>{label}</button>
    </>
  );
}

const divBallStyle: CSSProperties = {
  margin: "5px",
  display: "flex",
  flexDirection: "row",
};

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

export default Exercise1;
