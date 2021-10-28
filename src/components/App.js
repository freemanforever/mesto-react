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
import Card from "./Card";
import AddPlacePopup from "./AddPlacePopup";

function App() {
    const [cards, setCards] = React.useState([]);
    const cardElements = cards.map((card) => {
        return (<Card key={card._id} card={card} link={card.link} name={card.name} likes={card.likes}
                      onCardClick={handleCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>)
    });
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState();
    const [currentUser, setCurrentUser] = React.useState({});

    React.useEffect(() => {
        api.getInitialCards()
            .then((cardsData) => {
                setCards(cardsData);
            })
            .catch((err) => console.log(`Что-то пошло не так с начальными карточками...` + err));
    }, []);

    React.useEffect(() => {
        api.getUserInfo()
            .then((userData) => {
                setCurrentUser(userData);
            })
            .catch((err) => console.log(`Что-то пошло не так с данными пользователя...` + err));
    }, []);

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api.addLike(card._id, !isLiked).then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        });
    }

    function handleCardDelete(card) {
        api.delCard(card._id).then(() => {
            setCards((state) => state.filter((c) => c._id !== card._id))
        })
    }

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

    function handleAddPlaceSubmit({name, link}) {
        api.addCard({name, link})
            .then((newCard) => {
                setCards([newCard, ...cards]);
                closeAllPopups();
            })
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
                    cards={cardElements}
                    onCardLike={handleCardLike}
                    onCardDelete={handleCardDelete}
                />
                <Footer/>
                <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}
                                  onUpdateUser={handleUpdateUser}/>
                <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>
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