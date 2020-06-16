function enviaContato() {
    var erros = validaContato();
    MensagemErro.innerHTML = '';
    if (erros.length > 0) {
        for (var a = 0; a < erros.length; a++) {
            var erro = erros[a];
            var li = document.createElement("li");
            li.innerHTML = erro;

            MensagemErro.appendChild(li);
        }
    } else {
        // codigo que envia para o banco de dados
    }


}

function validaContato() {
    var erros = [];

    if (!nomesobrenome.value) {
        erros.push("Preencha o nome");
    }

    if ((email.value.search("@") == -1) 
        (email.value.search(".") == -1) 
        (email.value.search(" ") >= 1)) {
        erros.push("O formato de email é: usuario@dominio.com")
    }
    return erros;


}


<div class="redes_sociais_conquistas">
        <div>
            <b class="titulo_redes">Acompanhe O Verdão Nas Redes Sociais:</b>
        </div>
        <div class="lista_redes">
            <ul>
                <li>
                    <a href="https://www.facebook.com/Palmeiras/">
                        <img class="redesocial" src="../imgs/facebook.png" alt="">
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/palmeiras/?hl=pt-br">
                        <img class="redesocial" src="../imgs/instagram.png" alt="">
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/Palmeiras">
                        <img class="redesocial" src="../imgs/twitter.png" alt="">
                    </a>
                </li>
            </ul>
        </div>
        <img class="imgbottom" src="../imgs/imgcadastro.png" alt="">
    </div>
    <div class="rodape_criado">
        created by Caio Henrique Martins
    </div>