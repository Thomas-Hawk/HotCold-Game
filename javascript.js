
let L // valeur max de la fourchette
let V //nombre de tentative restante
let T = [] // nombre deja joué
let A // nombre a trouver
let rythme = 1
let input // valeur entrée




// valeur recuperé du input 
function inp() {

    input = document.getElementById("in").value;

    switch (rythme) {
        case 1:
            rythme += 1
            ChoixN(input)
            if (input < 1 || input > 5) {
                break
            }
            A = Math.floor(Math.random() * L + 1)
            document.getElementById("phrase").getElementsByTagName('p')[0].textContent = "Trouve le nombre Mystere ! Rentre une valeur entre 0 et " + L;
            break;
        case 2:
            game()
    }

    if (input == "Y") {
        document.getElementById("phrase").getElementsByTagName('p')[0].textContent = "Choisi un niveau de difficulte entre 1 et 5 :";
        rythme =1
    }

}


//Main loop 
function game() {
    while (input != A && V != 1) {
        if (Number.isInteger(parseInt(input))) {
            if (testT()) {
                document.getElementById("phrase").getElementsByTagName('p')[0].textContent = "Tu as deja joue la valeur " + testT() + ", rentre une valeur plus " + testR() + ", " + " tentatives restantes: " + V;
                break
            } else {
                T.push(input)
                V--
                document.getElementById("phrase").getElementsByTagName('p')[0].textContent = "Rentre une valeur plus " + testR() + ", " + " tentatives restantes: " + V;
                break
            }
        } else {
            document.getElementById("phrase").getElementsByTagName('p')[0].textContent = "Ce n'est pas un nombre, rentre une valeur entre 0 et " + L;
            break;
        }
    }
    if (V == 1) {
        document.getElementById("phrase").getElementsByTagName('p')[0].textContent = "nombre de tentative depasse, You Loose, veux tu rejouer ? Y/N";
        rythme = 0
    }

    if (input == A) {
        document.getElementById("phrase").getElementsByTagName('p')[0].textContent = "You Win ,veux tu rejouer ? Y/N"
        rythme = 0
    }

}


// choix du niveau 

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
            rythme = 1
            document.getElementById("phrase").getElementsByTagName('p')[0].textContent = "je n'ai pas bien compris ton choix, choisi un niveau de difficulté entre 1 et 5 :";
    }

}

// test si un nombre n'a pas deja été joué 
function testT() {
    for (var i = 0; i < T.length; i++) {
        if (T[i] == input) {
            return T[i]
        }
    }
}


// test si le nombre joué est supperieur ou inferieur et affiche le resulta
function testR() {
    if (input < A) {
        return "haute"
    } else {
        return "basse"
    }
}
