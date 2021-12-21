

    let texte = ["Choisi un niveau de difficulte entre 0 et 5 :", "'Trouve le nombre Mystere ! Rentre une valeur entre 0 et ' + L"]
    let L
    let V
    let T = []
    let R
    let A
    document.getElementById("phrase").textContent = "Choisi un niveau de difficulte entre 0 et 5";
    R = function game() {
        var input = document.getElementById("in").value;
        console.log(input)
        return input
    }
        ChoixN(R)

        A = Math.floor(Math.random() * L + 1)
        console.log(A)
         document.getElementById("phrase").textContent = "Trouve le nombre Mystere ! Rentre une valeur entre 0 et " + L;
        while (R != A && V != 1) {
            if (Number.isInteger(parseInt(R))) {
                if (testT()) {
                    R = prompt("Tu as deja joue la valeur " + testT() + ", rentre une valeur plus " + testR() + ", " + " tentatives restantes: " + V)
                } else {
                    T.push(R)
                    V--
                    R = prompt("Rentre une valeur plus " + testR() + ", " + " tentatives restantes: " + V)
                }
            } else { R = prompt("Ce n'est pas un nombre, rentre une valeur entre 0 et " + L) }
        }

        if (V == 1) {
            alert("nombre de tentative depasse")

        } else {
            alert("You Win !!!")
        }
        restart()
    

    function restart() {
        let again = prompt('veux tu rejouer ? Y/N')
        if (again == 'Y') {
            game()
        }
    }

    function ChoixN(C) {
        switch (C) {
            case '1':
                L = 50
                V = 10
                break;
            case '2':
                L = 100
                V = 10
                break;
            case '3':
                L = 300
                V = 10
                break;
            case '4':
                L = 500
                V = 10
                break;
            case '5':
                L = 1000
                V = 5
                break;
            default:
                //ChoixN(prompt("Choisi un niveau de difficulte entre 0 et 5"))
        }

    }

    function testT() {
        for (var i = 0; i < T.length; i++) {
            if (T[i] == R) {
                return T[i]
            }
        }
    }

    function testR() {
        if (R < A) {
            return "haute"
        } else {
            return "basse"
        }
     }
