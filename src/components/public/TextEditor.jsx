import {memo, useCallback, useState} from "react";

function TextEditor({
    className,
    placeholder,
    onChange,
    style,
    isSingleLine = false
}) {
    const [text, setText] = useState("")
    const onChangeText = useCallback((e) => {
        if (isSingleLine) {
            const newText = e.target.value.replace(/\n/g, "\n")
            
            if (!newText.includes("\n")) {
                setText(e.target.value)
                onChange(e.target.value)
            }
        } else {
            setText(e.target.value)
            onChange(e.target.value)
        }
    }, [isSingleLine, onChange])
    
    return (
        <textarea
            className={className}
            placeholder={placeholder}
            value={text}
            onChange={onChangeText}
            style={style}
        />
    )
}

export default memo(TextEditor);