// LOGIN
function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "" || pass === "") {
        alert("Preencha tudo!");
        return;
    }

    window.location.href = "loading.html";
}

// CALCULADORA
function calc(value) {
    document.getElementById("calcDisplay").value += value;
}

function clearCalc() {
    document.getElementById("calcDisplay").value = "";
}

function result() {
    try {
        document.getElementById("calcDisplay").value =
            eval(document.getElementById("calcDisplay").value);
    } catch {
        alert("Erro na operação");
    }
}

// TEMA
let theme = localStorage.getItem("theme");

if (theme === "light") {
    document.body.classList.add("light");
}

function toggleTheme() {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
}
