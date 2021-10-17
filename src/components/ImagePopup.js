import closeButton from "../images/closeButton.svg";

function ImagePopup(props) {
    return (
        <section className={`popup popup-img ${props.card ? 'popup_opened' : ''}`}>
            <div className="popup-img__container">
                <button type="button" className="popup-img__close-button popup__close-button" onClick={props.onClose}>
                    <img className="popup__close-button-img" src={closeButton}
                         alt="кнопка закрытия формы"/>
                </button>
                <img className="popup-img__opened-image" alt="Оригинал изображения"
                     src={props.card ? props.card.link : ""}/>
                <p className="popup-img__header">{props.card ? props.card.name : ""}</p>
            </div>
        </section>
    )
}

export default ImagePopup;