import closeButton from "../images/closeButton.svg";

<section className="popup popup-img">
    <div className="popup-img__container">
        <button type="button" className="popup-img__close-button popup__close-button">
            <img className="popup__close-button-img" src={closeButton}
                 alt="кнопка закрытия формы"/>
        </button>
        <img className="popup-img__opened-image" alt="Оригинал изображения"
             src={closeButton}/>
        <p className="popup-img__header"/>
    </div>
</section>