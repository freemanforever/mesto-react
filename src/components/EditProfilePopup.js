import PopupWithForm from "./PopupWithForm";
import React from "react";
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function EditProfilePopup({isOpen, onClose, ...props}) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser({
            name,
            about: description,
        });
    }

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    return (
        <PopupWithForm title="Редактировать профиль" name="profile-edit" onClose={onClose} isOpen={isOpen}
                       submitButtonText={"Сохранить"} onSubmit={handleSubmit}>
            <input className="popup__input popup__input_name typo typo_size_s" name="Name"
                   autoComplete="off" required minLength="2" maxLength="40" id="profile-name" placeholder="Имя"
                   value={name || ""} onChange={handleNameChange}/>
            <span className="popup__input-error" id="profile-name-error"/>
            <input className="popup__input popup__input_job typo typo_size_s" name="Job" autoComplete="off"
                   required minLength="2" maxLength="200" id="profile-job" placeholder="Занятие"
                   value={description || ""} onChange={handleDescriptionChange}/>
            <span className="popup__input-error" id="profile-job-error"/>
        </PopupWithForm>
    )
}

export default EditProfilePopup;