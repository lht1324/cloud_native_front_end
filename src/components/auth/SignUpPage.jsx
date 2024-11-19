import "./SignUpPage.css"
import Header from "../public/Header";
import Spacer from "../public/Spacer";
import AuthInfoBox from "./autoinfo/AuthInfoBox";
import Footer from "../public/Footer";

function SignUpPage() {
    return (
        <div className="sign_up_page_wrapper">
            <Header />
            <Spacer height="48px"/>
            <AuthInfoBox title="회원가입"/>
            <Footer/>
        </div>
    )
}

export default SignUpPage;