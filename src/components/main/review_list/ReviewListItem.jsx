import "./ReviewListItem.css"
import ProfilePlaceholder from "../../../assets/image/ic_profile_placeholder.png"
import {getIntList} from "../../../js/functions";
import Spacer from "../../public/Spacer";
import Profile from "./Profile";
import StarImage from "../../public/StarImage";
import {memo} from "react";

function ReviewListItem({ reviewData, isLastItem }) {
    return(
        <div
            className="review_list_item_wrapper"
            style={isLastItem ? { } : { marginBottom: "15px" }}
        >
            <h3>{reviewData.storeName}</h3>
            <Spacer height="24px"/>
            <p className="review">{reviewData.review}</p>
            <Spacer height="40px"/>
            <Profile profileSrc={ProfilePlaceholder} author={reviewData.author}/>
            <Spacer height="12px"/>
            {
                getIntList(5).map((starIndex) => {
                    const starState = starIndex < reviewData.starCount
                        ? (reviewData.starCount - starIndex) === 0.5 ? 0.5 : 1.0
                        : 0.0

                    return <StarImage
                        key={`star${starIndex}`}
                        starState={starState}
                        alt=""
                    />
                })
            }
        </div>
    )
}

export default memo(ReviewListItem);