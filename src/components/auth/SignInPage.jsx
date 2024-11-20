import "./SignInPage.css"
import Header from "../public/Header";
import AuthInfoBox from "./autoinfo/AuthInfoBox";
import Spacer from "../public/Spacer";
import Footer from "../public/Footer";
import {useCallback, useRef} from "react";
import {postUserLogin} from "../../services/userApi";

function SignInPage() {
    const id = useRef("")
    const password = useRef("")

    const onChangeId = useCallback((text) => {
        postUserLogin({ id: "id", password: "1324mm55" })
        id.current = text
    }, [])
    const onChangePassword = useCallback((text) => {
        postUserLogin({ id: "lht1324", password: "password" })
        password.current = text
    }, [])

    const onClickLoginButton = useCallback((id, password, onSuccess, onFailure) => {
        postUserLogin(id, password).then((res) => {

        })
        return () => {
            return id
        }
    }, [])

    return (
        <div className="sign_in_page_wrapper">
            <Header />
            <Spacer height="48px"/>
            <AuthInfoBox
                title="로그인"
                onChangeId={onChangeId}
                onChangePassword={onChangePassword}
                onClickFinishButton={onClickLoginButton}
            />
            <Footer/>
        </div>
    )
}

export default SignInPage;