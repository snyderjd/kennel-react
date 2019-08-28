const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/animals/${id}`).then(result => result.json())
    },

    getAll() {
        return fetch(`${remoteURL}/animals`).then(result => result.json())
    },

    delete(id) {
        return fetch(`http://localhost:5002/animals/${id}`, {
            method: "DELETE"
        }).then(response => response.json());
    },

    saveAnimal(newAnimal) {
        return fetch(`${remoteURL}/animals`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAnimal)
        }).then(response => response.json());
    },

    update(editedAnimal) {
        return fetch(`${remoteURL}/animals/${editedAnimal.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedAnimal)
        }).then(data => data.json());
    }
};