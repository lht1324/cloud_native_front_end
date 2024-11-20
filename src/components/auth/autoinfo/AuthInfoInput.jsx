import "./AuthInfoInput.css"
import {useCallback, useState} from "react";

function AuthInfoInput({ type, onChange }) {
    const [text, setText] = useState("")
    const onChangeText = useCallback((e) => {
        const newText = e.target.value.replace(/\n/g, "\n")

        if (!newText.includes("\n")) {
            setText(newText)
            onChange(newText)
        }

    }, [onChange])

    return <input
        className="auth_info_input"
        type={type}
        value={text}
        onChange={onChangeText}
    />
}

export default AuthInfoInput;