import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
})


export const usersAPI = {

    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    },
    unfollow(userId) {
        return instance.delete('follow/'+ userId).then(response => {
            return response.data;
        })
    },
    follow(userId) {
        return instance.post('follow/'+ userId).then(response => {
            return response.data;
        })
    }

}

export const registerAPI = {

    register(email, name, password) {
        return instance.post('/auth/registration', {email,name,password})
    }
}


export const authAPI = {
    authMe() {
        return instance.get(`auth/auth`).then(response => {
           return response.data;
        })
    },
    login(email,password) {
        return instance.post('/auth/login', {email,password}).then(response => {
            return response.data;
        })
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => {
           return response.data;
        })
    },
    getStatus(userId) {
        return instance.get(`profile/getstatus/${userId}`)
    },
    updateStatus(userId, status) {
        return instance.patch(`profile/status/${userId}`, {status})
    }
}


