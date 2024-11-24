import "./SignUpPage.css"
import Spacer from "../public/Spacer";
import AuthInfoBox from "./authinfo/AuthInfoBox";
import {useNavigate} from "react-router-dom";
import {useCallback, useRef} from "react";
import {postUserSignUp} from "../../services/userApi";
import useAxiosRequest from "../../hook/useAxiosRequest";

function SignUpPage() {
    const navigate = useNavigate();
    const { requestAPI } = useAxiosRequest();

    const id = useRef("");
    const password = useRef("");
    const nickname = useRef("");

    const onChangeId = useCallback((text) => {
        id.current = text
    }, [])
    const onChangePassword = useCallback((text) => {
        password.current = text
    }, [])
    const onChangeNickname = useCallback((text) => {
        nickname.current = text
    }, [])

    const onClickRegisterButton = useCallback(async () => {
        if (id.current.length !== 0 && password.current.length !== 0 && nickname.current.length !== 0) {
            await requestAPI(
                postUserSignUp({
                    "id": id.current,
                    "password": password.current,
                    "nickname": nickname.current
                }),
                (data) => {
                    alert("회원가입 되었습니다.")
                    navigate("/")
                    console.log(JSON.stringify(data))
                },
                (statusCode, message) => {
                    if (statusCode !== 500) {
                        alert(message)
                    } else {
                        alert("서버 에러가 발생했습니다. 다시 시도해주세요.")
                    }
                },
                (error) => {
                    console.log(`SignUp Error: ${error.message}`)
                    alert("에러가 발생했습니다. 다시 시도해주세요.")
                }
            )
        } else {
            if (id.current.length === 0) {
                alert("아이디를 입력해주세요.");
                return;
            }

            if (password.current.length === 0) {
                alert("비밀번호를 입력해주세요.");
                return;
            }

            if (id.current.length === 0) {
                alert("닉네임을 입력해주세요.");
            }
        }
    }, [navigate, requestAPI])

    return (
        <div className="sign_up_page_wrapper">
            <Spacer height="48px"/>
            <AuthInfoBox
                title="회원가입"
                isLogin={false}
                onChangeId={onChangeId}
                onChangePassword={onChangePassword}
                onChangeNickname={onChangeNickname}
                onClickButton={onClickRegisterButton}
            />
        </div>
    )
}

export default SignUpPage;