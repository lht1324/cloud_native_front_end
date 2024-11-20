import Header from "../public/Header";
import MainBody from "./MainBody";
import "./MainPage.css"
import Footer from "../public/Footer";

function MainPage(props) {
    return (
        <div className="main_page_wrapper">
            <Header />
            <MainBody/>
            <Footer/>
        </div>
    )
}

export default MainPage;