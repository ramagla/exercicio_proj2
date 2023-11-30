const tabelaContatos = document.getElementById("tabela-contatos");
const formularioContatos = document.getElementById("formulario-contatos");
const inputNome = document.getElementById("nome");
const inputTelefone = document.getElementById("telefone");


function adicionarContato(nome, telefone) {
  const tr = document.createElement("tr"); 
  const tdNome = document.createElement("td");
  const tdTelefone = document.createElement("td");
  
  tdNome.textContent = nome;
  tdTelefone.textContent = telefone;
  
  tr.appendChild(tdNome);
  tr.appendChild(tdTelefone);
  
  tabelaContatos.querySelector("tbody").appendChild(tr);
}


function limparFormulario() {
  inputNome.value = "";
  inputTelefone.value = "";
}


formularioContatos.addEventListener("submit", function(event) {
    event.preventDefault();
  
  const nome = inputNome.value;
  const telefone = inputTelefone.value;
 
  if (nome && telefone) {   
    adicionarContato(nome, telefone);    
    limparFormulario();
  } else {    
    alert("Por favor, preencha todos os campos do formulário.");
  }
});
