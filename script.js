const senhaEl = document.getElementById("senha");
const copiarEl = document.getElementById("copiar");
const tamanhoEl = document.getElementById("tamanho");
const maiusculaEl = document.getElementById("maiusculas");
const minusculaEl = document.getElementById("minusculas");
const numeroEl = document.getElementById("numeros");
const caracterEl = document.getElementById("caracteres-especiais");
const gerarSenhaEl = document.getElementById("gerar-senha");

const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const caracteres = "!@#$%¨&*()_+|=?/.,><;:";

function sortearMaiuscula() {
    return maiusculas[Math.floor(Math.random() * maiusculas.length)];
}

function sortearMinuscula() {
    return minusculas[Math.floor(Math.random() * minusculas.length)];
}

function sortearNumeros() {
    return numeros[Math.floor(Math.random() * numeros.length)];
}

function sortearCaracteres() {
    return caracteres[Math.floor(Math.random() * caracteres.length)];
}

function gerarSenha() {
    let tam = tamanhoEl.value;

    // não verdadeiro => falso
    if (!tam) { 
        tam = 6;
    }

    let senha = "";

    if (maiusculaEl.checked) {
        senha += sortearMaiuscula();
    }
    if (minusculaEl.checked) {
        senha += sortearMinuscula();
    }
    if (numeroEl.checked) {
        senha += sortearNumeros();
    }
    if (caracterEl.checked) {
        senha += sortearCaracteres();
    }
    for (let i = senha.length; i < tam; i++){
        const x = gerarX();
        senha += x;
    }

    senhaEl.innerText = senha;
    
}

function gerarX() {
    const Xs = []

    if (maiusculaEl.checked) {
        Xs.push(sortearMaiuscula());
    }
    if (minusculaEl.checked) {
        Xs.push(sortearMinuscula());
    }
    if (numeroEl.checked) {
        Xs.push(sortearNumeros());
    }
    if (caracterEl.checked) {
        Xs.push(sortearCaracteres());
    }

    if (Xs.length === 0) {
        return "";
    }
    //       Xs[0.5] 0 = 0%  0.3 = 30%    0.5 = 50%    1 = 100%
    return Xs[Math.floor(Math.random() * Xs.length)];

}

gerarSenhaEl.addEventListener("click", gerarSenha);

copiarEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const pw = senhaEl.innerText;

    if (!pw) {
        return;
    }

    textarea.value = pw;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    console.log("Senha copiada para area de transferencia!");
});