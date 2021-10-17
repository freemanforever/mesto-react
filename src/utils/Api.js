const apiConfig = {
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-27',
    headers: {
        authorization: '32e537f0-5d42-44fe-b91c-e46296511fbf',
        'Content-Type': 'application/json'
    }
}

class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    returnResultStatus(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status} : ${res.statusText}`);
    }

    getUserInfo() {
        return fetch(this._baseUrl + '/users/me', {headers: this._headers})
            .then(this.returnResultStatus)
    }

    getInitialCards() {
        return fetch(this._baseUrl + '/cards', {headers: this._headers})
            .then(this.returnResultStatus)
    }

    sendProfileInfo({name, about}) {
        return fetch(
            this._baseUrl + '/users/me',
            {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    name: name,
                    about: about
                })
            }
        )
            .then(this.returnResultStatus)
    }

    addCard({name, link}) {
        return fetch(
            this._baseUrl + '/cards',
            {
                method: 'POST',
                headers: this._headers,
                body: JSON.stringify({
                    name,
                    link
                })
            }
        )
            .then(this.returnResultStatus)
    }

    delCard(cardId) {
        return fetch(
            this._baseUrl + `/cards/${cardId}`,
            {
                method: 'DELETE',
                headers: this._headers
            })
            .then(this.returnResultStatus)
    }

    addLike(cardId) {
        return fetch(
            this._baseUrl + `/cards/likes/${cardId}`,
            {
                method: 'PUT',
                headers: this._headers
            }
        )
            .then(this.returnResultStatus)
    }

    delLike(cardId) {
        return fetch(
            this._baseUrl + `/cards/likes/${cardId}`,
            {
                method: 'DELETE',
                headers: this._headers
            }
        )
            .then(this.returnResultStatus);
    }

    setAvatar({avatar}) {
        return fetch(
            this._baseUrl + '/users/me/avatar',
            {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    avatar: avatar,
                })
            }
        )
            .then(this.returnResultStatus)
    }
}

const api = new Api(apiConfig);

export default api;