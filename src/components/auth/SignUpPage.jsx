import "./SignUpPage.css"
import Header from "../public/Header";
import Spacer from "../public/Spacer";
import AuthInfoInput from "./AuthInfoInput";
import Footer from "../public/Footer";

function SignUpPage() {
    return (
        <div className="sign_up_page_wrapper">
            <Header />
            <Spacer length={48}/>
            <AuthInfoInput title="회원가입"/>
            <Footer/>
        </div>
    )
}

export default SignUpPage;