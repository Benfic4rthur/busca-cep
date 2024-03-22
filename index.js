function buscaCep() {
  var cep = document.getElementById("cep").value;
  const ajax = new XMLHttpRequest();
  ajax.open("GET", `https://viacep.com.br/ws/${cep}/json/`);
  ajax.send();
  ajax.onload = function () {
    let obj = JSON.parse(this.responseText);
    let { cep, logradouro, bairro, localidade, uf, ibge, ddd } = obj;
    document.getElementById(
      "result"
    ).innerHTML = `CEP: ${cep} <br>Rua: ${logradouro} <br>Bairro: ${bairro} <br>Cidade: ${localidade} <br>UF: ${uf} <br>IBGE: ${ibge} <br>DDD: ${ddd}`;
    //mudar a cor do plano de fundo para azul
    document.getElementById("result").style.backgroundColor = "#0071AD";
  };
}
