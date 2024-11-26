import Header from "../public/header/Header";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {useCallback, useEffect} from "react";
import {postLogout} from "../../services/userApi";
import useAxiosRequest from "../../hook/useAxiosRequest";
import Footer from "../public/Footer";

function Home({
    isLoggedIn,
    userInfo,
    onChangeLocation,
    onChangeIsLoggedIn
}) {
    const location = useLocation();
    const navigate = useNavigate();
    const { requestAPI } = useAxiosRequest();
    
    const onClickSignIn = useCallback(() => {
        navigate("/signin")
    }, [navigate])
    const onClickSignUp = useCallback(() => {
        navigate("/signup")
    }, [navigate])
    const onClickUserInfo = useCallback(() => {
        navigate(`/user/${userInfo.id}`)
    }, [userInfo.id, navigate])
    const onClickLogout = useCallback(async () => {
        if (isLoggedIn) {
            await requestAPI(
                postLogout(),
                (data) => {
                    alert("로그아웃되었습니다.")
                    onChangeIsLoggedIn(false);
                    navigate("/");
                },
                (statusCode, message) => {
                    alert(message)
                },
                (error) => {
                    console.log(`error = ${JSON.stringify(error)}`);
                    alert("로그아웃에 실패했습니다. 다시 시도해주세요.")
                }
            )
        } else {
            alert("이미 로그아웃된 상태입니다.")
        }
    }, [isLoggedIn, navigate, onChangeIsLoggedIn, requestAPI])

    useEffect(() => {
        onChangeLocation(location.pathname);
    }, [location.pathname, onChangeLocation])

    return (<div className="home_wrapper">
        <Header
            isLoggedIn={isLoggedIn}
            nickname={userInfo.nickname}
            onClickSignIn={onClickSignIn}
            onClickSignUp={onClickSignUp}
            onClickUserInfo={onClickUserInfo}
            onClickLogout={onClickLogout}
        />
        <main><Outlet/></main>
        <Footer/>
    </div>)
}

export default Home;