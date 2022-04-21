function gameOver() {
    location.assign("game-over-marceline.html")
}

function tentarNovamente() {
    location.assign('fase1.html')
}

function validaResposta(resposta, respostaCerta, proximaFase) {
    if (resposta === respostaCerta) {
        alert('Sua chuva de granizo deu certo e o Mago da Floresta não foi páreo para ela.')
        window.location.href = `${proximaFase}`
    } else if (resposta = 1) {

    }
}

function voltarAoInicio(){
    location.assign('../../personagens/personagem.html')
}

var contador = 0;
function fase1() {

    while (true) {
        var option = (prompt("Digite o número da sua resposta"));

        if (option == 1) {
            alert('Você conseguiu desviar, mas quando deu às costas para o Mago da Folha, ele lançou um feitiço de cipó para te amarrar e a cor verde foi a ultima coisa que você viu...');
            alert('Você não tem vidas ilimitadas, não as disperdice Rei Gelado!')
            contador++
            if (contador >= 2) {
                gameOver()
                break
            }
        } else if (option == 2) {

            alert('Você ataca o Mago com seu Nunchako e ele cai no chão')
            alert('Você ganhou esta batalha, mas se esqueceu que não pode usar nenhuma arma. O Mestre dos Magos vê você trapaceando e te transforma em um gatinho')
            alert('Você não tem vidas ilimitadas, não as disperdice Rei Gelado!')
            contador++
            if (contador >= 2) {
                gameOver()
                break
            }
        } else if (option == 3) {

            alert('Sua chuva de granizo deu certo e o Mago da Floresta não foi páreo para ela.');
            location.assign('fase2.html')
            break;

        } else {
            alert("Digite apenas 1, 2 ou 3")
        }
    }
}

function fase2() {

    while (true) {
        var option = (prompt("Digite o número da sua resposta"));

        if (option == 1) {
            alert('Sua visão e alma ficam aliviadas com a falta de nudez explicita. Porém enquanto você está com os olhos fechados, você tropeça no Mago Rocha e bate a cabeça.');
            alert('Não acredito que o Mago Pelado foi o motivo de você perder um beijo da Jujuba :|')
            contador++
            if (contador >= 2) {
                gameOver()
                break
            }


        } else if (option == 3) {

            alert('Isso faz com que o Mago Pelado tropece e caia com o bumbum na sua cara. A vergonha é tão grande que você desiste da luta e só quer ir pra casa chorar sozinho.')
            alert('Não acredito que o Mago Pelado foi o motivo de você perder um beijo da Jujuba :|')
            contador++
            if (contador >= 2) {
                gameOver()
                break
            }


        } else if (option == 2) {

            alert('O vento extremamente gelado faz o Mago Pelado cair congelado. Você sobrevive a mais uma bizarrice dessa batalha.');
            location.assign('fase3.html')
            break;

        } else {
            alert("Digite apenas 1, 2 ou 3")
        }
    }
}

function fase3() {

    while (true) {
        var option = (prompt("Digite o número da sua resposta"));

        if (option == 1) {
            alert('Você tem sorte que o Mestre dos Magos está ocupado com seus gatinhos e não vê você trapaceando. Mas não contava com a habilidade do Abracadaniel que lança um feitiço maluco e transforma a sua arma em borboleta. Ela se transforma de novo em arma. O Nunchako cai na sua cabeça e você desmaia, seu bobão!');
            alert('Você não tem vidas ilimitadas, não as disperdice Rei Gelado!')
            contador++
            if (contador >= 2) {
                gameOver()
                break
            }
        } else if (option == 2) {

            alert('A bola vai em direção ao Mago... Ele grita: ARCO-IRIS ABRACADANIEL!.')
            alert('A sua bola de neve começa a subir no arco-iris que acaba na sua cabeça ._. No meio do caminho o Mago transmuta ela de neve para pedra.')
            alert('POW! ... Você está fora de combate')
            contador++
            if (contador >= 2) {
                gameOver()
                break
            }
        } else if (option == 3) {

            alert('Você é um vilão esperto e acertou o ponto fraco do Abracadaniel: Ele tem uma péssima auto-estima. Agora ele ta num canto chorando');
            alert('Você VENCEU a batalha dos magos e seu prêmio te espera')
            location.assign('you-win.html')
            break;

        } else {
            alert("Digite apenas 1, 2 ou 3")
        }
    }
}
