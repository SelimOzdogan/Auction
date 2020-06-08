const BASE_URL = `http://localhost:3000/api/v1`;

export const Auction = {
    index() {
        return fetch(`${BASE_URL}/auctions`, {
            credentials: 'include'
        }).then(res => res.json())
    },
    one(id) {
        return fetch(`${BASE_URL}/auctions/${id}`, {
            credentials: 'include'
        }).then(res => res.json())
    },
    create(params) {
        return fetch(`${BASE_URL}/auctions`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then(res => res.json())
    }
};
export const Bid = {
    index() {
        return fetch(`${BASE_URL}/auctions`, {
            credentials: 'include'
        }).then(res => res.json())
    },
    one(id) {
        return fetch(`${BASE_URL}/auctions/${id}`, {
            credentials: 'include'
        }).then(res => res.json())
    },
    create(params) {
        return fetch(`${BASE_URL}/auctions`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then(res => res.json())
    }
};

export const Session = {
    create(params) {
        return fetch(`${BASE_URL}/session`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params),
        }).then((res) => {
            return res.json();
        });
    },
    destroy() {
        return fetch(`${BASE_URL}/session`, {
            method: "DELETE",
        }).then((res) => res.json());
    },
};

export const User = {
    current() {
        return fetch(`${BASE_URL}/users/current`, {
            method: "GET",
            credentials: "include",
        }).then((res) => res.json());
    },
};

export default {
    Auction,
    Session,
    User,
};