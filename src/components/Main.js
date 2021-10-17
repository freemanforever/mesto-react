import editButton from "../images/editButton.svg";
import React from "react";
import api from "../utils/Api";
import Card from "./Card";

export default Main;

function Main(props) {
    const [userName, setUserName] = React.useState("");
    const [userDescription, setUserDescription] = React.useState("");
    const [userAvatar, setUserAvatar] = React.useState("");
    const [cards, setCards] = React.useState([]);
    const cardElements = cards.map((card) => {
        return (<Card key={card._id} card={card} link={card.link} name={card.name} likes={card.likes}/>)
    });
    React.useEffect(() => {
        api.getUserInfo()
            .then((userData) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
            });
    });
    React.useEffect(() => {
        api.getInitialCards()
            .then((cardsData) => {
                setCards(cardsData);
            });
    }, []);
    return (
        <main className="content">
            <section className="profile section-pos">
                <div className="profile__avatar-container">
                    <img src={userAvatar} alt="Аватар пользователя"
                         className="profile__avatar-image"/>
                    <button type="button" className="profile__avatar-edit-button" onClick={props.onEditAvatar}/>
                </div>
                <div className="profile__info">
                    <div className="profile__card">
                        <h1 className="profile__name typo typo_size_xl hide-text-overflow">{userName}</h1>
                        <button type="button" className="profile__edit-button" onClick={props.onEditProfile}>
                            <img className="profile__edit-button-img" src={editButton}
                                 alt="кнопка редактирования профиля"/>
                        </button>
                    </div>
                    <h2 className="profile__job typo typo_size_l hide-text-overflow">{userDescription}</h2>
                </div>
                <button type="button" className="profile__add-button profile__add-button_pos-main"
                        onClick={props.onAddPlace}>
                </button>
            </section>
            <section className="places section-pos">{cardElements}</section>
        </main>
    )
}
