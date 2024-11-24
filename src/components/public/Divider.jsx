function Divider({ width = "100%", height = "100%", color = "black" }) {
    const style = { width: width, height: height, backgroundColor: color }

    return (
        <div className="divider" style={style}/>
    )
}

export default Divider