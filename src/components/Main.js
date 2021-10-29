import editButton from "../images/editButton.svg";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Card from "./Card";

export default Main;

function Main({ cards, ...props }) {
  const currentUser = React.useContext(CurrentUserContext);
  const cardElements = cards.map((card) => {
    return (
      <Card
        key={card._id}
        card={card}
        link={card.link}
        name={card.name}
        likes={card.likes}
        onCardClick={props.onCardClick}
        onCardLike={props.onCardLike}
        onCardDelete={props.onCardDelete}
      />
    );
  });
  return (
    <main className="content">
      <section className="profile section-pos">
        <div className="profile__avatar-container">
          <img
            src={currentUser.avatar}
            alt="Аватар пользователя"
            className="profile__avatar-image"
          />
          <button
            type="button"
            className="profile__avatar-edit-button"
            onClick={props.onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <div className="profile__card">
            <h1 className="profile__name typo typo_size_xl hide-text-overflow">
              {currentUser.name}
            </h1>
            <button
              type="button"
              className="profile__edit-button"
              onClick={props.onEditProfile}
            >
              <img
                className="profile__edit-button-img"
                src={editButton}
                alt="кнопка редактирования профиля"
              />
            </button>
          </div>
          <h2 className="profile__job typo typo_size_l hide-text-overflow">
            {currentUser.about}
          </h2>
        </div>
        <button
          type="button"
          className="profile__add-button profile__add-button_pos-main"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="places section-pos">{cardElements}</section>
    </main>
  );
}
