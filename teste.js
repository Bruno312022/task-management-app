const button = document.querySelector("#openBtn")
const modal = document.querySelector("#modal")
const closeBtn = document.querySelector("#closeBtn")

button.onclick = function() {
    modal.showModal()
}

closeBtn.onclick = function() {
    modal.close()
}