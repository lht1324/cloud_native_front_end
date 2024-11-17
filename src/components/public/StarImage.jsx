import {memo} from "react";
import FullStar from "../../assets/image/ic_star_full.png";
import HalfStar from "../../assets/image/ic_star_half.png";
import EmptyStar from "../../assets/image/ic_star_empty.png";

const StarImage = memo(({starState, alt, style = {}}) => {
    const imageStyle = {
        ...{
            width: "32px",
            height: "32px",
        },
        ...style
    }

    return (
        <img
            src={starState === 1.0 ? FullStar : starState === 0.5 ? HalfStar : EmptyStar}
            alt={alt}
            style={imageStyle}
        />
    )
})

export default StarImage;