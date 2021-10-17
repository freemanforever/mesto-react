import React from "react";
import likeButton from "../images/likeButton.svg";
import recycleButton from "../images/recycleButton.svg";

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }
    return (
        <div className="place-card" key={props._id}>
            <img alt="Фото места" className="place-card__image"
                 src={props.link} onClick={handleClick} />
            <button type="button" className="place-card__recycleButton">
                <img src={recycleButton} alt="Корзина"
                     className="place-card__recycle-img"/>
            </button>
            <div className="place-card__label">
                <h3 className="place-card__header typo typo_size_xxl hide-text-overflow">{props.name}</h3>
                <button type="button" className="place-card__like-button">
                    <img className="place-card__like-img" src={likeButton}
                         alt="кнопка 'Мне нравится!'"/>
                    <p className="place-card__like-count typo_size_xs">{props.likes.length}</p>
                </button>
            </div>
        </div>
    )
}

export default Card;