import axios from "axios";

const API = axios.create({
    baseURL: 'http://localhost:5000',
});

export const createReview = (review) => API.post("", review);
export const readReview = () => API.get("/review");
export const updateReview = (newReview) => API.put(`/review/${newReview.id}`, newReview)
export const deleteReview = (reviewId) => API.delete(`/reviews/${reviewId}`);