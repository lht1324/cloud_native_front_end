function Column({ children, className, style }) {
    const columnStyle = {
        ...{
            display: 'flex',
            flexDirection: 'column',
        },
        ...style,
    }
    return (
        <div className={className} style={columnStyle}>
            {children}
        </div>
    )
}

export default Column;