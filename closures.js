function saudacao(nome) { // função pai
    let mensagem =  "Olá, seja bem-vindo"

    function juntarNome() { // função filha -> closure. Não ocupar espaço de memoria
        return mensagem + " " + nome;
    }

    return juntarNome();
}

console.log(saudacao("Vinicius"));