import React, { useState, useEffect } from "react";
import "./UseStateTeste.css";

function NameUpdater(event:any) {
    event.preventDefault();
    var inputTextData: any = document.getElementById('nameTextId');
    var InputValue = inputTextData.value
    alert(InputValue)

}

function UseStateTeste() {
  var [teste, setTeste] = useState<number>(6);
  useEffect(() => {
    setTeste(10);
    setTeste(80);
    return console.log(teste);
  }, [teste]);

  return (
    <div>
      <h1>{teste}</h1>
      <input type="text" id="nameTextId" />
      <button type="submit" onClick={NameUpdater}> Enviar</button>
    </div>
  );
}

export default UseStateTeste;
