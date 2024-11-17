import "./ReviewList.css"
import ReviewListItem from "./ReviewListItem";
import {memo} from "react";

function ReviewList({ reviewDataList = [] }) {
    return(
        <div className="review_list_wrapper">
            {
                reviewDataList.map((reviewData, index) => {
                    return <ReviewListItem key={index} reviewData={reviewData}/>
                })
            }
        </div>
    )
}

export default memo(ReviewList);