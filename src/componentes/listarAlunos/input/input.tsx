import "./input.css";
import Form from "../../../service/form";

export default function Card() {
  return (
    <>
      <div className="number">
        <input type="text" id="inputText" placeholder="Nome" />
        <input type="number" id="inputNumber" placeholder="Idade" />
        <input type="text" id="endereco" placeholder="Endereço" />
        <input type="text" id="bairro" placeholder="Bairro" />
        <input type="number" id="telefone" placeholder="Número" />
        <button onClick={Form}> Enviar</button>
      </div>
      <div id="resultado"></div>
    </>
  );
}
