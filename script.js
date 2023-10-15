function ampliarImagem(imagemURL) {
    const overlay = document.getElementById('overlay');
    const imagemAmpliada = document.getElementById('imagemAmpliada');

    imagemAmpliada.style.backgroundImage = `url('${imagemURL}')`;
    overlay.style.display = 'flex';
}

document.addEventListener("keydown", function(event){
    if (event.key === "Escape") {
        fecharImagem();
    }
});

function fecharImagem() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

const imagens = [""];