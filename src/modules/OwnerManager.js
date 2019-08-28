const remoteURL = "http://localhost:5002";

export default {
    get(id) {
        return fetch(`${remoteURL}/owners/${id}`).then(result => result.json());
    },

    getAll() {
        return fetch(`${remoteURL}/owners`).then(result => result.json());
    },

    delete(id) {
        return fetch(`${remoteURL}/owners/${id}`, {
            method: "DELETE"
        }).then(response => response.json());
    },

    saveOwner(newOwner) {
        return fetch(`${remoteURL}/owners`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newOwner)
        }).then(response => response.json());
    },

    edit(owner) {
        return fetch(`${remoteURL}/owners/${owner.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(owner)
        }).then(response => response.json());
    }

};