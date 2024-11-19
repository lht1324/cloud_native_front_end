import {memo} from "react";

function Spacer({ width = "100%", height = "100%" }) {
    const style = { width: width, height: height }

    return (
        <div className="spacer" style={style}/>
    )
}

export default memo(Spacer);