import PopupWithForm from "./PopupWithForm";
import React from "react";


function AddPlacePopup(props) {
    const placeNameRef = React.useRef('');
    const placeLinkRef = React.useRef('');
    React.useEffect(() => {
        placeNameRef.current.value = '';
        placeLinkRef.current.value = '';
    }, [props.isOpen])

    function handleSubmit(e) {
        e.preventDefault();
        props.onAddPlace({
            name: placeNameRef.current.value,
            link: placeLinkRef.current.value
        });
    }

    return (
        <PopupWithForm title="Новое место"
                       name="place-add"
                       isOpen={props.isOpen}
                       onClose={props.onClose}
                       submitButtonText={"Создать"}
                       onSubmit={handleSubmit}>
            <input className="popup__input popup__input_place-name typo typo_size_s"
                   name="PlaceName"
                   placeholder="Название"
                   autoComplete="off"
                   required minLength="2"
                   maxLength="30"
                   id="place-name"
                   ref={placeNameRef}/>
            <span className="popup__input-error" id="place-name-error"/>
            <input className="popup__input typo typo_size_s" name="PlaceImage" placeholder="Ссылка на картинку"
                   autoComplete="off" required id="place-link"
                   type="url" ref={placeLinkRef}/>
            <span className="popup__input-error" id="place-link-error"/>
        </PopupWithForm>
    )
}

export default AddPlacePopup;