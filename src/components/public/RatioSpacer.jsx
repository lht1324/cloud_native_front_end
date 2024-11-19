import {memo} from "react";

function RatioSpacer({ isHorizontal = true, ratio = 5 }) {
    const style = isHorizontal ?
        { width: "100%", height: `${ratio}vh` } :
        { width: `${ratio}vw`, height: "100%" }

    return (
        <div className="ratio_spacer" style={style}/>
    )
}

export default memo(RatioSpacer);