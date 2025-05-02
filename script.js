document.getElementById("mensagemBtn").addEventListener("click", function() {
    const mensagem = `
        <div class="hava-container">
            <p class="hava-line">"Então comecei a prosperar,</p>
            <p class="hava-line">E a obter sabedoria,</p>
            <p class="hava-line">Cresci e bem estava;</p>
            <p class="hava-line">Cada palavra me levou a outra palavra,</p>
            <p class="hava-line">Cada feito a outro feito."</p>
            <p class="hava-author">— Hávamál 141</p>
        </div>
    `;
    const container = document.getElementById("mensagemContainer");
    container.innerHTML = mensagem;
    container.style.display = "block";
    container.style.opacity = "1";
});