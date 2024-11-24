import axios from "axios";

axios.defaults.withCredentials = true;

const API = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        "Content-Type": "application/json",
    },
    validateStatus: (status) => {
        return true;
    }
});
const APIOption = {
    withCredentials: true,
}

export const postUserSignIn = async ({ id, password }) => API.post("/user/signin", { id, password }, APIOption);
export const postUserSignUp = async ({ id, password, nickname }) => API.post("/user/signup", { id, password, nickname });
export const getSignInAuto = async () => API.get("/user/signin-auto", APIOption);
export const postLogout = async () => API.post("/user/logout");
export const getUserInfoById = async (id) => API.get(`/user/${id}`);
export const putUserInfo = async ({ rowId, id, nickname, reviewIdList }) => API.put(`/user`, { rowId, id, nickname, reviewIdList });
export const deleteUserInfo = async (userId) => API.delete(`/user/${userId}`);