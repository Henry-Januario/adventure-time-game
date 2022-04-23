function gameOver() {
    location.assign("game-over-finn.html")
}

function voltarAoInicio() {
    location.assign('../../personagens/personagem.html')
}
function continuar() {
    location.assign('fase1-continua.html')
}


var contador = 0;
function fase1() {

    while (true) {
        var option = (prompt("Digite o número da sua resposta"));

        if (option == 3) {
            alert('Essa não é uma atitude de um herói. Que vergonha...');
            alert('Você perdeu uma vida')
            contador++
            if (contador >= 2) {
                gameOver()
                break
            }
        } else if (option == 1) {
            alert('A intenção foi boa, mas o Finn fica muito apavorado e surta de novo.')
            alert('Você perdeu uma vida')
            contador++
            if (contador >= 2) {
                gameOver()
                break
            }
        } else if (option == 2) {

            alert('Finn abre o coração para o Jake. Diz que está apavorado com a ideia de entrar no Oceano e pede a ele que o ajude a superar este medo.');
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

        if (option == 2) {
            alert('A intenção foi boa, mas o Finn fica muito apavorado e surta de novo.');
            alert('Você perdeu uma vida')
            contador++
            if (contador >= 2) {
                gameOver()
                break
            }

        } else if (option == 1) {

            alert('Eles vão pra casa comer um sanduíche gostoso e esperar pelo dia de amanhã');
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

        if (option == 2) {
            alert('Essa não é uma atitude de um herói. Que vergonha...');
            contador++
            if (contador >= 2) {
                gameOver()
                break
            }
        } else if (option == 1) {

            alert('"Eu juro, meu cabelo é escuro"')
            location.assign('fase4.html')
            break;

        } else {
            alert("Digite apenas 1, 2 ou 3")
        }
    }
}

function fase4() {

    while (true) {
        var option = (prompt("Digite o número da sua resposta"));

        if (option == 1) {
            alert('Isso não faz sentido e não vai funcionar... O medo é bem convincente');
            alert('Você perdeu uma vida')
            contador++
            if (contador >= 2) {
                gameOver()
                break
            }
        } else if (option == 3) {
            alert('A intenção foi boa, mas o Finn fica muito apavorado e surta de novo.')
            alert('Você perdeu uma vida')
            contador++
            if (contador >= 2) {
                gameOver()
                break
            }
        } else if (option == 2) {

            alert('Finn mergulha inconsciente e repousa nas algas macias. Quando acorda, ele encontra Jake desmaiado ao lado. Ele consegue acordar o Cão, ele está bem. Você conseguiu resgatar o melhor amigo do garoto');
            location.assign('you-win.html')
            break;

        } else {
            alert("Digite apenas 1, 2 ou 3")
        }
    }
}