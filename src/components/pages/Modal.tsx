import './Modal.css'

function Modal() {

    return (
        <div className="modal-container" id="modal-opened">
            <div className="modal">
                <div className="modal__details">
                    <h1 className="modal__title"></h1>
                    <p className="modal__description"></p>
                </div>
            </div>
        </div>
    );
}    
export default Modal;



export function showModal(title: string, message: string) {
    const modalContainer = document.getElementsByClassName("modal-container")[0] as HTMLElement;
    modalContainer.style.display = "block";
    const modal = document.getElementsByClassName("modal")[0] as HTMLElement;
    modal.style.display = "block";  

    const modal_title = document.getElementsByClassName("modal__title")[0] as HTMLElement;
    modal_title.innerHTML = title;
    const modal_description = document.getElementsByClassName("modal__description")[0] as HTMLElement;
    modal_description.innerHTML = message;
}
export function closeModal() {
    const modalContainer = document.getElementsByClassName("modal-container")[0] as HTMLElement;
    modalContainer.style.display = "none";
    const modal = document.getElementsByClassName("modal")[0] as HTMLElement;
    modal.style.display = "none";  

    const modal_title = document.getElementsByClassName("modal__title")[0] as HTMLElement;
    modal_title.innerHTML = "";
    const modal_description = document.getElementsByClassName("modal__description")[0] as HTMLElement;
    modal_description.innerHTML = "";    
}

