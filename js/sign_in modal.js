const refs = {
    openModalBtn: document.querySelector('[data-action="open-sign-in-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-sign-in-modal"]'),
    sendDataBtn: document.querySelector('[data-action="send-sign-in-modal"]'),
    backdrop: document.querySelector(".js-sign-up-backdrop"),
    mail: document.querySelector('[type="email"]'),
    form: document.querySelector(".sign_in_box"),
};

refs.openModalBtn.addEventListener("click", onOpenModal)
refs.closeModalBtn.addEventListener("click", onCloseModal)
refs.backdrop.addEventListener("click", onBackDropModal);

function onOpenModal(event) {
    document.body.classList.add("show-sign-in-modal");
}

function onCloseModal(event) {
    window.addEventListener("keydown", onEscapeKeypress);
    document.body.classList.remove("show-sign-in-modal")
}

function onBackDropModal(event) {
    if (event.currentTarget === event.target) {
        onCloseModal();
      }
}

function onEscapeKeypress(event) {
    const ESC_KEY_CODE = "Escape";
    const isEscKey = event.code === ESC_KEY_CODE;
    if (isEscKey) {
      onCloseModal();
    }
}