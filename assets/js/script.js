// MENU'

let menu = document.getElementById("menu");
let nav = document.getElementById("opzioniMenu");

// APRI E CHIUDI MENU'
menu.addEventListener("click", function () {
    if (nav.style.display != "block") {
        nav.style.display = "block";
    }
    else {
        nav.style.display = "none";
    }
});

// MENU' HOVER

let sfondoMenu = document.querySelectorAll("#opzioniMenu > a");

for (var i = 0; i < sfondoMenu.length; i++) {
    sfondoMenu[i].addEventListener("mouseover", function () {
        this.style.backgroundColor = "#C9CBD0";
    });

    sfondoMenu[i].addEventListener("mouseout", function () {
        this.style.backgroundColor = "#937AF5";
    });
}



// BUTTONS

let titolo = document.querySelector("h1");

let grande = document.getElementById("grande");
let colore = document.getElementById("colore");
let maiuscolo = document.getElementById("maiuscolo");
let nascondi = document.getElementById("nascondi");
let mostra = document.getElementById("mostra");

// GRANDE
grande.addEventListener("click", function () {
    titolo.style.fontSize = "3em";
});

// COLORE
colore.addEventListener("click", function () {
    titolo.style.color = "red";
});

// MAIUSCOLO
maiuscolo.addEventListener("click", function () {
    titolo.style.textTransform = "uppercase";
});

// NASCONDI
nascondi.addEventListener("click", function () {
    titolo.style.visibility = "hidden";
});

// MOSTRA
mostra.addEventListener("click", function () {
    titolo.style.visibility = "visible";
});




// LISTA

let lista = document.querySelectorAll(".opzioniLista");

for (var i = 0; i < lista.length; i++) {
    lista[i].addEventListener("click", function () {
        this.classList.toggle("checked");
    });

    lista[i].addEventListener("mouseover", function () {
        this.style.color = "red";
    });

    lista[i].addEventListener("mouseout", function () {
        this.style.color = "black";
    });
}