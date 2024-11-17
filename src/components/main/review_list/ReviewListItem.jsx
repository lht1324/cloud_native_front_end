import "./ReviewListItem.css"
import FullStar from "../../../assets/image/ic_star_full.png"
import HalfStar from "../../../assets/image/ic_star_half.png"
import EmptyStar from "../../../assets/image/ic_star_empty.png"
import ProfilePlaceholder from "../../../assets/image/ic_profile_placeholder.png"
import {getIntList} from "../../../js/functions";
import Spacer from "../../public/Spacer";
import Profile from "./Profile";
import StarImage from "../../public/StarImage";

function ReviewListItem({ key, reviewData }) {
    return(
        <div key={key} className="review_list_item_wrapper">
            <h3>{reviewData.storeName}</h3>
            <Spacer length={25}/>
            <p className="review">{reviewData.review}</p>
            <Spacer length={40}/>
            <Profile profileSrc={ProfilePlaceholder} author={reviewData.author}/>
            <Spacer/>
            {

                getIntList(5).map((starIndex) => {
                    const starSrc = getStarSrc(starIndex, reviewData.starCount)

                    return <StarImage
                        key={`star${starIndex}`}
                        src={starSrc}
                        alt=""
                        style={{width: "32px", height: "32px"}}
                    />
                })
            }
        </div>
    )
}

function getStarSrc(starIndex, starCount) {
    const startRange = starIndex
    const endRange = startRange + 1

    if (starCount <= startRange) {
        return EmptyStar
    } else if (starCount > startRange && starCount < endRange) {
        return HalfStar
    } else {
        return FullStar
    }
}

export default ReviewListItem;