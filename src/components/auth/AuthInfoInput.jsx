import "./AuthInfoInput.css"
import Row from "../public/Row";
import Column from "../public/Column";
import {useCallback, useState} from "react";
import Spacer from "../public/Spacer";

function AuthInfoInput({ title }) {
    const [id, setId] = useState("")
    const [password, setPassword] = useState("")

    const onChangeId = useCallback((e) => {
        setId(e.target.value)
    }, [])
    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value)
    }, [])

    return (
        <div className="auth_info_input_wrapper">
            <p className="auth_info_input_title">{title}</p>
            <Spacer length={15}/>
            <Column className="auth_info_input_container">
                <Row className="auth_info_input_input_container">
                    <span className="auth_info_input_type">아이디</span>
                    <Spacer isHorizontal={false} length={12}/>
                    <input className="auth_info_input_input_box" type="text" value={id} onChange={onChangeId}/>
                </Row>
                <Spacer length={12}/>
                <Row className="auth_info_input_input_container">
                    <span className="auth_info_input_type">비밀번호</span>
                    <Spacer isHorizontal={false} length={12}/>
                    <input className="auth_info_input_input_box" type="text" value={password}
                           onChange={onChangePassword}/>
                </Row>
            </Column>
        </div>
    )
}

export default AuthInfoInput;