function Divider({ isHorizontal = true, color = "black" }) {
    const style = isHorizontal ?
        { width: "100%", height: "1px", backgroundColor: color } :
        { width: "1px", height: "100%", backgroundColor: color }

    return (
        <div className="divider" style={style}/>
    )
}

export default Divider