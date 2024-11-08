let nomeUsuário = prompt("Qual é o seu nome?")
let elemento = document.querySelector("#nome-usuário")

while (nomeUsuário == ""){
    nomeUsuário = prompt("Qual é o seu nome?");
}

if (nomeUsuário == null){
    elemento.textContent = "Seja muito bem-vindo(a).";
}else{
    elemento.textContent = nomeUsuário;
}