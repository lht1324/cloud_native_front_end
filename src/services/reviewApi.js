import axios from "axios";

const API = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        "Content-Type": "application/json",
    },
    validateStatus: (status) => {
        return true;
    }
});

export const postReview = ({ storeName, author, review, starCount }) => API.post("/review", { storeName, author, review, starCount });
export const postReviewList = (userId = undefined, reviewIdList) => API.post("/review/list", { userId: userId, reviewIdList: reviewIdList });
export const putReview = (newReview) => API.put(`/review/${newReview.id}`, newReview)
export const deleteReview = (reviewId) => API.delete(`/reviews/${reviewId}`);