import {memo, useCallback, useState} from "react";

function TextEditor({
    className,
    placeholder,
    onChange,
    style,
    rows = undefined
}) {
    const [text, setText] = useState("")
    const onChangeText = useCallback((e) => {
        setText(e.target.value)
        onChange(e.target.value)
    }, [setText, onChange])
    
    return (
        <textarea
            className={className}
            placeholder={placeholder}
            value={text}
            onChange={onChangeText}
            style={style}
            rows={rows}
        />
    )
}

export default memo(TextEditor);