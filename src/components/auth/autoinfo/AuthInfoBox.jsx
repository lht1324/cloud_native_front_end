import "./AuthInfoBox.css"
import Row from "../../public/Row";
import Column from "../../public/Column";
import {useCallback, useRef} from "react";
import Spacer from "../../public/Spacer";
import AuthInfoInput from "./AuthInfoInput";

function AuthInfoBox({ title, onClickFinishButton }) {
    const id = useRef("");
    const password = useRef("");

    const onChangeId = useCallback((text) => {
        id.current = text
    }, [])
    const onChangePassword = useCallback((text) => {
        password.current = text
    }, [])

    const onClickButton = useCallback(() => {
        if (id.current.length !== 0 && password.current.length !== 0) {
            onClickFinishButton()
        } else {
            alert("아이디와 비밀번호를 모두 입력해주세요.")
        }
    }, [onClickFinishButton])

    return (
        <div className="auth_info_box_wrapper">
            <p className="auth_info_box_title">{title}</p>
            <Spacer height="15px"/>
            <Column className="auth_info_box_container">
                <Row className="auth_info_box_input_container">
                    <span className="auth_info_box_type">아이디</span>
                    <Spacer width="12px"/>
                    <AuthInfoInput type="text" value={id} onChange={onChangeId}/>
                </Row>
                <Spacer height="12px"/>
                <Row className="auth_info_box_input_container">
                    <span className="auth_info_box_type">비밀번호</span>
                    <Spacer width="12px"/>
                    <AuthInfoInput type="text" value={password} onChange={onChangePassword}/>
                </Row>
                <Spacer height="12px"/>
                <button className="auth_info_box_button" onClick={onClickButton}>{title}</button>
            </Column>
        </div>
    )
}

export default AuthInfoBox;