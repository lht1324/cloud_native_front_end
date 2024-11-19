import './App.css';
import MainPage from "./components/main/MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUpPage from "./components/auth/SignUpPage";
import SignInPage from "./components/auth/SignInPage";
import UserInfoPage from "./components/user/UserInfoPage";

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<MainPage/>} />
                  <Route path="/signin" element={<SignInPage/>} />
                  <Route path="/signup" element={<SignUpPage/>} />
                  <Route path="/userinfo/:userId" element={<UserInfoPage/>} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
