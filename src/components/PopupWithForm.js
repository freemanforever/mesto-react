import closeButton from "../images/closeButton.svg";
import React from 'react';

function PopupWithForm({onSubmit, ...props}) {
    return (
        <div className={`popup ${props.isOpen ? 'popup_opened' : ''} popup-${props.name}`}>
            <button type="button" className="popup__close-button popup__close-button-form"><img
                className="popup__close-button-img"
                src={closeButton} alt="кнопка закрытия формы" onClick={props.onClose}/></button>
            <div className="popup__container">
                <form name={props.name} className="popup__form" onSubmit={onSubmit} noValidate>
                    <h3 className="popup__caption typo typo_size_xxl">{props.title}</h3>
                    {props.children}
                    <button className="popup__save-button" type="submit">{props.submitButtonText}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;