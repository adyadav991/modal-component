let button = document.getElementById("modal-button");
let modalContainer = document.getElementById("modal-container");
let close = document.getElementById("close");

button.addEventListener("click", function(e) {
    modalContainer.style.display = "block";
});

close.addEventListener("click", function(e) {
    modalContainer.style.display = "none";
})
