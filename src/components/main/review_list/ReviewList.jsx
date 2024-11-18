import "./ReviewList.css"
import ReviewListItem from "./ReviewListItem";
import {memo} from "react";

function ReviewList({ reviewDataList = [] }) {
    return(
        <div className="review_list_wrapper">
            {
                reviewDataList.map((reviewData, index) => {
                    return <ReviewListItem
                        key={index}
                        reviewData={reviewData}
                        isLastItem={reviewDataList.length === index + 1}
                    />
                })
            }
        </div>
    )
}

export default memo(ReviewList);