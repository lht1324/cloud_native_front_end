import './App.css';
import MainPage from "./components/main/MainPage";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import SignUpPage from "./components/auth/SignUpPage";
import SignInPage from "./components/auth/SignInPage";
import UserInfoPage from "./components/user/UserInfoPage";
import {useCallback, useEffect, useRef, useState} from "react";
import {getSignInAuto} from "./services/userApi";
import Home from "./components/home/Home";
import useAxiosRequest from "./hook/useAxiosRequest";

function App() {
    const { requestAPI } = useAxiosRequest();

    const [locationHistory, setLocationHistory] = useState({ prevLocation: "/", currentLocation: "/" });

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState({ });

    const onChangeLocation = useCallback((newLocation) => {
        const prevLocation = locationHistory.currentLocation

        if (prevLocation !== newLocation) {
            setLocationHistory({
                prevLocation: prevLocation,
                currentLocation: newLocation,
            })
        }
    }, [locationHistory.currentLocation])
    const onChangeIsLoggedIn = useCallback((newIsLoggedIn) => {
        setIsLoggedIn(newIsLoggedIn);
    }, [])

    const checkAutoLogin = useCallback(async () => {
        await requestAPI(
            getSignInAuto(),
            (data) => {
                console.log(JSON.stringify(data));
                setIsLoggedIn(true);
                setUserInfo({ id: data.user.id, nickname: data.user.nickname });
            },
            (statusCode, message) => {
                setIsLoggedIn(false);
                console.log(message);
            },
            (error) => {
                setIsLoggedIn(false);
                if (error.response) {
                    alert(error.response.data.message)
                } else {
                    alert("네트워크 오류가 발생했습니다.")
                }
            }
        )
    }, [requestAPI, setIsLoggedIn]);

    useEffect(() => {
        const { prevLocation, currentLocation } = locationHistory;
        
        if ((prevLocation !== currentLocation && currentLocation === "/") || (prevLocation === "/" && currentLocation === "/")) {
            checkAutoLogin();
        }
    }, [locationHistory])
    
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Home
                            isLoggedIn={isLoggedIn}
                            userInfo={userInfo}
                            onChangeLocation={onChangeLocation}
                            onChangeIsLoggedIn={onChangeIsLoggedIn}
                        />}
                    >
                        <Route index element={<MainPage isLoggedIn={isLoggedIn} userInfo={userInfo}/>} />
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
