import React from "react";
import likeButton from "../images/likeButton.svg";
import recycleButton from "../images/recycleButton.svg";
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Card({card, ...props}) {
    const currentUser = React.useContext(CurrentUserContext);
    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = card.owner._id === currentUser._id;
    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (
        `place-card__recycleButton ${isOwn ? 'place-card__recycleButton_visible' : 'place-card__recycleButton_hidden'}`
    );
    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = `place-card__like-button ${isLiked && "place-card__liked"}`;

    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <div className="place-card" key={props._id}>
            <img alt="Фото места" className="place-card__image"
                 src={props.link} onClick={handleClick}/>
            <button type="button" className={cardDeleteButtonClassName}>
                <img src={recycleButton} alt="Корзина" className="place-card__recycle-img"/>
            </button>
            <div className="place-card__label">
                <h3 className="place-card__header typo typo_size_xxl hide-text-overflow">{props.name}</h3>
                <button type="button" className={cardLikeButtonClassName}>
                    <img className="place-card__like-img" src={likeButton} alt="кнопка 'Мне нравится!'"/>
                    <h3 className="place-card__like-count typo_size_xs">{props.likes.length}</h3>
                </button>
            </div>
        </div>
    )
}

export default Card;