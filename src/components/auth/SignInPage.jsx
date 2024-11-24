import "./SignInPage.css"
import AuthInfoBox from "./authinfo/AuthInfoBox";
import Spacer from "../public/Spacer";
import {useCallback, useRef} from "react";
import {postUserSignIn} from "../../services/userApi";
import {useNavigate} from "react-router-dom";
import useAxiosRequest from "../../hook/useAxiosRequest";

function SignInPage({ onChangeIsLoggedIn }) {
    const navigate = useNavigate();
    const { requestAPI } = useAxiosRequest();

    const id = useRef("");
    const password = useRef("");

    const onChangeId = useCallback((text) => {
        id.current = text;
    }, [])
    const onChangePassword = useCallback((text) => {
        password.current = text;
    }, [])

    const onClickLoginButton = useCallback(async () => {
        await requestAPI(
            postUserSignIn({ "id": id.current, "password": password.current }),
            (data) => {
                alert("로그인되었습니다.")
                onChangeIsLoggedIn(true);
                navigate("/")
            },
            (statusCode, message) => {
                if (statusCode !== 500) {
                    alert(message);
                } else {
                    alert("서버 에러가 발생했습니다. 다시 시도해주세요.");
                }
            },
            (error) => {
                console.log(JSON.stringify(error))
                alert("에러가 발생했습니다. 다시 시도해주세요.");
            },
        )
    }, [navigate, onChangeIsLoggedIn, requestAPI])

    return (
        <div className="sign_in_page_wrapper">
            <Spacer height="48px"/>
            <AuthInfoBox
                title="로그인"
                onChangeId={onChangeId}
                onChangePassword={onChangePassword}
                onClickButton={onClickLoginButton}
            />
        </div>
    )
}

export default SignInPage;