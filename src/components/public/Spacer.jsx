function Spacer({ isHorizontal = true, length = 10 }) {
    const style = isHorizontal ?
        { width: "100%", height: `${length}px` } :
        { width: `${length}px`, height: "100%" }

    return (
        <div className="spacer" style={style}/>
    )
}

export default Spacer