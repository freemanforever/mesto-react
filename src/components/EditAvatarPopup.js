import PopupWithForm from "./PopupWithForm";
import React from "react";

function EditAvatarPopup(props) {
    const avatarRef = React.useRef('');

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
    }

    return (
        <PopupWithForm title="Обновить аватар"
                       name="avatar-edit"
                       isOpen={props.isOpen}
                       onClose={props.onClose}
                       submitButtonText={"Сохранить"}
                       onSubmit={handleSubmit}>
            <input
                className="popup-avatar-edit__input popup__input typo typo_size_s"
                name="AvatarImage"
                placeholder="Обновить аватар(введите ссылку на картинку)"
                autoComplete="off"
                required
                id="avatar-link"
                type="url"
                ref={avatarRef}
            />
            <span className="popup__input-error" id="avatar-link-error"/>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;