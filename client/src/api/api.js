import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "8c9deacd-bd04-4b1e-9a2e-325d83666318"}
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

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`).then(response => {
           return response.data;
        })
    },
    login(email,password,rememberMe = false) {
        return instance.post('/auth/login', {email,password,rememberMe})
    },
    logout() {
        return instance.delete('/auth/login')
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => {
           return response.data;
        })
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status})
    }
}


