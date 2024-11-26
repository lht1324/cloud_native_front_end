import './Header.css';
import Divider from "../Divider";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import Spacer from "../Spacer";

function Header({
    isLoggedIn = false,
    nickname,
    onClickSignIn,
    onClickSignUp,
    onClickUserInfo,
    onClickLogout
}) {
    const location = useLocation();
    
    const [isButtonVisible, setIsButtonVisible] = useState(false);

    useEffect(() => {
        setIsButtonVisible(
            (location.pathname === "/") ||
            (isLoggedIn && location.pathname === "/login") ||
            (!isLoggedIn)
        )
    }, [isLoggedIn, location.pathname]);
    
    return (
        <div className="header_wrapper">
            <header className="header_container">
                <h1 className="header_title">ㅇㅈㅁ?</h1>
                <div className="header_user_info_container">
                    {isLoggedIn && isButtonVisible && <div className="header_user_info_nickname_container">
                        <span><b>{nickname}</b>님, 환영합니다.</span>
                        <Spacer height="12px"/>
                    </div>}
                    {!isLoggedIn && isButtonVisible && <div className="header_button_container">
                        <button className="header_button" onClick={onClickSignIn}>로그인</button>
                        <Spacer width="12px"/>
                        <button className="header_button" onClick={onClickSignUp}>회원가입</button>
                    </div>}
                    {isLoggedIn && isButtonVisible && <div className="header_button_container">
                        <button className="header_button" onClick={onClickUserInfo}>회원 정보</button>
                        <Spacer width="12px"/>
                        <button className="header_button" onClick={onClickLogout}>로그아웃</button>
                    </div>}
                </div>
            </header>
            <Divider width={"100%"} height={"2px"}/>
        </div>
    )
}

export default Header;