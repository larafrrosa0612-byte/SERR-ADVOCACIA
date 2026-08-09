/* ==========================================
   SERR ADVOCACIA
   STÉFANY EDUARDA R. ROSA
   OAB/SP 534.844
========================================== */


/* ==========================================
   MENU / SCROLL SUAVE
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const destino = document.querySelector(
            this.getAttribute("href")
        );

        if (destino) {

            event.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* ==========================================
   CABEÇALHO AO ROLAR A PÁGINA
========================================== */

const header = document.querySelector("header");


window.addEventListener("scroll", function () {

    if (!header) return;

    if (window.scrollY > 50) {

        header.classList.add("header-scrolled");

    } else {

        header.classList.remove("header-scrolled");

    }

});


/* ==========================================
   ANIMAÇÃO DE ENTRADA
========================================== */

const elementos = document.querySelectorAll(
    ".hero-content, .card, .titulo-secao, .texto-secao, .sobre-content"
);


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("aparecer");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


elementos.forEach(elemento => {

    elemento.classList.add("animacao");

    observer.observe(elemento);

});


/* ==========================================
   BOTÕES DO WHATSAPP
========================================== */

const whatsappLinks =
    document.querySelectorAll(".whatsapp");


whatsappLinks.forEach(botao => {

    botao.addEventListener("click", function () {

        console.log(
            "Redirecionando para o WhatsApp da Advocacia."
        );

    });

});


/* ==========================================
   ANO AUTOMÁTICO DO RODAPÉ
========================================== */

const ano = new Date().getFullYear();

const elementoAno =
    document.querySelector("#ano");


if (elementoAno) {

    elementoAno.textContent = ano;

}


/* ==========================================
   BOTÃO VOLTAR AO TOPO
========================================== */

const voltarTopo =
    document.createElement("button");


voltarTopo.innerHTML = "↑";

voltarTopo.setAttribute(
    "aria-label",
    "Voltar ao topo"
);


voltarTopo.className =
    "voltar-topo";


document.body.appendChild(
    voltarTopo
);


window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        voltarTopo.classList.add("mostrar");

    } else {

        voltarTopo.classList.remove("mostrar");

    }

});


voltarTopo.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ==========================================
   CONSOLE
========================================== */

console.log(
    "SERR Advocacia — site carregado com sucesso."
);
