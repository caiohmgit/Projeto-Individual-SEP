function enviarContato() {
    var msgErros = validacaoContato();
    mensagemErro.innerHTML = '';
    pvalidacao.innerHTML = '';

    if (msgErros.length > 0) {
        for (var c = 0; c < msgErros.length; c++) {
            var msgErro = msgErros[c];
            var listaErros = document.createElement("li");
            listaErros.innerHTML = msgErro;

            mensagemErro.appendChild(listaErros)
        }
    } else {
        var p_valid = document.createElement("p");
        p_valid.innerHTML = "Informações corretas, sua mensagem foi enviada com sucesso!<br> Aguarde e receba as novidades do maior campeão nacional!";
        pvalidacao.appendChild(p_valid);
        //Código que faz o envio para o BD
    }
}
function validacaoContato() {
    var msgErros = [];

    if (!nome_contato.value) {
        msgErros.push("Preencha o nome");
    }

    if ((email_contato.value.search("@") == -1) ||
        (email_contato.value.search(".") == -1) ||
        (email_contato.value.search(" ") >= 1)) {
        msgErros.push('Preencha o email corretamente')

    }

    if ((tel_contato.value.search("-") == -1) ||
        tel_contato.value[tel_contato.value.length - 5] != "-") {
        msgErros.push("O formato do telefone está incorreto");
    }

    if (!mensagem_contato.value) {
        msgErros.push("Preencha a mensagem");
    }

    return msgErros;
}