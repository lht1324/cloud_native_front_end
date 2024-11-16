function Row({ children, className, style }) {
    const rowStyle = {
        ...{
            display: 'flex',
            flexDirection: 'row',
        },
        ...style,
    }
    return (
        <div className={className} style={rowStyle}>
            {children}
        </div>
    )
}

export default Row;