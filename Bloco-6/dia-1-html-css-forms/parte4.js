// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function click(event) {
    event.preventDefault()
    console.log(event.preventDefault());
}

function text(event) {
    let evento = event.key;
    if (evento !== 'a') {
        event.preventDefault()
    }

}
HREF_LINK.addEventListener('click', click);
INPUT_CHECKBOX.addEventListener('click', click);
INPUT_TEXT.addEventListener('keypress', text);
