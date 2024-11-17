import Header from "../public/Header";
import MainBody from "./MainBody";
import "./MainPage.css"

function MainPage(props) {
    return (
        <div className="main_page_wrapper">
            <Header />
            <MainBody />
        </div>
    )
}

export default MainPage;