let tg = window.Telegram.WebApp;
tg.expand()

let reg = document.getElementById("reg")

reg.addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;
    let photo = document.getElementById("avatar").value;
    
    let data = {
        name: name,
        description: description,
        photo: photo
    }
    
    tg.sendData(JSON.stringify(data));

    tg.close();
});