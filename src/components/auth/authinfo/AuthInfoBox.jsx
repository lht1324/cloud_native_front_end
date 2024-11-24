import "./AuthInfoBox.css"
import Row from "../../public/Row";
import Column from "../../public/Column";
import Spacer from "../../public/Spacer";
import AuthInfoInput from "./AuthInfoInput";
import {Link} from "react-router-dom";

function AuthInfoBox({
    title,
    isLogin = true,
    onChangeId,
    onChangePassword,
    onChangeNickname = () => { },
    onClickButton
}) {
    return (
        <div className="auth_info_box_wrapper">
            <p className="auth_info_box_title">{title}</p>
            <Spacer height="15px"/>
            <Column className="auth_info_box_container">
                <Row className="auth_info_box_input_container">
                    <span className="auth_info_box_type">아이디</span>
                    <Spacer width="12px"/>
                    <AuthInfoInput type="text" onChange={onChangeId}/>
                </Row>
                <Spacer height="12px"/>
                <Row className="auth_info_box_input_container">
                    <span className="auth_info_box_type">비밀번호</span>
                    <Spacer width="12px"/>
                    <AuthInfoInput type="password" onChange={onChangePassword}/>
                </Row>
                {!isLogin && <Spacer height="12px"/>}
                {!isLogin && <Row className="auth_info_box_input_container">
                    <span className="auth_info_box_type">닉네임</span>
                    <Spacer width="12px"/>
                    <AuthInfoInput type="password" onChange={onChangeNickname}/>
                </Row>}
                <Spacer height="12px"/>
                <button className="auth_info_box_button" onClick={onClickButton}>{title}</button>
                <Spacer height="12px"/>
                {isLogin && <Link className="auth_info_box_sign_up_link" to="/signup">계정이 없으신가요?</Link>}
            </Column>
        </div>
    )
}

export default AuthInfoBox;