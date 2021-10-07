import logo from './logo.svg';
import './index.css';

function App() {
    return (
        <div className="App">
            <header className="header section-pos">
                <img src="<%=require('./images/logo.svg')%>" alt="логотип проекта Место" className="header__logo"/>
            </header>
            <main className="content">
                <section className="profile section-pos">
                    <div className="profile__avatar-container">
                        <img src="<%=require('./images/avatar.svg')%>" alt="Аватар пользователя"
                             className="profile__avatar-image"/>
                        <button type="button" className="profile__avatar-edit-button"></button>
                    </div>
                    <div className="profile__info">
                        <div className="profile__card">
                            <h1 className="profile__name typo typo_size_xl hide-text-overflow">Жак-Ив Кусто</h1>
                            <button type="button" className="profile__edit-button">
                                <img className="profile__edit-button-img" src="<%=require('./images/editButton.svg')%>"
                                     alt="кнопка редактирования профиля"/>
                            </button>
                        </div>
                        <h2 className="profile__job typo typo_size_l hide-text-overflow">Исследователь океана</h2>
                    </div>
                    <button type="button" className="profile__add-button profile__add-button_pos-main">
                    </button>
                </section>

                <section className="places section-pos"></section>


                <section className="popup popup-profile-edit">
                    <button type="button" className="popup__close-button popup__close-button-form"><img
                        className="popup__close-button-img"
                        src="<%=require('./images/closeButton.svg')%>" alt="кнопка закрытия формы"/></button>
                    <div className="popup__container">
                        <form name="popupEditForm" className="popup__form form-profile" noValidate>
                            <h3 className="popup__caption typo typo_size_xxl">Редактировать профиль</h3>
                            <input className="popup__input popup__input_name typo typo_size_s" name="Name" value=""
                                   autoComplete="off"
                                   required minLength="2" maxLength="40" id="profile-name" placeholder="Имя"/>
                            <span className="popup__input-error" id="profile-name-error"></span>
                            <input className="popup__input popup__input_job typo typo_size_s" name="Job" value=""
                                   autoComplete="off"
                                   required minLength="2" maxLength="200" id="profile-job" placeholder="Занятие"/>
                            <span className="popup__input-error" id="profile-job-error"></span>
                            <button className="popup__save-button" type="submit">Сохранить</button>
                        </form>
                    </div>
                </section>


                <section className="popup popup-place-add">
                    <button type="button" className="popup__close-button popup__close-button-form"><img
                        className="popup__close-button-img"
                        src="<%=require('./images/closeButton.svg')%>" alt="кнопка закрытия формы"/></button>
                    <div className="popup__container">
                        <form name="popupFormPlace" className="popup__form form-place" noValidate>
                            <h3 className="popup__caption typo typo_size_xxl">Новое место</h3>
                            <input className="popup__input popup__input_place-name typo typo_size_s" name="PlaceName"
                                   value=""
                                   placeholder="Название" autoComplete="off" required minLength="2" maxLength="30"
                                   id="place-name"/>
                            <span className="popup__input-error" id="place-name-error"></span>
                            <input className="popup__input typo typo_size_s" name="PlaceImage" value=""
                                   placeholder="Ссылка на картинку" autoComplete="off" required id="place-link"
                                   type="url"/>
                            <span className="popup__input-error" id="place-link-error"></span>
                            <button className="popup__save-button" type="submit">Создать</button>
                        </form>
                    </div>
                </section>
                <section className="popup popup-img">
                    <div className="popup-img__container">
                        <button type="button" className="popup-img__close-button popup__close-button">
                            <img className="popup__close-button-img" src="<%=require('./images/closeButton.svg')%>"
                                 alt="кнопка закрытия формы"/>
                        </button>
                        <img className="popup-img__opened-image" alt="Оригинал изображения"
                             src="<%=require('./images/closeButton.svg')%>"/>
                        <p className="popup-img__header"></p>
                    </div>
                </section>
                <section className="popup popup-del-confirm">
                    <button type="button" className="popup__close-button popup__close-button-form">
                        <img className="popup__close-button-img"
                             src="<%=require('./images/closeButton.svg')%>" alt="кнопка закрытия формы"/></button>
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
                             src="<%=require('./images/closeButton.svg')%>" alt="кнопка закрытия формы"/></button>
                    <div className="popup__container">
                        <form name="popupFormAvatarEdit" className="popup__form form-avatar" noValidate>
                            <h3 className="popup-avatar-edit__caption typo typo_size_xxl">Обновить аватар</h3>
                            <input className="popup-avatar-edit__input popup__input  typo typo_size_s"
                                   name="AvatarImage" value=""
                                   placeholder="Обновить аватар(введите ссылку на картинку)" autoComplete="off" required
                                   id="avatar-link" type="url"/>
                            <span className="popup__input-error" id="avatar-link-error"></span>
                            <button className="popup-avatar-edit__button popup__save-button" type="submit">Сохранить
                            </button>
                        </form>
                    </div>
                </section>

            </main>

            <footer className="footer section-pos">
                <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
            </footer>
        </div>
    )
}

export default App;
