import {memo} from "react";

function TextEditor({
    className,
    placeholder,
    value,
    onChange,
    style,
}) {
    return (
        <textarea
            className={className}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e)}
            style={style}
        />
    )
}

export default memo(TextEditor);