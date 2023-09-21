function Form() {
  var input = document.getElementById("inputText") as HTMLInputElement;
  var inputValue = input.value.toString();
  var numero = document.getElementById("inputNumber") as HTMLInputElement;
  var inputValueNumber = Number(numero.value);
  var result = document.getElementById("resultado") as HTMLDivElement;
  var endereco = document.getElementById("endereco") as HTMLInputElement;
  var valueEndereco = endereco.value.toString();
  var bairro = document.getElementById("bairro") as HTMLInputElement;
  var valueBairro = bairro.value.toString();
  var telefone = document.getElementById("telefone") as HTMLInputElement;
  var telefoneValue = Number(telefone.value);
  result.innerHTML = ``

  if (inputValue === "" || inputValueNumber === Number() || valueEndereco === "" || valueBairro === "" || telefoneValue === Number()) {
    alert("Preencha todos os campos");
  } else { result.innerHTML = `<div> 
      <h2>
          Nome: ${inputValue}
      </h2>
      <h2>
          Idade: ${inputValueNumber}
      </h2>
      <h2>
          Endereço: ${valueEndereco}
      </h2>
      <h2>
          Bairro: ${valueBairro}
      </h2>
      <h2>
          Número: ${telefoneValue}
      </h2>
    </div>`;
}}

export default Form;
