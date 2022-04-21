function gameOver() {
    location.assign("game-over-marceline.html")
}

function voltarAoInicio(){
    location.assign('../../personagens/personagem.html')
}

var contador = 0;
function fase1() {

    while (true) {
        var option = (prompt("Digite o número da sua resposta"));

        if (option == 3) {
            alert('A ideia parece ótima, mas esses seres não estão num show se divertindo. Na verdade eles estão aqui a tanto tempo esperando, tão entediados que você é sugada pela vibe apática deles e não consegue nem se mexer pra sair dali...');
            alert('Você perdeu uma vida')
            contador++
            if (contador >= 2) {
                gameOver()
                break
            }
        } else if (option == 2) {
            alert('Você começa a voar e dá de cara com uma nuvem de sangue cheia de ódio que te ataca com um raio.')
            alert('Você perdeu uma vida')
            contador++
            if (contador >= 2) {
                gameOver()
                break
            }
        } else if (option == 1) {

            alert('O barqueiro te reconhece como a filha do chefe. Ele não sabe que seu pai sequestrou seus amigos, então ele concorda em te atravessar pelo mar do tédio');
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
            alert('O guarda não acredita em você e chama o seu pai enquanto você está distraída');
            alert('Agora você ta presa pra sempre com ele...')
            contador++
            if (contador >= 2) {
                gameOver()
                break
            }


        } else if (option == 2) {

            alert('Ele simplesmente diz não :|')
            contador++
            if (contador >= 2) {
                gameOver()
                break
            }


        } else if (option == 3) {

            alert('Boa! Você se transforma num monstro gigante e peludo e esmaga ele');
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
            alert('O Rei Abadear percebe seu movimento e consegue tirar o machado da sua mão. Ele ri e quebra o baixo-machado');
            alert('Ele era uma das coisas que você mais amava e agora seu coração está partido :c você até se esquece do Jake e do Finn')
            contador++
            if (contador >= 2) {
                gameOver()
                break
            }
        } else if (option == 3) {

            alert('Isso definitivamente não deu certo. O que você pensou que ia acontecer? ')
            contador++
            if (contador >= 2) {
                gameOver()
                break
            }
        } else if (option == 2) {

            alert('Você agarra o amuleto que ele carrega no pescoço. Hunson tira a maioria dos seu poderes de um amuleto que ele carrega consigo, que enche a seu portador um mal caótico e poderes sobrenaturais.');
            alert('Com isso ele fica sem poderes e bem mais fraco. O que da tempo de vocês conversarem civilizadamente.')
            location.assign('you-win.html')
            break;

        } else {
            alert("Digite apenas 1, 2 ou 3")
        }
    }
}
