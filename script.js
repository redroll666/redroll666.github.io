let tg = window.Telegram.WebApp;
tg.expand()

let reg = document.getElementById("reg")
reg.addEventListener("click", () => {
    tg.close();
});