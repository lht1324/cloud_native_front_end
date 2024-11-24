import {memo, useCallback, useEffect, useState} from "react";

function TextEditor({
    className,
    initialValue = "",
    placeholder = "",
    onChange,
    style = { },
    isSingleLine = false
}) {
    const [text, setText] = useState(initialValue);
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

    useEffect(() => {
        if (text.length === 0) {
            setText(initialValue);
        }
    }, [initialValue]);
    
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