function Row({ children, className, style, onClick = () => { } }) {
    const rowStyle = {
        ...{
            display: 'flex',
            flexDirection: 'row',
        },
        ...style,
    }
    return (
        <div className={className} style={rowStyle} onClick={onClick}>
            {children}
        </div>
    )
}

export default Row;