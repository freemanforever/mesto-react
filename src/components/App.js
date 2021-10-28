import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState();
    const [currentUser, setCurrentUser] = React.useState({});

    React.useEffect(() => {
        api.getUserInfo()
            .then((userData) => {
                setCurrentUser(userData);
            })
            .catch((err) => console.log(`Что-то пошло не так с данными пользователя...` + err));
    }, []);

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function handleUpdateAvatar({avatar}) {
        api.setAvatar({avatar})
            .then((userData) => {
                setCurrentUser(userData);
                closeAllPopups();
            })
            .catch((err) => console.log(`Что-то пошло не так с аватаром пользователя...` + err));
    }

    function handleUpdateUser({name, about}) {
        api.sendProfileInfo({name, about})
            .then((userData) => {
                setCurrentUser(userData);
                closeAllPopups();
            })
            .catch((err) => console.log(`Что-то пошло не так с данными пользователя...` + err));
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard();
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="App">
                <Header/>
                <Main
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                />
                <Footer/>
                <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}
                                  onUpdateUser={handleUpdateUser}/>
                <PopupWithForm title="Новое место" name="place-add" isOpen={isAddPlacePopupOpen}
                               onClose={closeAllPopups}
                               submitButtonText={"Создать"}>
                    <input className="popup__input popup__input_place-name typo typo_size_s" name="PlaceName"
                           placeholder="Название" autoComplete="off" required minLength="2" maxLength="30"
                           id="place-name"/>
                    <span className="popup__input-error" id="place-name-error"/>
                    <input className="popup__input typo typo_size_s" name="PlaceImage" placeholder="Ссылка на картинку"
                           autoComplete="off" required id="place-link"
                           type="url"/>
                    <span className="popup__input-error" id="place-link-error"/>
                </PopupWithForm>
                <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
                                 onUpdateAvatar={handleUpdateAvatar}/>
                <PopupWithForm title="Вы уверены?" name="del-confirm" onClose={closeAllPopups}>
                    <h3 className="popup-del-confirm__caption typo typo_size_xxl">Вы уверены?</h3>
                    <button className="popup__save-button popup-del-confirm__button" type="submit"></button>
                </PopupWithForm>
                <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
            </div>
        </CurrentUserContext.Provider>
    )
}

export default App;