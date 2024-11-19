import "./SignInPage.css"
import Header from "../public/Header";
import AuthInfoInput from "./AuthInfoInput";
import Spacer from "../public/Spacer";
import Footer from "../public/Footer";

function SignInPage() {
    return (
        <div className="sign_in_page_wrapper">
            <Header />
            <Spacer height="48px"/>
            <AuthInfoInput title="로그인"/>
            <Footer/>
        </div>
    )
}

export default SignInPage;