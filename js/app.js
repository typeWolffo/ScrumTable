let modal = document.querySelector(".add-task-modal");
let btn = document.querySelector("#add");
let close = document.querySelector(".close-modal");

btn.onclick = function() {
    modal.style.display = "flex";
}

close.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
