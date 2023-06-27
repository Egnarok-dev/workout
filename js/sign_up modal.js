const refs = {
    openModalBtn: document.querySelector('[data-action="open-sign-up-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-sign-up-modal"]'),
    sendDataBtn: document.querySelector('[data-action="send-sign-up-modal"]'),
    backdrop: document.querySelector(".js-backdrop"),
    mail: document.querySelector('[type="email"]'),
    checkbox: document.querySelector('[type="checkbox"]'),
    form: document.querySelector(".sign_up_box"),
    openOtherModal: document.querySelector('[data-action="open-other-modal"]')    
};

refs.openModalBtn.addEventListener("click", onOpenModal)
refs.closeModalBtn.addEventListener("click", onCloseModal)
refs.backdrop.addEventListener("click", onBackDropModal);
refs.openOtherModal.addEventListener("click", onOpenOtherModal)

function onOpenModal(event) {
    document.body.classList.add("show-modal");
}

function onCloseModal(event) {
    window.addEventListener("keydown", onEscapeKeypress);
    document.body.classList.remove("show-modal")
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

function onOpenOtherModal(event) {
    document.body.classList.add("show-sign-in-modal");
    document.body.classList.remove("show-modal")
 }