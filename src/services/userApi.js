import axios from "axios";

const API = axios.create({
    baseURL: 'http://localhost:5000',
});

export const postUserLogin = (userInfo) => API.post("/user", userInfo);
export const getUserInfo = () => API.get("/user");
export const putUserInfo = (userInfo) => API.put("/user", userInfo);
export const deleteUserInfo = (userId) => API.delete(`/user/${userId}`);