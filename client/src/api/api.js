import axios from "axios";
import {API_URL} from "../config";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
})


export const usersAPI = {

    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    },
    unfollow(userId) {
        return instance.delete('follow/' + userId).then(response => {
            return response.data;
        })
    },
    follow(userId) {
        return instance.post('follow/' + userId).then(response => {
            return response.data;
        })
    }

}

export const registerAPI = {

    register(email, name, password) {
        return instance.post('/auth/registration', {email, name, password})
    }
}


export const authAPI = {
    authMe() {
        return instance.get(`auth/auth`).then(response => {
            return response.data;
        })
    },
    login(email, password) {
        return instance.post('/auth/login', {email, password}).then(response => {
            return response.data;
        })
    },
    passwordChange(data) {
        return instance.patch(`auth/change-password`, {data}).then(response => {
            return response.data;
        })
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile?userId=${userId}` ).then(response => {
            return response.data;
        })
    },
    getStatus() {
        return instance.get(`profile/getstatus`)
    },
    updateStatus(status) {
        return instance.patch(`profile/status`, {status})
    },
    updateProfile(newData) {
        return instance.patch(`profile/update-profile`, {newData}).then(response => {
            return response.data;
        })
    },
    updateAvatar(file) {
        return axios.post(`${API_URL}api/profile/avatar`, file,
            {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
        ).then(response => {
            return response.data
        })
    },
    deleteAvatar() {
        return instance.delete(`profile/avatar`).then(response => {
            return response.data;
        })
    }
}


