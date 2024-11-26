import "./ReviewList.css"
import ReviewListItem from "./ReviewListItem";
import {memo, useEffect, useState} from "react";
import useAxiosRequest from "../../../hook/useAxiosRequest";
import {postReviewList} from "../../../services/reviewApi";

function ReviewList({ id = undefined, reviewIdList = [] }) {
    const { requestAPI } = useAxiosRequest();

    const [reviewDataList, setReviewDataList] = useState([]);

    useEffect(() => {
        const getReviewDataList = async () => {
            await requestAPI(
                postReviewList(id, reviewIdList),
                (data) => {
                    setReviewDataList(data.reviewDataList.sort((a, b) => {
                        return new Date(b.registerDate) - new Date(a.registerDate);
                    }))
                },
                (statusCode, message) => {
                    console.log(`getReviewDataList [${statusCode}]: ${message}`);
                },
                (error) => {
                    console.log(`getReviewDataList Error: ${error.message}`);
                }
            )
        }

        getReviewDataList();
    }, [])

    return(
        <div className="review_list_wrapper">
            {reviewDataList.length !== 0 && reviewDataList.map((reviewData, index) => {
                return <ReviewListItem
                    key={reviewData.id}
                    reviewData={reviewData}
                    isLastItem={reviewDataList.length === index + 1}
                />
            })}
            {reviewDataList.length === 0 && <div/>}
        </div>
    )
}

export default memo(ReviewList);