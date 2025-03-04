document.addEventListener("DOMContentLoaded", function () {
    const player = document.getElementById("player");
    const passButton = document.getElementById("pass");
    const shootButton = document.getElementById("shoot");
    const message = document.getElementById("message");

    function showMessage(text, duration = 2000) {
        message.innerText = text;
        setTimeout(() => {
            message.innerText = "";
        }, duration);
    }

    passButton.addEventListener("click", function () {
        showMessage("Hai passato la palla!");
    });

    shootButton.addEventListener("click", function () {
        let success = Math.random() > 0.5; // 50% di possibilità di segnare
        if (success) {
            showMessage("Canestro! 🎉");
        } else {
            showMessage("Hai sbagliato il tiro! 😢");
        }
    });
});
