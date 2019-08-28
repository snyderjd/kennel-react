const remoteURL = "http://localhost:5002";

export default {
    get(id) {
        return fetch(`${remoteURL}/employees/${id}`).then(result => result.json());
    },

    getAll() {
        return fetch(`${remoteURL}/employees`).then(result => result.json());
    },

    delete(id) {
        return fetch(`${remoteURL}/employees/${id}`, {
            method: "DELETE"
        }).then(response => response.json());
    },

    saveEmployee(newEmployee) {
        return fetch(`${remoteURL}/employees`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }).then(response => response.json());
    },

    edit(employee) {
        return fetch(`${remoteURL}/employees/${employee.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        }).then(response => response.json());
    }

};