

// //let texte = ["Choisi un niveau de difficulte entre 0 et 5 :", 
// "'Trouve le nombre Mystere ! Rentre une valeur entre 0 et ' + L",
// "Tu as deja joue la valeur " + testT() + ", rentre une valeur plus " + testR() + ", " + " tentatives restantes: + V",
// "Rentre une valeur plus " + testR() + ", " + " tentatives restantes: + V", "Ce n'est pas un nombre, rentre une valeur entre 0 et + L"]
let L // valeur max de la fourchette
let V //nombre de tentative restante
let T = [] // nombre deja joué
let A // nombre a trouver
let rythme = 1
let input // valeur entrée
let yes = "Y"


document.getElementById("phrase").textContent = "Choisi un niveau de difficulte entre 0 et 5 :";

// valeur recuperé du input 
function inp() {
    input = document.getElementById("in").value;

    switch (rythme) {
        case 1:
            ChoixN(input)
            rythme += 1
            A = Math.floor(Math.random() * L + 1)
            document.getElementById("phrase").textContent = "Trouve le nombre Mystere ! Rentre une valeur entre 0 et " + L;
            break;
        case 2:
            game()
    }

}


//Main loop 
function game() {
    while (input != A && V != 1) {
        if (Number.isInteger(parseInt(input))) {
            if (testT()) {
                document.getElementById("phrase").textContent = "Tu as deja joue la valeur " + testT() + ", rentre une valeur plus " + testR() + ", " + " tentatives restantes:" + V;
                break
            } else {
                T.push(input)
                V--
                document.getElementById("phrase").textContent = "Rentre une valeur plus " + testR() + ", " + " tentatives restantes:" + V;
                break
            }
        } else {
            document.getElementById("phrase").textContent = "Ce n'est pas un nombre, rentre une valeur entre 0 et" + L;
            break;
        }
    }
    if (V == 1) {
        document.getElementById("phrase").textContent = "nombre de tentative depasse, You Loose, veux tu rejouer ? Y/N";
        rythme = 1
    }

    if (input == A) {
        document.getElementById("phrase").textContent = "You Win ,veux tu rejouer ? Y/N"
        rythme = 1
    }

}


// redemarre la pertie 
// function restart() {
//     document.getElementById("phrase").textContent = 'veux tu rejouer ? Y/N';

//     rythme = 1
// }


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
            document.getElementById("phrase").textContent = "Choisi un niveau de difficulte entre 0 et 5 :";
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
