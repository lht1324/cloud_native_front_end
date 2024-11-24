import './App.css';
import MainPage from "./components/main/MainPage";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import SignUpPage from "./components/auth/SignUpPage";
import SignInPage from "./components/auth/SignInPage";
import UserInfoPage from "./components/user/UserInfoPage";
import {useCallback, useEffect, useState} from "react";
import {getSignInAuto} from "./services/userApi";
import Home from "./components/home/Home";
import useAxiosRequest from "./hook/useAxiosRequest";

function App() {
    const { requestAPI } = useAxiosRequest();

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [id, setId] = useState("");
    const [nickname, setNickname] = useState("");

    const onChangeIsLoggedIn = useCallback((newIsLoggedIn) => {
        setIsLoggedIn(newIsLoggedIn);
    }, [])

    const checkAutoLogin = useCallback(async () => {
        await requestAPI(
            getSignInAuto(),
            (data) => {
                console.log(JSON.stringify(data));
                setIsLoggedIn(true);
                setId(data.user.id);
                setNickname(data.user.nickname);
            },
            (statusCode, message) => {
                setIsLoggedIn(false);
                console.log(message);
            },
            (error) => {
                if (error.response) {
                    alert(error.response.data.message)
                } else {
                    alert("네트워크 오류가 발생했습니다.")
                }
            }
        )
    }, []);

    const LocationWatcher = () => {
        const location = useLocation();

        useEffect(() => {
            if (location.pathname === "/") {
                checkAutoLogin();
            }
        }, [location.pathname])

        return null;
    }
    
    return (
        <div className="App">
            <BrowserRouter>
                <LocationWatcher/>
                <Routes>
                    <Route
                        path="/"
                        element={<Home
                            isLoggedIn={isLoggedIn}
                            id={id}
                            nickname={nickname}
                            onChangeIsLoggedIn={onChangeIsLoggedIn}
                        />}
                    >
                        <Route index element={<MainPage isLoggedIn={isLoggedIn} userInfo={{ id: id, nickname: nickname }}/>} />
                        <Route path="/signin" element={<SignInPage onChangeIsLoggedIn={onChangeIsLoggedIn}/>} />
                        <Route path="/signup" element={<SignUpPage/>} />
                        <Route path="/user/:userId" element={<UserInfoPage/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
