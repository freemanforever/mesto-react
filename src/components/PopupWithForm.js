import closeButton from "../images/closeButton.svg";


<section className="popup popup-profile-edit">
    <button type="button" className="popup__close-button popup__close-button-form"><img
        className="popup__close-button-img"
        src={closeButton} alt="кнопка закрытия формы"/></button>
    <div className="popup__container">
        <form name="popupEditForm" className="popup__form form-profile" noValidate>
            <h3 className="popup__caption typo typo_size_xxl">Редактировать профиль</h3>
            <input className="popup__input popup__input_name typo typo_size_s" name="Name" value=""
                   autoComplete="off"
                   required minLength="2" maxLength="40" id="profile-name" placeholder="Имя"/>
            <span className="popup__input-error" id="profile-name-error"/>
            <input className="popup__input popup__input_job typo typo_size_s" name="Job" value=""
                   autoComplete="off"
                   required minLength="2" maxLength="200" id="profile-job" placeholder="Занятие"/>
            <span className="popup__input-error" id="profile-job-error"/>
            <button className="popup__save-button" type="submit">Сохранить</button>
        </form>
    </div>
</section>


<section className="popup popup-place-add">
    <button type="button" className="popup__close-button popup__close-button-form"><img
        className="popup__close-button-img"
        src={closeButton} alt="кнопка закрытия формы"/></button>
    <div className="popup__container">
        <form name="popupFormPlace" className="popup__form form-place" noValidate>
            <h3 className="popup__caption typo typo_size_xxl">Новое место</h3>
            <input className="popup__input popup__input_place-name typo typo_size_s" name="PlaceName"
                   value=""
                   placeholder="Название" autoComplete="off" required minLength="2" maxLength="30"
                   id="place-name"/>
            <span className="popup__input-error" id="place-name-error"/>
            <input className="popup__input typo typo_size_s" name="PlaceImage" value=""
                   placeholder="Ссылка на картинку" autoComplete="off" required id="place-link"
                   type="url"/>
            <span className="popup__input-error" id="place-link-error"/>
            <button className="popup__save-button" type="submit">Создать</button>
        </form>
    </div>
</section>
<section className="popup popup-del-confirm">
    <button type="button" className="popup__close-button popup__close-button-form">
        <img className="popup__close-button-img"
             src={closeButton} alt="кнопка закрытия формы"/></button>
    <div className="popup__container">
        <form className="popup__form" name="popupDelConfirm" noValidate>
            <h3 className="popup-del-confirm__caption typo typo_size_xxl">Вы уверены?</h3>
            <button className="popup__save-button popup-del-confirm__button" type="submit">Да</button>
        </form>
    </div>
</section>
<section className="popup popup-avatar-edit">
    <button type="button" className="popup__close-button popup__close-button-form">
        <img className="popup__close-button-img"
             src={closeButton} alt="кнопка закрытия формы"/></button>
    <div className="popup__container">
        <form name="popupFormAvatarEdit" className="popup__form form-avatar" noValidate>
            <h3 className="popup-avatar-edit__caption typo typo_size_xxl">Обновить аватар</h3>
            <input className="popup-avatar-edit__input popup__input  typo typo_size_s"
                   name="AvatarImage" value=""
                   placeholder="Обновить аватар(введите ссылку на картинку)" autoComplete="off" required
                   id="avatar-link" type="url"/>
            <span className="popup__input-error" id="avatar-link-error"/>
            <button className="popup-avatar-edit__button popup__save-button" type="submit">Сохранить
            </button>
        </form>
    </div>
</section>