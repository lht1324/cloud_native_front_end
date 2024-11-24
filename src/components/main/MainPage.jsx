import MainBody from "./MainBody";
import "./MainPage.css"
import {memo} from "react";

function MainPage({ isLoggedIn, userInfo }) {
    return (
        <div className="main_page_wrapper">
            <MainBody isLoggedIn={isLoggedIn} userInfo={userInfo} />
        </div>
    )
}

export default memo(MainPage);