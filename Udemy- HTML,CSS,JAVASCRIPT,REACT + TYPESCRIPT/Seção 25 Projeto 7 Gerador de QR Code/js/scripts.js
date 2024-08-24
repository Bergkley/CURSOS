// Seleção	de elementos
const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");

const qrCodeInput = document.querySelector("#qr-form input");

const qrCodeImg = document.querySelector("#qr-code img");

// Função
function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value;

    if(!qrCodeInputValue) return;

    qrCodeBtn.innerHTML = "Gerando código";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    qrCodeImg.addEventListener("load",()=>{
        container.classList.add("active")
        qrCodeBtn.innerHTML = "Código criado";
    })
}

// Eventos
qrCodeBtn.addEventListener("click", ()=>{
    generateQrCode();
});

qrCodeBtn.addEventListener("keydown", (e)=>{
    if(e.code === "Enter"){
        generateQrCode();
    }
});