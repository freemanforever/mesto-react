import avatar from "../images/avatar.svg";
import editButton from "../images/editButton.svg";

export default Main;

function handleEditAvatarClick() {
   document.querySelector('.popup-avatar-edit').classList.add('popup_opened');
}

function handleEditProfileClick() {
    document.querySelector('.popup-profile-edit').classList.add('popup_opened');
}

function handleAddPlaceClick() {
    document.querySelector('.popup-place-add').classList.add('popup_opened');
}

function Main() {
    return (
        <main className="content">
            <section className="profile section-pos">
                <div className="profile__avatar-container">
                    <img src={avatar} alt="Аватар пользователя"
                         className="profile__avatar-image"/>
                    <button type="button" className="profile__avatar-edit-button" onClick={handleEditAvatarClick}/>
                </div>
                <div className="profile__info">
                    <div className="profile__card">
                        <h1 className="profile__name typo typo_size_xl hide-text-overflow">Жак-Ив Кусто</h1>
                        <button type="button" className="profile__edit-button" onClick={handleEditProfileClick}>
                            <img className="profile__edit-button-img" src={editButton}
                                 alt="кнопка редактирования профиля"/>
                        </button>
                    </div>
                    <h2 className="profile__job typo typo_size_l hide-text-overflow">Исследователь океана</h2>
                </div>
                <button type="button" className="profile__add-button profile__add-button_pos-main"
                        onClick={handleAddPlaceClick}>
                </button>
            </section>

            <section className="places section-pos"/>

        </main>
    )
}
