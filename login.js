window.addEventListener("keydown", checkKeyPressed, false);
var wallet = "";
function checkKeyPressed(event) {
    if (event.keyCode == "13") {
        wallet = document.getElementById('input').value;
        if (wallet !== ""){
        window.location.href = "index.html";
        alert(wallet);
        }
    }

}
