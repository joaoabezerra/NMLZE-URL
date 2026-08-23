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