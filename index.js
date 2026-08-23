window.onload = function() {
    document.querySelector('.animar-entrada').classList.add('ativa');
};
let link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'style1.css';
document.head.appendChild(link);
window.addEventListener('load', () => {
    const loader = document.getElementById('loader-wrapper');
    setTimeout(() => {
        const status = document.querySelector('.glitch-text');
        if(status) status.innerText = "ACCESS_GRANTED";
        setTimeout(() => {
            loader.classList.add('fade-out');
        }, 600);
    }, 3000);
});
document.querySelectorAll('.masonry-link').forEach(link => {
    link.addEventListener('click', function(e) {
        console.log("REDIRECTION_START: " + this.href);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const entrada = document.querySelector(".animar-entrada, .site-entering");
    const loader = document.getElementById("loader-wrapper");
    const modal = document.getElementById("cookie-modal");
    const acceptButton = document.getElementById("accept-cookies");
    const saveButton = document.getElementById("save-cookies");

    entrada?.classList.add("ativa");

    document.querySelectorAll(".masonry-link").forEach((link) => {
        link.addEventListener("click", function () {
            console.log("REDIRECTION_START: " + this.href);
        });
    });

    setTimeout(() => {
        const status = document.querySelector(".glitch-text");

        if (status) {
            status.innerText = "ACCESS_GRANTED";
        }

        setTimeout(() => {
            loader?.classList.add("fade-out");

            setTimeout(() => {
                if (!localStorage.getItem("cookiePreferences")) {
                    modal.hidden = false;
                }
            }, 800);
        }, 600);
    }, 3000);

    acceptButton?.addEventListener("click", () => {
        localStorage.setItem("cookiePreferences", "accepted");
        modal.hidden = true;
    });

    saveButton?.addEventListener("click", () => {
        localStorage.setItem("cookiePreferences", "saved");
        modal.hidden = true;
    });
});